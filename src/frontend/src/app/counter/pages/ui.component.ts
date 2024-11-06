import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DecrementButtonDirective, IncrementButtonDirective } from '@shared';
import { CounterStore } from '../services/counter.store';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DecrementButtonDirective, IncrementButtonDirective],
  template: `
    <div data-testid="counter-feature-ui">
      <button appDecrementButton [disabled]="store.decrementDisabled()" (click)="store.decrement()">-</button>
      <span data-testid="current">{{store.current()}}</span>
      <button appIncrementButton (click)="store.increment()">+</button>
    </div>
    <div data-testid="fizzBuzz">{{store.fizzBuzz()}}</div>
  `,
  styles: ``,
})
export class UiComponent {
    store = inject(CounterStore);
}
