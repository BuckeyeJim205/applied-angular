import { CanActivateFn, Router, Routes } from '@angular/router';
import { inject } from '@angular/core';
import { BankingComponent } from './banking.component';
import { DefaultComponent } from './pages/default.component';
import { DepositComponent } from './pages/deposit.component';
import { WithdrawComponent } from './pages/withdraw.component';
import { StatementComponent } from './pages/statement.component';
import { BankingStore } from './services/banking.store';

export const BANKING_ROUTES: Routes = [
  {
    path: '',
    component: BankingComponent,
    providers: [BankingStore],
    children: [
      {
        path: 'dashboard',
        component: DefaultComponent,
      },
      {
        path: 'deposit',
        component: DepositComponent,
      },
      {
        path: 'withdraw',
        component: WithdrawComponent,
      },
      {
        path: 'statement',
        component: StatementComponent,
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
];

function withdrawGuard(): CanActivateFn {
  return () => {
    const store = inject(BankingStore);
    const router = inject(Router);
    return (
      store.withdrawalAvailable() ||
      router.createUrlTree(['banking', 'dashboard'])
    );
  };
}