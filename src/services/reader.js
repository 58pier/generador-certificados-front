export const reader = () => {
  const fs = require("fs");
  const pdf = require("pdf-parse");

  let dataBuffer = fs.readFileSync("./a.pdf");

  pdf(dataBuffer).then(function (data) {
    // PDF text
    console.log(JSON.stringify(data.text));
    return data.text;
  });
};
