function doGet(e) {
  return HtmlService.createTemplateFromFile("index").evaluate()
  .setTitle("บอร์ดอันดับเหรียญ นาคาเกมส์ครั้งที่42")
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


function setAutomatically(){

  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('DATA');

  let name1 = sheet.getRange('B2').getValue();
  let gold1 = sheet.getRange('C2').getValue();
  let silver1 = sheet.getRange('D2').getValue();
  let bronze1 = sheet.getRange('E2').getValue();
  let img1 = sheet.getRange('K2').getValue();
  let sum1 = sheet.getRange('F2').getValue();

  let name2 = sheet.getRange('B3').getValue();
  let gold2 = sheet.getRange('C3').getValue();
  let silver2 = sheet.getRange('D3').getValue();
  let bronze2 = sheet.getRange('E3').getValue();
  let img2 = sheet.getRange('K3').getValue();
  let sum2 = sheet.getRange('F3').getValue();
  
  let name3 = sheet.getRange('B4').getValue();
  let gold3 = sheet.getRange('C4').getValue();
  let silver3 = sheet.getRange('D4').getValue();
  let bronze3 = sheet.getRange('E4').getValue();
  let img3 = sheet.getRange('K4').getValue();
  let sum3 = sheet.getRange('F4').getValue();

  let name4 = sheet.getRange('B5').getValue();
  let gold4 = sheet.getRange('C5').getValue();
  let silver4 = sheet.getRange('D5').getValue();
  let bronze4 = sheet.getRange('E5').getValue();
  let img4 = sheet.getRange('K5').getValue();
  let sum4 = sheet.getRange('F5').getValue();

  let name5 = sheet.getRange('B6').getValue();
  let gold5 = sheet.getRange('C6').getValue();
  let silver5 = sheet.getRange('D6').getValue();
  let bronze5 = sheet.getRange('E6').getValue();
  let img5 = sheet.getRange('K6').getValue();
  let sum5 = sheet.getRange('F6').getValue();

  let time_stamp = sheet.getRange('A9:E9').getValue();

  return[name1,gold1,silver1,bronze1,img1,sum1,
        name2,gold2,silver2,bronze2,img2,sum2,
        name3,gold3,silver3,bronze3,img3,sum3,
        name4,gold4,silver4,bronze4,img4,sum4,
        name5,gold5,silver5,bronze5,img5,sum5,time_stamp];
}