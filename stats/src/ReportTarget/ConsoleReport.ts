import { OutputTarget } from "../Summery";

export default class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
