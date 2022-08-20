import { faker } from "@faker-js/faker";

import Account from "./Account";
import { PaymentService } from "./PaymentService";

const Dwayne = new Account(100);

console.log(Dwayne.transactions);

const Paypal = new PaymentService();

Paypal.processTransactions(Dwayne);
