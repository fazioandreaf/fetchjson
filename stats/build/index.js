"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
const MatchReader_1 = __importDefault(require("./MatchReader"));
const Summary_1 = require("./Summary");
let csvFileReader = new CsvFileReader_1.default('./src/football.csv');
const matchReader = new MatchReader_1.default(csvFileReader);
matchReader.load();
// const summary = new Summary(
//     new WinsAnalysis('Man United'),
//     new ConsoleReport()
// )
// summary.buildAndPrintReport(matchReader.matches)
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
// summary.buildAndPrintReport(matchReader.matches)
