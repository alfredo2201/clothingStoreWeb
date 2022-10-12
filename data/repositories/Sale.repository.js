import { Sale } from "../models/Sale.model.js";

const register = async (sale) => {
    if (!sale) {
        res.send({ message: 'error sale' })
    }
    const { paymentMethod, total } = sale;
    await Sale.create({
        paymentMethod,
        total
    });
}

const findAll = async () => {
    const sales = await Sale.findAll();
    return sales;
}

//busca por id
const findOne = async (value) => {
    if (!value) return new Error("Sale is required");
    const { idSale } = value;
    try {
        const sale = await Sale.findAll({
            where: {
                id: {
                    [Op.eq]: idSale,
                },
            },
        });
        if (sale.length === 0) return sale;
    } catch (e) {
        throw new Error("Sale not found");
    }
};

const deleteOne = async (value) => {
    if (!value) return new Error("Sale is required");
    await Sale.destroy({
        where: { id: value.id },
    })
        .then("Sale deleted successfully")
        .catch(() => {
            throw new Error("Error deleting sale");
        });
};

const update = async (value) => {
    if (!value) return new Error("Sale is required");
    const sale = await Sale.findOne({
        where: {
            id: {
                [Op.eq]: value.id,
            },
        },
    });
    if (!sale) return new Error("Sale not found");
    const { paymentMethod, total } = value;
    Sale.update({
        paymentMethod: paymentMethod,
        total: total,
    });
};

export {
    register,
    findAll,
    findOne,
    deleteOne,
    update
}