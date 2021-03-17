const Worker = require('../Models/Worker')
const sharp = require('sharp');
const path = require('path');
const fs= require('fs');

module.exports = {
    async index(req, res){
        const Cards = await Worker.findAll();
        
        return res.json(Cards)
    },
    async show(req, res){
        const worker_id = req.params.id
        const id = await Worker.findByPk(worker_id);
       

        if(!id) return res.status(400).send('Worker dont found');

        return res.json(id)
    },
    async store(req, res) {
        const {
            name,
            cpf,
            email,
            tel,
            ocupation,
            entry_time,
            exit_time,
            lunch_entry,
            lunch_return
        } = req.body;

        const { filename: image} = req.file;

        await sharp(req.file.path)
            .resize(500)
            .jpeg({quality: 70})
            .toFile(
                path.resolve(req.file.destination, 'resized', image)
            )
            fs.unlinkSync(req.file.path)
            
        const worker = await Worker.create(
            {
                name,
                image,
                cpf,
                email,
                tel,
                ocupation,
                entry_time,
                exit_time, 
                lunch_entry,
                lunch_return
            });
        //console.log(req.file)
        //req.io.emit('worker', worker)
        return res.json(worker); 
    }
};
