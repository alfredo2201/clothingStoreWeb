import Client from "../models/Client.model.js"

const register = (client) => {
    if(!client) return new Error("Client is required")
    const { userName, name, lastName, address,email, password } = client
    return new Promise((resolve, reject) =>{
        const client = Client.build({
            userName: userName,
            name: name,
            lastName: lastName,
            address: address,
            email: email,
            password: password
        });
        client.save()
        .then(() => resolve("Client successfully created"))
        .catch(() => reject("Client failed to create"))
    })
}

const findOne  = (client) => {
    if(!client) return new Error("Client is required")
    const { idClient } = client
    return new Promise((resolve, reject) => {
        const client = Client.findAll({
          where: {
            id: {
              [Op.eq]: idClient,
            },
          },
        });
        if (client.length === 0) {
          reject("Product not found");
        } else {
          resolve(client);
        }
      });
}