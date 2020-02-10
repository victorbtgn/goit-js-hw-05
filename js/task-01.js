console.log(`Task 1`);

const Account = function(obj) {
  const Account = Object.keys(obj);
  for (const key of Account) {
    if (key === "login") {
      this.login = obj[key];
      continue;
    }
    if (key === "email") {
      this.email = obj[key];
      continue;
    }
  }
};

Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof"
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com"
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com

const Vader = new Account({
  login: "Vader",
  email: "vader@darkside.com"
});

Vader.getInfo();
