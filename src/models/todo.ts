import {ITodo} from './../types/todo'
import {Schema, model} from 'mongoose'

const TodoSchema = new Schema<ITodo>({
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

export default model<ITodo>('Todo', TodoSchema)

