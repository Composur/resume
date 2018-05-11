var express=require('express')
var router=express.Router()
var Note=require('../model/note').Note

// 首页加载查询所有
router.get('/notes',function(req,res,next){
    // if(!req.session.user){
    //     return res.send({status:1,errorMsg:'请登陆'})
    // }
    var note=req.body.note
    Note.findAll({raw:true}).then(data=>{
        res.send({
            status:0,
            data:data
        })
    })
})

// 登陆后可以进行操作


// 添加便利贴数据
router.post('/notes/add',function(req,res,next){
    if(!req.session.user){
        return res.send({status:1,errorMsg:'请登陆'})
    }
    var note=req.body.note
    Note.create({text:note}).then(function(){
        res.send({status:0})
    }).catch(function(){
        res.send({status:1,errorMsg:'数据库出错！'})
    })
})

// 删除
router.post('/notes/del',function(req,res,next){
    if(!req.session.user){
        return res.send({status:1,errorMsg:'请登陆'})
    }
    var note=req.body.note
    Note.destroy({where:{id:req.body.id}}).then(function(){
        res.send({status:0})
    }).catch(function(err){
        res.send({errorMsg:'删除出错'})
        console.log(err)
    })
})

// 更新
router.post('/notes/update',function(req,res,next){
    if(!req.session.user){
        return res.send({status:1,errorMsg:'请登陆'})
    }
    var note=req.body.note
    Note.update({text:note},{where:{id:req.body.id}}).then(function(){
        res.send({status:0})
    }).catch(function(){
        res.send({status:1,errorMsg:'修改失败！'})
    })
})

module.exports=router