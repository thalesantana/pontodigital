const Admin= require('../Models/Admin')
const sharp = require('sharp');
const path = require('path');
const fs= require('fs');

module.exports = {
    async indexAll(req, res){
        const admins = await Admin.findAll();
        
        return res.json(admins)
    },
    async login(req, res){
        const admins = await Admin.findAll({attributes: ['id','email', 'pass']});
        const {email, pass} = req.body;
        admins.map((admin)=>{
            if( email === admin.email && pass === admin.pass){
              return res.status(200).send('Login ok')
              
           }else{
            return res.status(400).send("Email e senha ou usuário não existe!")
           }
        })
        return res.json(admins)
    },
    async show(req, res){
        const admin_id = req.params.id
        const id = await Admin.findByPk(admin_id);
       
        if(!id) return res.status(400).send('Admin not found');

        return res.json(id)
    },
    async put(req,res){
        console.log(Admin)
        Admin.update({
            name: req.body.name,
            image:req.body.image,
            email:req.body.email,
            pass:req.body.pass
        },
        {
            where: { id: req.params.id}
        }).then(() => res.send("success"));
        console.log(req.body)
    },
    async store(req, res) {
        const {
            name,
            email,
            pass,
        } = req.body;

        const { filename: image} = req.file;

        await sharp(req.file.path)
            .resize(500)
            .jpeg({quality: 70})
            .toFile(
                path.resolve(req.file.destination, 'resized', image)
            )
            fs.unlinkSync(req.file.path)
            
        const admin= await Admin.create(
            {
                name,
                image,
                email,
                pass,
            });
        console.log(req.body)
        //req.io.emit('admin', admin)
        return res.json(admin); 
    }
};
