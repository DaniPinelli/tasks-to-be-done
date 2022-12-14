const inquirer = require('inquirer');

require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.blue} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.blue} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.blue} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.blue} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.blue} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.blue} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.blue} Salir`
            }
        ]
    }
];

const inquirerMenu = async () => {

    console.log('====================================\n'.green);
    console.log('Select an option:'.green);
    console.log('====================================\n'.green);

    const { option } = await inquirer.prompt(questions);

    return option;
}

const pause = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar...`
        }
    ];

    await inquirer.prompt(question);
    console.log('\n');
}

const readInput = async (message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            value(value) {
                if (this.value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listToDelete = async (tasks = []) => {

    const choices = tasks.map((task, i) => {

        const id = `${i + 1}`.blue;

        return {
            value: task.id,
            name: `${id} ${task.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0. Cancelar'.green
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione la tarea a borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(questions);
    return id;
}
const confirm = async (message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const showChecklist = async (tasks = []) => {

    const choices = tasks.map((task, i) => {

        const id = `${i + 1}`.blue;

        return {
            value: task.id,
            name: `${id} ${task.desc}`,
            checked: (task.completado) ? true : false
        }
    });

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccionados',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(question);
    return ids;
}


module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listToDelete,
    confirm,
    showChecklist
}

