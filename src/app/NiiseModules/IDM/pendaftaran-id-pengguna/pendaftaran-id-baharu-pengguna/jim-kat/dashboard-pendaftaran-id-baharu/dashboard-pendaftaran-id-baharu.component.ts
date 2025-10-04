import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, GridModule, NavModule } from '@coreui/angular';

@Component({
  selector: 'app-dashboard-pendaftaran-id-baharu',
  templateUrl: './dashboard-pendaftaran-id-baharu.component.html',
  styleUrl: './dashboard-pendaftaran-id-baharu.component.scss',
  standalone: true,
  imports: [CommonModule, CardModule, GridModule, NavModule],
})
export class DashboardPendaftaranIdBaharuComponent {
  static title: string = 'Dashboard Pendaftaran ID Baharu';
}
