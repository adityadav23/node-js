const express = require('express')


const app = express()

app.use(express.json())


// users route
app.post('/api',(req,res)=>{
    const {name}= req.body
    if(!name){
        return res  
            .status(400)
            .json({success:false,msg:'plEASE provide name value'})
    }
    res.status(200).json({success:true,person :name})
 })
 
 app.get('/',(req,res)=>{
     res.send('Home')
 })


app.listen(5000,(req,res)=>{
    console.log('server running on port ...')
})