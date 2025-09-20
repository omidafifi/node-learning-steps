const fs = require(`fs`);

fs.readFile(`./etc/passwd`, (err, data) => {
  console.log(err);
  return data;
});

modules.export = {
  fs,
};
