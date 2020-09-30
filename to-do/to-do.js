

const colors = require('colors');
const fs = require('fs');

let listToDo = [];

//La siguiente función es la que usaremos para guardar las tareas creadas en nuestra BD
const saveDB = () => {
    // 'JSON' convierte al formato json, y 'stringify' convierte el objeto en...?¿
    let data = JSON.stringify(listToDo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Couldn`t be saved');
    });
}

const loadDB = () => {

    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }

}

const create = (description) => {

    loadDB();

    let toDo = {
        description,
        completado: false
    };

    listToDo.push(toDo);

    saveDB();

    return toDo;
}

const getList = (completado) => {

    loadDB();

    let filterList;
    switch (completado) {
        case `true`:
            filterList = listToDo.filter(task => task.completado === !!completado);
            listToDo = filterList;
            break;
        case `false`:
            filterList = listToDo.filter(task => task.completado === !completado);
            listToDo = filterList;
            break;
        default:
            listToDo
            break;
    }
    return listToDo;
}

const update = (description, completado = true) => {

    loadDB();

    let index = listToDo.findIndex(task => task.description === description)

    if (index >= 0) {
        listToDo[index].completado = completado;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const deletes = (description) => {

    loadDB();
    let index = listToDo.filter(task => task.description !== description);

    if (listToDo.length === index.length) {
        return false;
    } else {
        listToDo = index;
        saveDB();
        return true;
    }
}

module.exports = {
    create,
    getList,
    update,
    deletes
};