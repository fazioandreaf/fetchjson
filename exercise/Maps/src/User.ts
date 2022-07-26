import faker from 'faker';
import Location from './Location';

class User {
	constructor() {
		this.name = faker.name.firstName();
		this.location= new Location().getLocation();
	};

    name: string;
    location: Location
}

export default User;