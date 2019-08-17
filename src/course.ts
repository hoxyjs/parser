import mongoose, { Schema, Document } from 'mongoose';

interface ISchedule extends Document {
    startDate: string,
    endDate: string,
    day: string,
    startTime: string,
    endTime: string,
}

export interface ICourse extends Document {
    term: string,
    acadCareer: string,
    courseCode: string,
    classSection: string,
    schedules: ISchedule[],
    title: string,
    offerDept: string,
    instructor: string[]
}

const scheduleSchema = new mongoose.Schema({
    startDate: String,
    endDate: String,
    day: String,
    startTime: String,
    endTime: String,
})

const courseSchema = new mongoose.Schema({
    term: String,
    acadCareer: String,
    courseCode: String,
    classSection: String,
    schedules: [scheduleSchema],
    title: String,
    offerDept: String,
    instructor: [String],
});

const CourseModel = mongoose.model<ICourse>('Course', courseSchema);

export default CourseModel
