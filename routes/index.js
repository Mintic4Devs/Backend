const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    

const { Project } = require('../models/project');


// OBETENER TODOS LOS PROYECTOS
router.get('/api/projects', (req, res) => {
    Project.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


// OBETENER PROYECTO

router.get('/api/project/:id', (req, res) => {
    Project.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});

// AGREGAR PROYECTO
router.post('/api/project/add', (req, res) => {
    const emp = new Project({
        name: req.body.name,
        fase: req.body.fase,
        estado: req.body.estado
    });
    emp.save((err, data) => {
        if(!err) {
           
            res.status(200).json({code: 200, message: 'Proyecto agregado satisfactoriamente', addProject: data})
        } else {
           console.log(err);
        }
    });
});



// ACTUALIZAR PROYECTO

router.put('/api/project/update/:id', (req, res) => {


    const emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        estado: req.body.estado
    };
    Project.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Proyecto actualizado satisfactoriamente', updateProject: data})
        } else {
            console.log(err);
        }
    });
});





// BORRAR PROYECTO
router.delete('/api/project/:id', (req, res) => {

    Project.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            
            res.status(200).json({code: 200, message: 'Proyecto eliminado', deleteProject: data})
        } else {
            console.log(err);
        }
    });
});


module.exports = router;