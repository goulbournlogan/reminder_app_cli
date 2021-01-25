const fs = require('fs')

const person = {
   name: "Logan",
   age: 20 
};

const personJson = Json.stringify(person);

console.log(person);
console.log(personJson);

fs.writeFileSync("json_demo/person.json", personJson); 