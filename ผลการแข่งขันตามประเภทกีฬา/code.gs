function doGet(e) {
  return HtmlService.createTemplateFromFile("index").evaluate()
  .setTitle("E-SCOREBOARD")
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


function setAutomatically(){

  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('ชีต1');


  let point1_1 = sheet.getRange('A4').getValue();
  let point1_2 = sheet.getRange('C4').getValue();
  let name1_1 = sheet.getRange('A3').getValue();
  let name1_2 = sheet.getRange('C3').getValue();

  let point2_1 = sheet.getRange('A8').getValue();
  let point2_2 = sheet.getRange('C8').getValue();
  let name2_1 = sheet.getRange('A7').getValue();
  let name2_2 = sheet.getRange('C7').getValue();

  let point3_1 = sheet.getRange('A12').getValue();
  let point3_2 = sheet.getRange('C12').getValue();
  let name3_1 = sheet.getRange('A11').getValue();
  let name3_2 = sheet.getRange('C11').getValue();

  let point4_1 = sheet.getRange('A16').getValue();
  let point4_2 = sheet.getRange('C16').getValue();
  let name4_1 = sheet.getRange('A15').getValue();
  let name4_2 = sheet.getRange('C15').getValue();

  let point5_1 = sheet.getRange('A20').getValue();
  let point5_2 = sheet.getRange('C20').getValue();
  let name5_1 = sheet.getRange('A19').getValue();
  let name5_2 = sheet.getRange('C19').getValue();


  let status = sheet.getRange('A23:C23').getValue();
  

  return[point1_1,point1_2,name1_1,name1_2,
  point2_1,point2_2,name2_1,name2_2,
  point3_1,point3_2,name3_1,name3_2,
  point4_1,point4_2,name4_1,name4_2,
  point5_1,point5_2,name5_1,name5_2,status];
}