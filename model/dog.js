const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename),
'data',
'dog-data.json');

const getDogsFromFile = cb => {
  fs.readFile(p, (err, data) => {
    if(err){
      return cb([]);
    }
    cb(JSON.parse(data));
  });
};

module.exports = class Dog {
  constructor(breed, imgUrl, desc) {
    this.breed = breed;
    this.imgUrl = imgUrl;
    this.desc = desc;
  }

  save() {
    this.id = Math.random().toString();
    getDogsFromFile(dogs => {
      dogs.push(this);
      fs.writeFile(p, JSON.stringify(dogs), err => {
        console.log(err);
      });
    });
  };
};