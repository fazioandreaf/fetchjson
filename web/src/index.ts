import { User } from './models/User'

const user = new User({name: 'andrea', age: 30});

console.log(user.get('name'))
console.log(user.get('age'))