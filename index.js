// import express from 'express';
// import routerItem from './routes/item.route.js'

import { ejecuteTest } from './testModels/clientTest.js'
// import { ejecuteTestItem } from './testModels/itemTest.js';
// import { ejecuteManagerTest } from './testModels/managerTest.js';
// import { ejecuteManagerTest } from './testModels/managerTest.js';
import { ejecuteCardTest } from './testModels/cardTest.js';
// import { ejecuteSaleTest } from './testModels/saleTest.js';
// import { ejecuteItemSaleTest } from './testModels/itemSaleTest.js';
import {executeAssociations} from "./data/models/associations.js";
await executeAssociations()
// const app = express();

// app.use(express.json());

// app.use('/item', routerItem);

// app.listen(3000, () => {
//     console.log('server listening');
// });

//Pruebas de cliente
await ejecuteTest();
// const item = await findOne('camiseta1');
// console.log(JSON.stringify(item));

//Priuebas de Items
 //await ejecuteTestItem();

//Pruebas de Manager
// await ejecuteManagerTest();

// Prueba Card (EJECUTE PRIMERO 'ejecuteTest()') para tener clientes
//await ejecuteCardTest();

//prueba de sales (debe primero ejecutar ejecuteTest y ejecuteCardTest);
//await ejecuteSaleTest();

//prueba de item sales (debe de haber ejecuta todas las pruebas anteriores)
//await ejecuteItemSaleTest();
