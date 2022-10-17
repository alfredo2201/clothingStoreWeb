import express from 'express';
import routerItem from './routes/item.route.js';
import routerClient from './routes/client.route.js';
import routerCard from './routes/card.route.js';
import routerLogin from './routes/auth.route.js';
import { handleError } from './middlewares/handleError.js';
import {executeAssociations} from './data/models/associations.js';
await executeAssociations();

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use(routerItem);
app.use(routerCard);
app.use(routerClient);
app.use('/auth',routerLogin)


//middleware para errores
app.use(handleError)

app.listen(3000, ()=>{
    console.log('Server Listening');
});