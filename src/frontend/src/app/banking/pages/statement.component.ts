import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BankingStore } from '../services/banking.store';

@Component({
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
        <p>Statement your balance is</p>
    `,
    styles: ``,
    providers: [BankingStore]
})
export class StatementComponent {
    private bankingService = inject(BankingStore);

    // constructor(bankingService:BankingService) {
    //     this.bankingService = bankingService;
    // }
}