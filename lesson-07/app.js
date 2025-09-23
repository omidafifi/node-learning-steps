const fs = require(`fs`);
const path = require(`path`);

fs.mkdir(path.join(`test`), {}, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Foledr created`);
  }
});
