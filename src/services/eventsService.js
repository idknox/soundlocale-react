import axios from 'axios';
import moment from 'moment';

export default class EventsService {
	fetch() {
		return axios.get(
			`https://${process.env.REACT_APP_API_DOMAIN}/api/events.json?date=${moment().format()}`
		)
	}
}

