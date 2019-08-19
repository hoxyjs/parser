import to from "await-to-js";
import dotenv from "dotenv";
import Excel from "exceljs";

import connect from "./connect";
import Course, {ICourse} from "./course";

dotenv.config();

(async () => {
    const [err, result] = await to(connect());
    if (err) { throw new Error(err); }

    const workbook = new Excel.Workbook();
    const workbookFile = await workbook.xlsx.readFile(`${process.env.DOCKER_ROOT_DIR || process.env.ROOT_DIR}/src/assets/timetable.xlsx`);
    const worksheet = workbook.getWorksheet(1);

    worksheet.eachRow(async (row: Excel.Row, rowNumber: number) => {
        if (rowNumber < 10) {
            const [_, term, acadCareer, courseCode, classSection, startDate, endDate, mon, tue, wed, thu, fri, sat, sun, venue, startTime, endTime, title, offerDept, instructor]: any = row.values;

            const course = new Course({
                term,
                acadCareer,
                courseCode,
                classSection,
                title,
                offerDept,
                instructor: instructor && instructor.split(";").map((name: string) => name.trim()),
            });

            await course.save().then(() => console.log("Course created"));
        }
    });

    Course.find({}, function(err, courses) {
        console.log(courses);
    });
    return;
})();
