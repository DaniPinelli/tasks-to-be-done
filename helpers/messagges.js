require('colors');
console.clear();

const showMenu = () => {

    console.log('====================================\n'.green);
    console.log('Select an option:');
    console.log('====================================\n'.green);

    console.log(`${'1'.green} Crear tarea`);
    console.log(`${'2'.green} Listar tarea`);
    console.log(`${'3'.green} Listar tareas completas`);
    console.log(`${'4'.green} Listar tareas pendientes`);
    console.log(`${'5'.green} Completar tarea(s)`);
    console.log(`${'6'.green} Borrar tarea`);
    console.log(`${'0'.green} Salir \n`);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Selecciona una opción: ', (opt) => {
        console.log(opt);
        readline.close();
    })


}

module.exports = {
    showMenu
}