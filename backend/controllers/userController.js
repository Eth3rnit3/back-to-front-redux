const models = require('../models');
const User = models.User;
// use User for class and user for instance
module.exports = {
  index: function (req, res, next) {
    User.findAll()
      .then((user) => { res.json({ user }) })
      .catch((error) => { console.log(error); });
  },
  show: function (req, res, next) {
    User.findByPk(req.params.id)
      .then((user) => { res.json({ user }) })
      .catch((error) => { console.log(error); });
  },
  create: function (req, res, next) {
    User.create({ ...req.body })
      .then((user) => { res.json({ user }) })
      .catch((error) => { console.log(error); })
  },
  update: function (req, res, next) {
    User.findByPk(req.params.id)
      .then((user) => {
        user.update({ ...req.body })
          .then((updateduser) => { res.json({ updateduser }); })
          .catch((error) => { console.log(error); })
      })
      .catch((error) => { console.log(error); });
  },
  delete: function (req, res, next) {
    User.findByPk(req.params.id)
      .then((user) => {
        user.destroy()
          .then((destroyeduser) => { res.json({ destroyeduser }); })
          .catch((error) => { console.log(error); })
      })
      .catch((error) => { console.log(error); });
  },
};
