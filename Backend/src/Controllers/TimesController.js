const Worker = require('../Models/Worker');
const Times = require('../Models/times');

module.exports = { 
    async store(req, res) {
       try{
            
        const {worker_id} = req.params;
        //console.log(worker_id)
        
        const worker =  await Worker.findByPk(worker_id)
        if(!worker){
            return res.status(400).json({error: 'worker not found!'})
        }
        const {
            day,
            entry_time,
            exit_time,
            lunch_entry,
            lunch_return,
            location
        } = req.body;
        //console.log()
        const times = await Times.create({
            worker_id,
            day,
            entry_time,
            exit_time,
            lunch_entry,
            lunch_return,
            location,  
        });
        
        return res.json(times);
    }catch (error) {
                //console.log(req.body);
                res.status(400).json(`Erro: ${error}.`);
                console.log(error);
            }

    }
}

