const { request, response } = require('express')

const usersGet = (req = request, res = response)=>{

     const { page=1, limit =10, apikey } = req.query;


     res.json({
          page, limit , apikey
     })
}


const usersPost = (req = request, res = response)=>{
     
     const _req= req.body;
     res.json({
          key1: _req.KEY,
          KEY2: _req.KEY_HEAD
     })
}

const usersPut = (req = request, res = response)=>{

     const {id}= req.params.id ;


     res.json({
          message:'put on parameters '+ id
     })
}

const usersPatch = (req = request, res = response)=>{
     res.json({
          message:'patch response from controller'
     })
}

const usersDelete = (req = request, res = response)=>{
     res.json({
          message:'delete response from controller'
     })
}

module.exports={
     usersGet,
     usersPost,
     usersPut,
     usersPatch,
     usersDelete
}





