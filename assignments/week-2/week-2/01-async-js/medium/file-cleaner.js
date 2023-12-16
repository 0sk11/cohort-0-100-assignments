var fs = require("fs/promises");
let data = "";

async function ReadFile() {
  data = await fs.readFile(`${__dirname}\\file.txt`, "utf-8");
  return data; // Change from 'return d;' to 'return data;'
}

(async () => {
  await ReadFile();
  data = data.replace(/\s/g, "");
  fs.writeFile(`${__dirname}\\file.txt`, data);
})();
