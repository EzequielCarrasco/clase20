const path=require('path');

const nombrePlato = [{id: 1, nombre:'carpacho', precio: '3$'}, {id: 2, nombre:'carpacho2', precio: '4$'}]

const indexController={
    index: (req, res) =>{
        res.render('index', {nombrePlato: nombrePlato})
    }, 
    detalesMenu: (req, res) =>{
        res.render('index', {nombrePlato: nombrePlato})
    }, 
}

module.exports = indexController;