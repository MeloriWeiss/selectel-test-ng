import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { deliveryNav } from '../../../consts/delivery-nav';

@Component({
  selector: 'st-layout-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './layout-sidebar.component.html',
  styleUrl: './layout-sidebar.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutSidebarComponent {
  deliveryNav = deliveryNav;
}
