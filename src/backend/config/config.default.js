module.exports = appInfo => {
  const config = {};

  // keys
  config.keys = appInfo.name + '_1509955570285_4571';

  // module config
  config.module = {
    'aa-hello': {
    },
  };

  // mysql
  config.mysql = {
    clients: {
      // donnot change the name
      __ebdb: {
        host: '127.0.0.1',
        port: '3306',
        user: 'admin',
        password: 'admin',
        database: 'eggfirst',
      },
    },
  };

  return config;
};
