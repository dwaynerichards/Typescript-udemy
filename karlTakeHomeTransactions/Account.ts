import { faker } from "@faker-js/faker";

function createRandomTime(): string {
  const min = faker.finance.amount(10, 59);
  const hr = faker.finance.amount(1, 12);
  return hr + min;
}

export class Transaction {
  constructor(
    public ID: string,
    public account_ID: string,
    public amount: number,
    public timeStamp: string
  ) {}
}
export default class Account {
  public transactions: Transaction[] = [];
  public active: boolean = true;
  public ID: string = faker.finance.account();
  public balance: number = Number(faker.finance.amount());
  constructor(numTx: number) {
    this._createTransactions(numTx);
    this._sortTx();
  }
  _createTransactions(_amount: number): void {
    //create transaction, place push into transactiosn arr
    ////transID, accountid, amount, timestamp
    const { account, amount } = faker.finance;
    while (_amount > 0) {
      this.transactions.push(
        new Transaction(
          account(),
          this.ID,
          Number(amount()),
          createRandomTime()
        )
      );
    }
  }
  deductTx(tx: Transaction): void {
    if (this.balance > tx.amount) this.balance -= tx.amount;
  }
  _sortTx() {
    const { _sortTime, transactions } = this;
    transactions.sort(_sortTime);
  }
  _sortTime(transA: Transaction, transB: Transaction): number {
    return Number(transA.timeStamp) - Number(transB.timeStamp);
  }
}

type compareFn = (a: Transaction, b: Transaction) => number;
