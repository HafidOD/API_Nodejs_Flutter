const User = require('../models/User');

const faker = require('faker');

module.exports = {
  index: async function (req, res) {
    const users = await User.find();
    res.json({users});
  },

  create: async function (req, res) {
    for (let i = 0; i < 5; i++) {
      await User.create({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatar: faker.image.avatar()
      })
    }

    res.json({ message: '5 users created'});
  },

};
