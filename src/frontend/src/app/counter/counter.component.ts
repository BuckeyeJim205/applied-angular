import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div data-testid="counter-feature">
      <div class="flex gap-4 p-4">
        <a class="link" routerLink="ui">UI</a>
        <a class="link" routerLink="prefs">Prefs</a>
      </div>
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class CounterComponent {}
