import { faker } from '@faker-js/faker';


export class Company {
    location: {
        lat: number;
        lng: number;
    }
    name: string
    catchPhrase: string

    constructor() {
        this.name = faker.company.name(),
        this.catchPhrase = faker.company.catchPhrase(),
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }

}
