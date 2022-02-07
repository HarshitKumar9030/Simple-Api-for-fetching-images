const fetch = require("node-fetch"); //npm i node-fetch@2 | Install nodefetch version 2.6.7 because current version only supports es
let baseUrl = "your api's base url"; //API URL
//if you want to test use |baseurl = api.ignesious.tech|


class TheApi {
    constructor(token) {
        if(!token) throw new TypeError("valid Token must be provided!")
        this.token = token;
    }
  getDogimg() {
        return new Promise((resolve, reject) => {
            fetch(encodeURI(`${baseUrl}/image/dog?token=${this.token}`)).then(async data => {
                let jsonData = await data.json();
                if(jsonData.error) return reject(jsonData.error);
                return resolve(jsonData);
            }).catch(reject);
        })
    }
}
module.exports = TheApi;
