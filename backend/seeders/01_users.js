const models = require('../models');
const User = models.User;
const faker = require('faker');
const genders = ['male', 'female'];

for (let i = 0; i < 20; i++) {
  User.create(
    {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      gender: genders[Math.floor(Math.random() * genders.length)],
      avatarUrl: faker.image.avatar()
    }
  )
    .then((user) => { console.log(user); })
    .catch((error) => { console.log(error); });
}