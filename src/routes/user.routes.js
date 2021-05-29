const  router  = require('express').Router();
const { usersGet, 
        usersPost, 
        usersPut, 
        usersPatch, 
        usersDelete }  = require('../controllers/users.controllers');

router.get("/",usersGet);

router.post("/", usersPost);

router.put("/:id", usersPut);

router.patch("/",usersPatch);

router.delete("/:id",usersDelete);

module.exports= router;