/** @format */

// import { CsvFileReader } from "./CsvFileReader";
// import { MatchReader } from "./MatchReader";
// import { CsvFileReader } from "./CsvFileReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./matchResult";

// const reader = new MatchReader("football.csv");
// reader.read();

// Create an object that satifies  the DataReader interface

const csvFileReader = new CsvFileReader("football.csv");

const matchReaded = new MatchReader(csvFileReader);
matchReaded.load();
matchReaded.matches;

// const matches = reader.data;

// console.log(matches);

console.log(MatchResult.AwayWin);

let maWin = 0;
const compareData: string = "Man United";

for (let match of matchReaded.matches) {
	if (match[1] === compareData && match[5] === MatchResult.HomeWin) {
		maWin++;
	} else if (match[2] === compareData && match[5] === MatchResult.AwayWin) {
		maWin++;
	}
}

console.log(`MAXWINS ${maWin}`);
