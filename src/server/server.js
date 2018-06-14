import express from 'express';
import morgan from 'morgan';
import { handleRender } from './render.js';

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use(handleRender);

app.listen(port,()=>{
	console.log(`Server is listening on port : ${port}`);
});


