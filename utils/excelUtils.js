import * as XLSX from 'xlsx'
import path from 'path'

export function readExcelData(fileName,sheetName){
    const filePath = path.resolve('test-data',fileName)

    // Read the Excel workbook
    const workbook = XLSX.readFile(filePath)

    // Get the Sheet 

    const workSheet = workbook.Sheets[sheetName]

    // convert worksheet to json

    const data = XLSX.utils.sheet_to_json(workSheet)

    return data;
}