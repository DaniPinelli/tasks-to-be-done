require('colors');

const { inquirerMenu, pause } = require('./helpers/inquirer');
//const Task = require('./models/task');
const Tasks = require('./models/tasks');

const main = async () => {

    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({ opt });

        // const tasks = new Tasks();
        // const task = new Task('Probar');

        // tasks._list[task.id] = task;

        // console.log(tasks);

        await pause();

    } while (opt !== '0');




}

main();