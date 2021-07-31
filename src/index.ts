import express , {Response, Request} from 'express';
const app = express();

app.get('/', (req : Request , res: Response)=>{
    const age : number = 39;
    res.json({message: "please like the video"})
})

app.listen('3000', () : void => {
    console.log("server is running")
})