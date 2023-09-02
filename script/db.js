import Sequelize from 'sequelize';

const sequelize = new Sequelize('sql10643133', 'sql10643133', 'uTEEIWcqKC', {
  host: 'sql10.freemysqlhosting.net',
  dialect: 'mysql',
  port: 3306,
});

export default sequelize;