import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'st-base-layout',
  imports: [
    RouterOutlet
  ],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLayoutComponent {

}
