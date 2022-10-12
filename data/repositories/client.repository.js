import Client from "../models/Client.model.js";

const register = async (value) => {
  if (!value) return new Error("Client is required");
  const { userName, name, lastName, address, email, password } = value;
  const client = Client.build({
    userName: userName,
    name: name,
    lastName: lastName,
    address: address,
    email: email,
    password: password,
  });
  await client
    .save()
    .then(() => "Client successfully created")
    .catch(() => "Client failed to create");
};

const update = async (value) => {
  if (!value) return new Error("Client is required");
  const client = await Client.findOne({
    where: {
      idClient: {
        [Op.eq]: value.id,
      },
    },
  });
  if (!client) return new Error("Client not found");
  const { userName, name, lastName, address, email, password } = value;
  Client.update({
    userName: userName,
    name: name,
    lastName: lastName,
    address: address,
  });
};

const deleteOne = async (value) => {
  if (!value) return new Error("Client is required");
  await Client.destroy({
    where: { idClient: value.id },
  })
    .then("Client deleted successfully")
    .catch(() => {
      throw new Error("Error deleting client");
    });
};

const findOne = async (value) => {
  if (!value) return new Error("Client is required");
  const { idClient } = value;
  try {
    const client = await Client.findAll({
      where: {
        idClient: idClient,
      },
    });
    if (client.length > 0) return client;
  } catch (e) {
    throw new Error("Client not found");
  }
};
const findAll = async () => {
  try {
    const client = await Client.findAll({
    });
    if (client.length > 0) return client;
  } catch (e) {
    throw new Error("Client not found");
  }
};

export {
    register,
    update,
    deleteOne,
    findOne,
    findAll
};
