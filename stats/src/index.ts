import CsvFileReader from "./CsvFileReader";
import MatchReader from './MatchReader';
import ConsoleReport from './reportTargets/ConsoleReport'
import WinsAnalysis from './analyzers/WinsAnalysis'
import {Summary} from './Summary'
import { HtmlReport } from './reportTargets/HtmlReport'

let csvFileReader = new CsvFileReader('./src/football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

// const summary = new Summary(
//     new WinsAnalysis('Man United'),
//     new ConsoleReport()
// )

// summary.buildAndPrintReport(matchReader.matches)

const summary = Summary.winsAnalysisWithHtmlReport('Man United')

// summary.buildAndPrintReport(matchReader.matches)
