const fs = require('fs');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

async function extractText() {
    const data = new Uint8Array(fs.readFileSync('C:/Users/LENOVO/Downloads/Portfolio/Resume_Ammar_Saifee.pdf'));
    const doc = await pdfjsLib.getDocument(data).promise;
    let fullText = '';
    for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const textContent = await page.getTextContent();
        fullText += textContent.items.map(s => s.str).join(' ') + '\n';
    }
    fs.writeFileSync('C:/Users/LENOVO/Downloads/Portfolio/ammar-portfolio/pdf_out.txt', fullText);
    console.log("SUCCESS");
}
extractText().catch(console.error);
