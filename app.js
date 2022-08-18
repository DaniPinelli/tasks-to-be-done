//Import package
require('colors');

//Destructuring function
const { inquirerMenu, pause, readInput, listToDelete, confirm, showChecklist } = require('./helpers/inquirer');
const { keepDB, readDB } = require('./helpers/keepFile');
//Import file
const Tasks = require('./models/tasks');

//Function main is running currently
const main = async () => {

    //Variable option
    let opt = '';

    //Instantiate Tasks
    const tasks = new Tasks();

    const taskDB = readDB();
    //Upload task
    if (taskDB) {
        tasks.uploadTaskFromArray(taskDB);
    }

    do {
        //Print menu from inquirer and return an option 
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //Create option
                const desc = await readInput('Descripción: ');
                tasks.createTask(desc);
                break;

            case '2':
                tasks.fullList();
                break;

            case '3':
                tasks.completedAndPending(true);
                break;

            case '4':
                tasks.completedAndPending(false);
                break;

            case '5':
                const ids = await showChecklist(tasks.listArr);
                console.log(ids);
                break;

            case '6':
                const id = await listToDelete(tasks.listArr);
                if (id !== '0') {
                    const ok = await confirm(`¿Desea eliminar la tarea?`);
                    if (ok) {
                        tasks.deleteTask(id);
                        console.log(`Borrando tarea ${id}`.red);
                    }
                }
                break;
        }

        keepDB(tasks.listArr);

        await pause();

    } while (opt !== '0');




}

main();