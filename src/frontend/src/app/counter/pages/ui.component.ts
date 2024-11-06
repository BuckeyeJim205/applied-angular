import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div data-testid="counter-feature-ui">
      <button [disabled]="store.decrementDisabled()" class="btn btn-primary" (click)="store.decrement()">-</button>
      <span data-testid="current">{{store.current()}}</span>
      <button class="btn btn-primary" (click)="store.increment()">+</button>
    </div>
    <div data-testid="fizzBuzz">{{store.fizzBuzz()}}</div>
  `,
  styles: ``,
})
export class UiComponent {
    store = inject(CounterStore);
}
