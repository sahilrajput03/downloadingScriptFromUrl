const axios = require("axios");
const fs = require("fs");

const filePath = "fetched.js";

const jsFile =
  "https://gist.githubusercontent.com/sahilrajput03/e9dc0c6c58e403a1218fdfa81b887c22/raw/51b9a46939d27c8873833cca300d1e826375bdf2/temp.js";
const bootStrapCssUrl = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css";

(async function () {
  const returnedData = await axios.get(jsFile);
  //   const html = returnedData.text(); // This is not good, but works with html webpages.
  fs.writeFileSync(filePath, returnedData.data);
  console.log("file writtenn..");
  lastThing();
})();

function lastThing() {
  console.log("kaka is powerr");
  console.log("hell");
  // console.log(jsFile);
  // console.log(bootStrapCssUrl);

  const car = require(`./fetched.js`);
  car();

  /*   function maza() {
    console.log("$log:myFileIndexJs:-", myFileIndexJs);
    console.log("$log:bootStrapCssUrl:-", bootStrapCssUrl);
  }
  maza();
 */
}
