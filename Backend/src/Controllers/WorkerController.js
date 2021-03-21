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
    async put(req,res){
        console.log(Worker)
        Worker.update({
            name: req.body.name,
            image:req.body.image,
            cpf:req.body.cpf,
            email:req.body.email,
            tel:req.body.tel,
            ocupation:req.body.ocupation,
            entry_time:req.body.entry_time,
            exit_time:req.body.exit_time, 
            lunch_entry:req.body.lunch_entry,
            lunch_return:req.body.lunch_return
        },
        {
            where: { id: req.params.id}
        }).then(() => res.send("success"));
        console.log(req.body)
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
        console.log(req.body)
        //req.io.emit('worker', worker)
        return res.json(worker); 
    }
};
