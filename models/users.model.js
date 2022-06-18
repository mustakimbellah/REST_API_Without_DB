const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "Mustakim Bellah",
    email: "abcabc@yahoo.com",
  },
  {
    id: uuidv4(),
    username: "Manj",
    email: "abababba@yahoo.com",
  },
];
module.exports = users;