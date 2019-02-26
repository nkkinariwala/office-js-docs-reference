import * as fsx from 'fs-extra';
import * as path from "path";

tryCatch(async () => {
    const snippets = path.resolve("../json/snippets.yaml");

    fsx.copySync(snippets, "../json/excel/snippets.yaml");
    fsx.copySync(snippets, "../json/excel_1_1/snippets.yaml");
    fsx.copySync(snippets, "../json/excel_1_2/snippets.yaml");
    fsx.copySync(snippets, "../json/excel_1_3/snippets.yaml");
    fsx.copySync(snippets, "../json/excel_1_4/snippets.yaml");
    fsx.copySync(snippets, "../json/excel_1_5/snippets.yaml");
    fsx.copySync(snippets, "../json/excel_1_6/snippets.yaml");
    fsx.copySync(snippets, "../json/excel_1_7/snippets.yaml");
    fsx.copySync(snippets, "../json/excel_1_8/snippets.yaml");

    fsx.copySync(snippets, "../json/office/snippets.yaml");

    fsx.copySync(snippets, "../json/onenote/snippets.yaml");

    fsx.copySync(snippets, "../json/outlook/snippets.yaml");
    fsx.copySync(snippets, "../json/outlook_1_1/snippets.yaml");
    fsx.copySync(snippets, "../json/outlook_1_2/snippets.yaml");
    fsx.copySync(snippets, "../json/outlook_1_3/snippets.yaml");
    fsx.copySync(snippets, "../json/outlook_1_4/snippets.yaml");
    fsx.copySync(snippets, "../json/outlook_1_5/snippets.yaml");
    fsx.copySync(snippets, "../json/outlook_1_6/snippets.yaml");
    fsx.copySync(snippets, "../json/outlook_1_7/snippets.yaml");

    fsx.copySync(snippets, "../json/powerpoint/snippets.yaml");

    fsx.copySync(snippets, "../json/visio/snippets.yaml");

    fsx.copySync(snippets, "../json/word/snippets.yaml");
    fsx.copySync(snippets, "../json/word_1_1/snippets.yaml");
    fsx.copySync(snippets, "../json/word_1_2/snippets.yaml");
    fsx.copySync(snippets, "../json/word_1_3/snippets.yaml");
});

async function tryCatch(call: () => Promise<void>) {
    try {
        await call();
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
