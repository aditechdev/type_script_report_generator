/** @format */

import { OutPutTarget } from "../Summary";
import fs from "fs";

export class HTMLReport implements OutPutTarget {
	print(report: string): void {
		const html = `
        <div>
        <h1>Analysis Option</h1>
        <div>${report}</div>
        </div>
        `;
		console.log(report);

		fs.writeFileSync("report.html", html);
	}
}
