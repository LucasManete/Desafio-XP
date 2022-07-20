const { User } = require('../database/models');
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

module.exports = { createUser };
