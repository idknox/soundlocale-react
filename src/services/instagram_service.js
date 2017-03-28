const http = require('http');
let agent = new http.Agent();

class InstagramService {
	constructor() {
		this.clientId = process.env.IG_CLIENT_ID;
		console.log(this.clientId);
	}
}

const INSTAGRAM = new InstagramService();

export default INSTAGRAM;