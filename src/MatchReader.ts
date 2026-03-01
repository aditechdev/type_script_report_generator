/** @format */
import { CsvFileReader } from "./CsvFileReader";
import { MatchData } from "./MatchData";
import { MatchResult } from "./matchResult";
import { dateStringToDate } from "./utils";

interface DataReader {
	read(): void;
	data: string[][];
}

export class MatchReader {
	matches: MatchData[] = [];
	// reader: DataReader
	constructor(public reader: DataReader) {}

	static readFromCSV(file: string) {
		return new MatchReader(new CsvFileReader(file));
	}

	load(): void {
		this.reader.read();
		this.matches = this.reader.data.map((row: string[]): MatchData => {
			return [
				dateStringToDate(row[0]),
				row[1],
				row[2],
				parseInt(row[3]),
				parseInt(row[4]),
				row[5] as MatchResult,
				row[6],
			];
		});
	}
}
