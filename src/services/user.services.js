const { User, UserAcont } = require('../database/models');
const { token } = require('../auth/AuthToken');

const createUser = async ({
  name, email, password, document,
}) => {
  const result = await User.create({
    name, email, password, document,
  });
  const secret = token({ name, email });
  return {
    result,
    secret,
  };
};

const createAcont = async (codCliente, balance, codCorretora) => {
  const restult = await UserAcont.create(codCliente, balance, codCorretora);
  return restult;
};

module.exports = { createUser, createAcont };
