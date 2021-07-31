import {Schema, model} from 'mongoose'

// interface representing a document in MongoDB
interface Todo {
    title: string,
    active_state: boolean,
    end_date : Date
}

const TodoSchema = new Schema<Todo>({
    title:{
        type: String,
        required: true
    },
    active_state:{
        type: Boolean,
        default: false,
    },
    end_date: {
        type: Date,
        required: true
    }
    
},
{
    timestamps:true
})

const TodoModel = model<Todo>('Todo', TodoSchema)

module.exports = TodoModel