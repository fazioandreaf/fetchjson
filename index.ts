import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Define the structerd of obj
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then ( ({data}) => {
    const {id, title, completed} = data as Todo;

    logTodo(id, title, completed);
})

const logTodo = (id: number, title: string, completed: boolean) => {
        console.log(`
        The TODO with ID : ${id}
        Has a title of: ${title}
        and is finished? ${completed}
    `)
}