import { Collection } from './models/Collection'
import { User, UserProps } from './models/User';

const collection = User.buildUserCollection();

collection.fetch();


collection.events.on('change', ()=> {console.log(collection)})
