//This is not the api . This is for getting the data or response from the api.

const apimethods = require("./theApi");
const TheApi = new apimethods("TOKENS");// This is the token 


async function Main() {
    TheApi.getDogimg().then((data) => {
        console.log(data);
    }).catch((e) => {
        console.warn(e);
    })
}
Main();
