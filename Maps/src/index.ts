/// <reference types="@types/google.maps" />
import User  from './User';
import Company from './Company';

const user = new User();
const company = new Company();

// console.log(user, ' user');
// console.log(company, ' Company');

import { CustomMap } from './CustomMap';

const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
