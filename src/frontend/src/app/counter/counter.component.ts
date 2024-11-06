import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div data-testid="counter-feature">
      <div>
        <a class="link link-primary" routerLink="ui">UI</a>
      </div>
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class CounterComponent {}
