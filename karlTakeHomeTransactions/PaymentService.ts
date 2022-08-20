import Account from "./Account";
/**
 * @dev It's best practive in object oriented programing
 * to have objects only mutate their own state,
 * As Such I think a class based Payment Processor might be a more
 * robust apporach and allows you to have more modular, reusable code
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
    const minBase = Number(altTime.splice(-2));
    const hrs = Number(altTime) * 60;
    return hrs + minBase;
  }
  enoughBalance = (_balance: number, debit: number): boolean =>
    _balance > debit;
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
    const { transactions } = userAccount;
    let deductions = 0;
    let prevTimeStamp = transactions[0].timeStamp;
    transactions.forEach((tx) => {
      const { timeStamp } = tx;
      //compare checkes if 5 mins over,
      if (meetsTreshold(prevTimeStamp, timeStamp)) {
        // if next transaction time is 5min over curent transaction time
        //dedduct, reset transDed = 1, reset _timestamp
        userAccount.deductTx(tx);
        deductions = 1;
        prevTimeStamp = timeStamp;
        //else if under 5 mins,and deductions less thant 3,
        //incement deductions, deductTrans
      } else {
        if (deductions < 3) {
          userAccount.deductTx(tx);
          deductions += 1;
        }
      }
    });
  }
}
