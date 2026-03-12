import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationManagerComponent } from '@st/shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'selectel-test';
}
