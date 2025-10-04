import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-callback',
  template: ''
})
export class CallbackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      const code = params['code'];
      const state = params['state'];

      if (code && state) {

        this.authService.exchangeCode(code, state).subscribe({
          next: (data: any) => {
            console.log("Backend token response:", data);

            sessionStorage.setItem('auth_token', JSON.stringify(data));
            this.authService.setSession(data);

            const authData = sessionStorage.getItem('auth_token');
            if (authData) {
              const parsedData = JSON.parse(authData);

              const rlCd = parsedData?.data?.userRoles?.roles?.rlCd;
              
              console.log("User role code:", rlCd);

              switch (rlCd) {
                case 'R2':
                  this.router.navigate(['/landing']); 
                  break;
                case 'R3':
                  this.router.navigate(['/cmn']); 
                  break;
                case 'R1':
                default:
                  this.router.navigate(['/dashboard']);
                  break;
              }
            }
          },
          error: (err: any) => console.error("Login failed", err)
        });
      }
    });
  }
}
