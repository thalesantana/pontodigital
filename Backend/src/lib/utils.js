module.exports= {
    date(timestamp){
        const date = new Date(timestamp)
        const year = date.getFullYear()
        const month = `0${date.getMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)
        const hour = date.getHours()
        const minutes = date.getMinutes()
    
        return {
            day,
            month,
            year,
            hour, 
            minutes,
            iso: `${year}-${month}-${day}`, // retorno do tipo iso
            pointDay:`${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
    },

}