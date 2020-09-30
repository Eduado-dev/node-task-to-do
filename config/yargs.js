
const description = {
    demand: true,
    alias: 'd'
};
const completado = {
    alias: 'u',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        description
    })
    .command('update', 'Actualiza el estado completando una tarea', {
        description,
        completado
    })
    .command('listar', 'Display a Task.List', {
        completado
    })
    .command('delete', 'Delete a task', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
};