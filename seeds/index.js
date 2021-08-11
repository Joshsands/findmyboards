const seedUsers = require('./user-seeds');
const seedrank = require('./rank-seeds');
const seedfriends = require('./friends-seeds');
const seedGame = require('./game-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('-------DATABASE SYNCED-------');
  await seedUsers();
  console.log('------USERS SEEDED--------');

  await seedrank();
  console.log('-------RANK SEEDED-------');

  await seedfriends();
  console.log('-------FRIENDS SEEDED-------');

  await seedGame();
  console.log('------GAMES SEEDED-------')

  process.exit(0);
};

seedAll();