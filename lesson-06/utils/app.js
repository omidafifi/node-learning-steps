// utils/logger.js باید به صورت ES Module باشد
export function logger(message) {
  console.log("LOG:", message);
}

// main.js
import { logger } from "./utils/logger.js";

class Person {
  constructor(age = 34, firstName = "Omidreza", lastName = "", phoneNumber = "", adresse = "") {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.adresse = adresse;
  }
}

const person = new Person();
logger("Hi Omidreza");

export { person };