import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-secure',
  standalone: true, // If using standalone components
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css'],
})
export class SecureComponent {
  username: string = '';

  constructor(private keycloakService: KeycloakService) {
    this.username = this.keycloakService.getUsername();
  }
}
