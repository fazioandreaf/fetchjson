import faker from 'faker';
import Location from './Location';

class Company {
	constructor() {
		this.companyName = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this. location = new Location().getLocation();
	};

    companyName: string;
	catchPhrase: string;
	location: Location
}

export default Company;