/** @format */

import { WinAnalysis } from "./analyzers/winsAnalysis";
import { MatchData } from "./MatchData";
import { HTMLReport } from "./report/htmReport";

export interface Analyzer {
	run(matches: MatchData[]): string;
}

export interface OutPutTarget {
	print(report: string): void;
}

export class Summary {
	constructor(
		public analyzer: Analyzer,
		public outPutTarget: OutPutTarget,
	) {}

	static winsAnalysisWithHtmlReport(team: string) {
		return new Summary(new WinAnalysis(team), new HTMLReport());
	}

	buildAndPrintReport(matches: MatchData[]): void {
		const output = this.analyzer.run(matches);
		this.outPutTarget.print(output);
	}
}
