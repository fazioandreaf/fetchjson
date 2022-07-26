import User  from './User';
import Company from './Company';


interface Mappable {
    location: {
        lat: number,
        lng: number
    };
    catchPhrase: string | null,
    companyName: string | null,
}

export class CustomMap {
    googleMap: google.maps.Map;

    constructor(container: string) {
        this.googleMap = new  google.maps.Map(document.getElementById(container), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            },
            label: mappable.catchPhrase || '',
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.companyName || '',
            })
            infoWindow.close();
            infoWindow.open(this.googleMap, marker);
        })
    }
}