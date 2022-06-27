import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Define the structerd of obj
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then ( ({data}) => {
    const {ID, Title, finished} = data as Todo;

    console.log(`
        The TODO with ID : ${ID}
        Has a title of: ${Title}
        and is finished? ${finished}
    `)
})