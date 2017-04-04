import axios from 'axios';

class EventsService {

	fetch() {
		return axios.get(
			`http://${process.env.REACT_APP_API_DOMAIN}/api/events.json`
		)
	}
}

export default EventsService
