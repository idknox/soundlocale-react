import axios from 'axios';

class EventsService {

	fetch() {
		return axios.get(
			'http://soundlocale-api-rails.herokuapp.com/api/events.json'
		)
	}
}

export default EventsService
