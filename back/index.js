import express from 'express';
import cors from 'cors';
import routerItem from './routes/item.route.js';
import routerClient from './routes/client.route.js';
import routerCard from './routes/card.route.js';
import routerLogin from './routes/auth.route.js';
import routerSale from './routes/sale.route.js';
import routerAdmin from './routes/admin.route.js';
import routerItemSale from './routes/itemSale.js';
import { handleError } from './middlewares/handleError.js';
import {executeAssociations} from './data/models/associations.js';
await executeAssociations();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//whitelist, path publicos

app.use(routerAdmin);
app.use(routerItemSale);
app.use(routerClient);
app.use(routerItem);
app.use(routerCard);
app.use(routerClient);
app.use(routerSale);
app.use('/auth',routerLogin);
app.use('/uploads', express.static('./uploads'))

app.use(handleError)

app.listen(3000, ()=>{
    console.log('Server Listening');
});