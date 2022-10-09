import {Item} from '../data/models/Item.model.js'

export const ejecuteTestItem = async() =>{
    console.log('Se Crearon los Items')
    await createItem();

    const items = await getAllItemas();
    items.map( i => console.log(i.dataValues));

    //atualizar item con id 1
    console.log('Item Actualizado');
    await updateItem();

    //Se elimina el item con id 1
    console.log('Se elimina el item con id 1');
    await deleteItem();

    console.log('items restantes');
    const items2 = await getAllItemas();
    items2.map( i => console.log(i.dataValues));
}

const createItem = async() =>{
    await Item.create({
        name: 'camiseta1',
        category: 'Camisetas',
        size: 'Grande',
        price: 100,
        stock: 20
    });

    await Item.create({
        name: 'camiseta2',
        category: 'Camisetas',
        size: 'chica',
        price: 100,
        stock: 20
    });
}

const getAllItemas = async() =>{
    const items = await Item.findAll({attributes: ['name', 'category', 'size', 'price', 'stock']});
    return items;
}

const updateItem = async() =>{
    const item = await Item.findOne({where: {idItem: 1}});
    console.log('Item antes de actualizar: ', item.dataValues);
    await item.update({name: 'itemActualizado'})
    console.log('Item actualizado: ', item.dataValues);
}

const deleteItem = async() =>{
    await Item.destroy({where: {idItem: 1}});
}