const Mailosaur = require("mailosaur");

const mailosaurClient = new Mailosaur(Cypress.env("MAILOSAUR_API_KEY"));

const getLastEmail = (server) => {
  return mailosaurClient.messages
    .list(server, {
      sentTo: Cypress.env("MAILOSAUR_EMAIL"),
    })
    .then((result) => result.items[0]);
};

module.exports = {
  getLastEmail,
};
