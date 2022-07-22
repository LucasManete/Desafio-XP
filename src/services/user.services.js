const { User } = require('../database/models');
const { token } = require('../auth/AuthToken');

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: email, password });
  if (user === null) {
    const result = { status: 404, message: 'usuario inválido' };
    return result;
  }
  const result = token({ email });
  return result;
};

module.exports = { loginUser };
