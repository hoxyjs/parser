// read from a file
import dotenv from "dotenv";
import Excel from "exceljs";

dotenv.config();

(async () => {
    const workbook = new Excel.Workbook();
    const workbookFile = await workbook.xlsx.readFile(`${process.env.ROOT_DIR}/src/assets/timetable.xlsx`);
})();
