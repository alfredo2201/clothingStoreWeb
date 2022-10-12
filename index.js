import {ejecuteTest} from './testModels/clientTest.js'
//import { ejecuteTestItem } from './testModels/itemTest.js';
//import { ejecuteManagerTest } from './testModels/managerTest.js';
//import { ejecuteCardTest } from './testModels/cardTest.js';
//import { ejecuteSaleTest } from './testModels/saleTest.js';
//import { ejecuteItemSaleTest } from './testModels/itemSaleTest.js';
//Pruebas de cliente
await ejecuteTest();

//Priuebas de Items
//await ejecuteTestItem();

//Pruebas de Manager
//await ejecuteManagerTest();

// Prueba Card (EJECUTE PRIMERO 'ejecuteTest()') para tener clientes
//await ejecuteCardTest();

//prueba de sales (debe primero ejecutar ejecuteTest y ejecuteCardTest);
//await ejecuteSaleTest();

//prueba de item sales (debe de haber ejecuta todas las pruebas anteriores)
//await ejecuteItemSaleTest();
