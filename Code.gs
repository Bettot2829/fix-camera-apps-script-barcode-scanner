/** Barcode Scanner - @rameezimdad */

// serve dashboard UI
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Barcode Scanner')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// receive scanned barcode from Netlify page
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const barcode = data.barcode;
    const ts = new Date();

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName('Scans');
    if (!sh) {
      sh = ss.insertSheet('Scans');
      sh.appendRow(['Timestamp', 'Barcode', 'Source']);
    }

    sh.appendRow([ts, barcode, 'Netlify Scanner']);

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'success', barcode })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// last 10 scans for dashboard
function getRecentScans() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName('Scans');
  if (!sh || sh.getLastRow() < 2) return [];

  const last = sh.getLastRow();
  const start = Math.max(2, last - 9);
  return sh.getRange(start, 1, last - start + 1, 3).getValues().reverse();
}
