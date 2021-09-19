const { response, request } = require('express');

const usuariosGet = (req = request, res = response)  =>{
    //const query = req.query
    const {q, nombre='No name', page=1} = req.query;
    res.json({
        msg:'get API - Controlador',
        q,
        nombre,
        page
    });
}

const usuariosPost = (req, res = response)  =>{
    const body = req.body;

    res.json({
        msg:'post API - Controlador',
        body: body
    });
}

const usuariosPut = (req, res = response)  =>{
    const id = req.params.id;
    res.json({
        msg:'put API - Controlador',
        id: id
    });
}

const usuariosDelete = (req, res = response)  =>{
    res.json({
        msg:'delete API - Controlador'
    });
}

const usuariosPatch = (req, res = response)  =>{
    res.json({
        msg:'patch API - Controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}