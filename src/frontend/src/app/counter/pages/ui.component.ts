import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div data-testid="counter-feature-ui">
      <button [disabled]="shouldDisable()" class="btn btn-primary" (click)="decrementCounter()">-</button>
      <span data-testid="current">{{counterValue()}}</span>
      <button class="btn btn-primary" (click)="incrementCounter()">+</button>
    </div>
    <div data-testid="fizzBuzz">{{fizzBuzz()}}</div>
  `,
  styles: ``,
})
export class UiComponent {
    counterValue = signal(0);
    
    incrementCounter() {
        this.counterValue.update((b) => b + 1);
    }

    decrementCounter() {
        this.counterValue.update((b) => b - 1);
    }

    shouldDisable() {
        return this.counterValue() === 0;
    }

    fizzBuzz() {
        if (this.counterValue() === 0) {
            return '';
        }
        else if (this.counterValue() % 3 === 0 && this.counterValue() % 5 === 0) {
            return 'FizzBuzz';
        }
        else if (this.counterValue() % 3 === 0) {
            return 'Fizz';
        }
        else if (this.counterValue() % 5 === 0) {
            return 'Buzz';
        }
        else {
            return '';
        }
    }
}
