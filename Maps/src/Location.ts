import faker from 'faker';

export default class Location {
    constructor () {
        this.lat = parseFloat(faker.address.latitude());
        this.lng = parseFloat(faker.address.longitude());
    };

    getLocation(): {lat:number, lng :number} {
        return {
            lat: this.lat,
            lng: this.lng
        }
    };

    lat: number;
    lng: number;
}