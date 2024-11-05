export type TimeStamp = number;
 
export type BankTransaction = {
    id: string;
    kind: 'withdrawal' | 'deposit';
    date: TimeStamp;
    amount: number;
    newBalance: number;
};