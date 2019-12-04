module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    username: 'root',
    password: 'Teclogic01',
    database: 'yourSong',
    host: 'localhost',
    dialect: 'mysql',
  }
};

