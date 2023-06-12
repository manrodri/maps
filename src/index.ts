import { User } from './User';
import { Company } from './Company';
import { Map } from './Map'

const user = new User();
const company = new Company();

console.log(user);
console.log(company);

const divId = 'map'
const map = new Map(divId, {
    zoom: 1,
    center: {
        lat: user.location.lat,
        lng: user.location.lng
    }
});

map.addMarker(user)
map.addMarker(company)
