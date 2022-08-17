const Task = require('./task');

//Create class
class Tasks {

    _list = {};
    //Getter to return a new array
    get listArr() {

        //Create an empty array
        const list = [];
        //Return all keys of this object and runs through them
        Object.keys(this._list).forEach(key => {
            //Extrac task from list
            const task = this._list[key];
            //Add task to list
            list.push(task);
        });

        //Return the list
        return list;

    }

    constructor() {
        this._list = {};
    }

    deleteTask(id = '') {
        if (this._list[id]) {
            delete this._list[id];

        }
    }

    uploadTaskFromArray(tasks = []) {

        tasks.forEach(task => {
            this._list[task.id] = task;
        });
    }

    createTask(desc = '') {

        const task = new Task(desc);
        this._list[task.id] = task;
    }

    fullList() {

        this.listArr.forEach((task, i) => {
            const id = `${i + 1}`.blue;
            const { desc, completado } = task;
            const state = (completado) ? 'Completada'.green : 'Pendiente'.red;

            console.log(`${id} ${desc} :: ${state}`);

        });
    }

    // completedAndPending(completadas = true) {

    //     let counter = 0;
    //     this.listArr.forEach(task => {

    //         const { desc, completado } = task;
    //         const state = (completado) ? 'Completada'.green : 'Pendiente'.red;

    //         if (completado) {
    //             counter += 1;
    //             console.log(`${(counter + '.').green} ${desc} :: ${completado}`);
    //         } else {
    //             if (!completado) {
    //                 counter += 1;
    //                 console.log(`${(counter + '.').red} ${desc} :: ${state}`);
    //             }
    //         }



    //     });
}

//}


module.exports = Tasks;