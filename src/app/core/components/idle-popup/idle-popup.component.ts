import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { IdleService } from '../../services/idle.service';
import { AuthService } from '../../services/auth.service';

type PopupType = 'idle' | 'token' | null;

@Component({
  selector: 'app-idle-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './idle-popup.component.html',
  styleUrls: ['./idle-popup.component.scss']
})
export class IdlePopupComponent implements OnInit, OnDestroy {
  visible = false;
  countdown = 0;
  popupType: PopupType = null;

  private sub = new Subscription();

  constructor(
    private idle: IdleService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // Idle handling
    this.sub.add(
      this.idle.idleState.subscribe((state) => {
        if (state === 'idle') {
          // Only show idle popup if token popup is not active
          if (this.popupType !== 'token') {
            this.visible = true;
            this.popupType = 'idle';
          }
        } else if (state === 'timedOut') {
          this.logout();
        } else {
          if (this.popupType === 'idle') {  // only clear if idle
            this.visible = false;
            this.popupType = null;
          }
        }
      })
    );

    this.sub.add(
      this.idle.countdown.subscribe((c) => {
        if (this.popupType === 'idle') {
          this.countdown = c;
        }
      })
    );

    // untuk handle token expiry
    this.sub.add(
      this.auth.sessionExpiring.subscribe((seconds) => {
        if (seconds !== null) {
          console.log(`Token expiring in ${seconds}s, showing popup`);
          this.countdown = seconds;
          this.visible = true;
          this.popupType = 'token';  // always override idle
        } else {
          // token no longer expiring, hide token popup
          if (this.popupType === 'token') {
            this.visible = false;
            this.popupType = null;
          }
        }
      })
    );
  }

  staySignedIn() {
    if (this.popupType === 'idle') {
      // Just reset idle timer
      this.idle.reset();
      this.visible = false;
    } else if (this.popupType === 'token') {
      // Call refresh token
      this.auth.refreshToken().subscribe({
        next: () => {
          console.log("Token refreshed, session extended");
          this.visible = false;
          this.idle.reset(); // reset idle too, good UX
        },
        error: (err) => {
          console.error("Failed to refresh token", err);
          this.logout();
        }
      });
    }
  }


  logout() {
    this.idle.stop();
    this.visible = false;
    this.popupType = null;
    this.auth.logout();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
