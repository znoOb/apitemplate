const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
class Server{

     constructor(){
          this.app= express()
          this.port = process.env.NODE_PORT;

          //PATH'S API
          this.usuariosPath = '/api/users'

          //MIDDLEWARES
          this.middlewares();

          //ROUTES
          this.routes();
    
     }

     middlewares(){

          this.app.use(cors());
          this.app.use(morgan('dev'))
          this.app.use(express.json())
          this.app.use(express.static('public'));
          this.app.use(express.urlencoded({extended: true}));

     }


     routes(){
          this.app.use(this.usuariosPath, require('../routes/user.routes') )
     }

     listen(){
          this.app.listen(this.port, ()=>{
               console.log(`server on port ${this.port}`)
          })
     }
}

module.exports = Server;