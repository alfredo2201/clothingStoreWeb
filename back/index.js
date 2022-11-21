import express from 'express';
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


app.use(express.urlencoded());
app.use(express.json());
//whitelist, path publicos

app.use(routerAdmin);
app.use(routerItemSale);
app.use(routerClient);
app.use(routerItem);
app.use(routerCard);
app.use(routerClient);
app.use(routerSale);
app.use('/auth',routerLogin);


//middleware para errores
app.use(handleError)

app.listen(3000, ()=>{
    console.log('Server Listening');
    // const a = '1234567890123456';
    // const b = a.slice(0, 14);
    // const c = a.slice(14, 16);
    // console.log('b->',b, 'c->', c);
    // console.log('result ->', b+c);
});