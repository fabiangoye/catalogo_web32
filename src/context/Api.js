const server = 'http://localhost:3000';
const apiRegister = `${server}/user`;
const apiLogin = `${server}/user/auth`;
const apiProduct = `${server}/product`;
const apiProductByUser = `${apiProduct}/user`;

export {apiRegister, apiLogin,apiProduct, apiProductByUser};