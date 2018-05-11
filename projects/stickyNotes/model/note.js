var path=require('path')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sequelize = new Sequelize(
    undefined,
    undefined, 
    undefined,
    {
      host: 'localhost',
      dialect: 'sqlite',
      logging: false,
      freezeTableName: true,
      operatorsAliases: {
        $and: Op.and,
        $or: Op.or,
        $eq: Op.eq,
        $gt: Op.gt,
        $lt: Op.lt,
        $lte: Op.lte,
        $like: Op.like
      },
      storage: path.join(__dirname,'../db/database.sqlite')
    }


  )

const Note = sequelize.define('note', {
    text: {
      type: Sequelize.STRING
    }
  });
// force: true will drop the table if it already exists
Note.sync({force:true}).then(() => {
    // Table created
   Note.create({
      text: 'text'
    }).then(function(){
        // Note.destroy({raw:true}).then(function(data){
          
        // })
    })
  })

// Note.find({raw:true,where:{id:2}}).then(data=>{console.log(data)})
module.exports.Note=Note

