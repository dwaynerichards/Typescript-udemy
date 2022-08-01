import { OutputTarget } from "../Summery";
import * as fs from "fs/promises";

export default class HtmlReport implements OutputTarget {
  constructor(public reportName: string) {}
  async print(report: string): Promise<void> {
    const html = `
        <div>
            <h1>
            Analysis Report
            </h1>
            <div>
            ${report}
            </div>
        </div>
        `;

    await fs.writeFile(`./${this.reportName}.html`, html);
  }
}
