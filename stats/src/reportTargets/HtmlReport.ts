import { OutputTarget } from "./../Summary";
import { writeFileSync } from "fs";

export class HtmlReport implements OutputTarget {
    print(report: string): void {
        const html =
`<div>
    <h1>Analysys Output</h1>
    <div>${report}</div>
</div>`
        writeFileSync('report.html', html);
    }
}