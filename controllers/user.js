const { response } = require('express')

const getUsers = (req, res= response) => {

    const {q,nombre = 'No name', apikey, page = 1, limit = 10}= req.query;

    res.send({
      msg: "get API - controller",
      query: q,
      nombre,
      apikey,
      page,
      limit
    });
}

const updateUser = (req, res) => {

    const id = req.params.id

    res.send({
        msg: "put API - controller",
        id
    });
};

const createUser = (req, res) => {

  const {nombre, edad} = req.body;

  res.send({
    msg: "post API - controller",
    nombre,
    edad
  });
};

const deleteUser = (req, res) => {
  res.send({
    msg: "delete API - controller",
  });
};

const patchUser = (req, res) => {
  res.send({
    msg: "patch API - controller",
  });
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    patchUser
}
