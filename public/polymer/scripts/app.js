"use strict";
var io = io();
var app = document.querySelector("#app");
//app.route = "avaleht";

class App {
  constructor(app) {
    this.app = document.querySelector(app);
    this.init();
  }

  init() {
    page("/", () => {
      this.home();
    });
    page("/tellimused", () => {
      this.orders();
    });
    page("/arved", () => {
      this.invoices();
    });
    page({hashbang: true});

    io.emit("welcome");
  }

  home() {
    console.log("Avaleht!")
    this.app.route = "avaleht"
  }

  orders() {
    console.log("Tellimused!")
    this.app.route = "tellimused";
  }

  invoices() {
    console.log("Arved!")
    this.app.route = "arved";
  }
}


var app = new App("#app");


