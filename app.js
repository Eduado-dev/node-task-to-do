
const colors = require('colors');
const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');

// console.log(argv);

let command = argv._[0];

switch (command) {

    case 'crear':
        let task = toDo.create(argv.description);
        console.log(task);
        break;

    case 'listar':

        let list;
        if (argv.completado === undefined) {
            list = toDo.getList();
        } else {
            list = toDo.getList(argv.completado);
        }

        for (const task of list) {
            console.log('=========TO DO=========='.green);
            console.log(task.description);
            console.log('Status: ', task.completado);
            console.log('========================'.green);
        }
        break;
    case 'update':

        let updated = toDo.update(argv.description, argv.completado);

        console.log(updated);
        break;

    case 'delete':

        let deleted = toDo.deletes(argv.description);
        console.log(deleted);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}