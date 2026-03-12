import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';

@Component({
  selector: 'st-delivery-layout',
  imports: [RouterOutlet, LayoutSidebarComponent, LayoutHeaderComponent],
  templateUrl: './delivery-layout.component.html',
  styleUrl: './delivery-layout.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeliveryLayoutComponent {}
