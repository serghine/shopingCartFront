const express     =require('express');
const hbs         =require('hbs');
const bodyParser  =require('body-parser');
const mongoose    =require('mongoose');
const path        =require('path');




const app=express();
app.set('view engine','hbs');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"./public")));

app.use('/',function(req,res,next){
    res.render('home');
    // if(typeof(Storage) !== "undefined"){
    //     console.log(localStorage.getItem('items')); 
    // }else{
    //     console.log("probleme avec le storage")
    // }
})





const port=1000;
mongoose.connect('mongodb://localhost:27017/testlocal',{useCreateIndex:true,useNewUrlParser:true,useFindAndModify:true,useUnifiedTopology: true})
.then(function(){
    app.listen(port,function(){
        console.log(`le server est lancé http://localhost:${port}`);
    })
}).catch(function(error){
    console.log(error);
})

