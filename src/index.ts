/** @format */

import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./matchResult";

const reader = new MatchReader("football.csv");
reader.read();

// const matches = reader.data;

// console.log(matches);

console.log(MatchResult.AwayWin);

let maWin = 0;
const compareData: string = "Man United";

for (let match of reader.data) {
	if (match[1] === compareData && match[5] === MatchResult.HomeWin) {
		maWin++;
	} else if (match[2] === compareData && match[5] === MatchResult.AwayWin) {
		maWin++;
	}
}

console.log(`MAXWINS ${maWin}`);
