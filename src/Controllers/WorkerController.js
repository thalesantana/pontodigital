const Worker = require('../Models/Worker')

module.exports = {
    async store(req, res){
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

         const worker = await Worker.create(
        {
            name,
            cpf,
            email,
            tel,
            ocupation,
            entry_time,
            exit_time,
            lunch_entry,
            lunch_return
         })

         return res.json(worker);
    }
};