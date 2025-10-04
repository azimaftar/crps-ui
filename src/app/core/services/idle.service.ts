// src/app/core/services/idle.service.ts
import { Injectable } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class IdleService {
  watch() {
    throw new Error('Method not implemented.');
  }
  idleState = new BehaviorSubject<'active' | 'idle' | 'timedOut'>('active');
  countdown = new BehaviorSubject<number>(0);

  // private baseUrl = environment.apiIdmBaseUrl;
  private baseUrl = 'http://localhost:8081';


  constructor(private http: HttpClient, private idle: Idle, private keepalive: Keepalive) {
    this.idle.setTimeout(15); // 15s countdown popup

    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.getIdleTimeout().subscribe((config: any) => {
      console.log('API response untuk idle timeout:', config);

      // pick from config.data[0].val
      const idleVal = config?.data?.[0]?.val;

      const idleNumber = Number(idleVal);

      if (idleNumber > 0) {
        this.idle.setIdle(idleNumber);
        this.start();
      } else {
        console.warn('Invalid timeout value:', idleNumber);
      }
    });

    this.idle.onIdleStart.subscribe(() => {
      console.log('Idle started!');
      this.idleState.next('idle');

      // clear any existing interrupts to avoid multiple countdowns
      this.idle.clearInterrupts();
    });

    this.idle.onTimeoutWarning.subscribe((seconds) => {
      console.log('Timeout warning', seconds);
      this.countdown.next(seconds);
    });

    this.idle.onTimeout.subscribe(() => {
      console.log('Timed out!');
      this.idleState.next('timedOut');
    });

    this.keepalive.interval(15);
  }

  getIdleTimeout() {
    return this.http.get(
      // harcode sebab ini mmg code untuk idle timeout
      `${this.baseUrl}/CMN/getDataKonfigurasiByCarian?code=CFG03`
    );
  }

  start() {
    this.idle.watch();
    this.idleState.next('active');
  }

  stop() {
    this.idle.stop();
  }

  reset() {
    // Re-enable interrupts and reset the idle timer
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);  
    this.start();
  }
}

