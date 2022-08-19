/**
 * @dev It's best practive in object oriented programing
 * to have objects only mutate their own state,
 * As Such I think a class based Payment Processor might be a more
 * robust apporach and allows you to have more modular, reusable code
 *
 * this answer assumes that transactions are stored as an array on the user objects
 */
export class PaymentService {
  constructor() {}
  ///function returns if time a is within 5 min of time b
  meetsTreshold(timeA: string, timeB: string): boolean {
    const { convertTime } = this;
    const limit = convertTime(timeA) + 5;
    return convertTime(timeB) > limit;
  }
  convertTime(time: string): number {
    //multiply 60 first 2 char, add sum to last two char
    //"1222"
    const altTime = time.split("");
    const minBase = Number(altTime.slice(-2));
    const hrs = Number(altTime) * 60;
    return hrs + minBase;
  }
  /**
   * @dev function sorts array of transactions, then iterates through
   * each transaction using the payment processor's time parameters
   * to determine which transactions should be deduced. If the parameter is
   * within line, the processor invokes the deduct function on the user object
   * which has it mutate it's own state.
   * @param userAccount the user account to be sorted and processed
   */
  processTransactions(userAccount: Account): void {
    const { meetsTreshold } = this;
    const { transactions, deductTransaction } = userAccount;
    let deductions = 0;
    let prevTimeStamp = transactions[0].timeStamp;
    //[1],     [2],    [3],    [5],    [11],   [15]
    //    transD =2, _timeS =2
    userAccount.sortTransactions().forEach((transaction) => {
      const { timeStamp } = transaction;
      //compare checkes if 5 mins over,
      if (meetsTreshold(prevTimeStamp, timeStamp)) {
        // if next transaction time is 5min over curent transaction time
        //dedduct, reset transDed = 1, reset _timestamp
        deductTransaction(transaction);
        deductions = 1;
        prevTimeStamp = timeStamp;
        //else if under 5 mins,and deductions less thant 3,
        //incement deductions, deductTrans
      } else {
        if (deductions < 3) {
          deductTransaction(transaction);
          deductions += 1;
        }
      }
    });
  }
}

class Account {
  constructor(
    public ID: string,
    public balance: number,
    public active: boolean,
    public transactions: Transaction[]
  ) {}
  deductTransaction(_transaction: Transaction): void {
    this.balance -= _transaction.amount;
  }
  sortTransactions() {
    const { sortTime, transactions } = this;
    return transactions.sort(sortTime);
  }
  sortTime(transA: Transaction, transB: Transaction): number {
    return Number(transA.timeStamp) - Number(transB.timeStamp);
  }
}

class Transaction {
  constructor(
    public ID: string,
    public account_ID: string,
    public amount: number,
    public timeStamp: string
  ) {}
}

type compareFn = (a: Transaction, b: Transaction) => number;
