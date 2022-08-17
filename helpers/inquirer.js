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
                name: `${'6.'.blue}. Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.blue}. Salir`
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

const listToDelete = async () => {

    const choices = tasks.map((task, i) => {

        const id = `${i + 1}`.green;

        return {
            value: task.id,
            name: id
        }
    })

    // {
    //     value: task.id,
    //         name: `${'1.'.blue} Crear tarea`
    // },
}


module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listToDelete
}

