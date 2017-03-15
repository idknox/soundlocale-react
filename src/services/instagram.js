const http = require('http');
let agent = new http.Agent();

console.log(agent);

class Instagram {
	constructor() {
		this.clientId = process.env.IG_CLIENT_ID;
		console.log(this.clientId);
	}
}

const INSTAGRAM = new Instagram();

export default INSTAGRAM;