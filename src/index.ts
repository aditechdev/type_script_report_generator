/** @format */

// import { CsvFileReader } from "./CsvFileReader";
// import { MatchReader } from "./MatchReader";
// import { CsvFileReader } from "./CsvFileReader";
import { WinAnalysis } from "./analyzers/winsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./report/consoleReport";
import { Summary } from "./Summary";
import { HTMLReport } from "./report/htmReport";

// import { MatchResult } from "./matchResult";

// const reader = new MatchReader("football.csv");
// reader.read();

// Create an object that satifies  the DataReader interface

// const csvFileReader = new CsvFileReader("football.csv");

const matchReaded =  MatchReader.readFromCSV("football.csv");
matchReaded.load();

// const summary = new Summary(new WinAnalysis("Man United"), new HTMLReport());
// const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport());
// summary.buildAndPrintReport(matchReaded.matches);
// matchReaded.matches;

// const matches = reader.data;

// console.log(matches);

// console.log(MatchResult.AwayWin);

const summary = Summary.winsAnalysisWithHtmlReport("Man United");

summary.buildAndPrintReport(matchReaded.matches);
