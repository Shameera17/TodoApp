// // your document interface can extend Mongoose's Document class
// // interface representing a document in MongoDB
import {Document} from 'mongoose'

export interface ITodo extends Document {
    title: string,
    active_state: boolean,
    end_date: Date
}