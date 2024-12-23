const modal = require('../modal/samp')

const sampfuntion = async (req,res) => {
    const sampData = await modal.find()

    // console.log(sampData);   
    

    res.render('samp',{sampData})
}


module.exports = {sampfuntion}