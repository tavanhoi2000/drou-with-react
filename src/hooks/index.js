const getToken = (token) => localStorage.getItem(token);
const removeToken = (token) => localStorage.removeItem(token)
const setToken =(token, value) => localStorage.setItem(token, value)

export { getToken, removeToken, setToken };
