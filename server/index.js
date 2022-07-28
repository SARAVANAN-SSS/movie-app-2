const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})
const mongoose = require('mongoose')

const DB = "mongodb+srv://sssvanan456:sssvanan456@cluster1.7xgzsce.mongodb.net/?retryWrites=true&w=majority"

// "mongodb+srv://cluster0.tzjmgk7.mongodb.net/myFirstDatabase" 
// 'mongodb+srv://<YOUR USERNAME>:<YOUR PASSWORD>@cluster0.zozv5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,        
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})

const Movie = require('./Model/Movie')

app.post('/movie/add', async(req,res) => {
    console.log(req)
    const movie = new Movie(req.body)
    try{
        await movie.save()
        res.status(201).json({
            status: 'Success',
            data : {
                movie
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

app.get('/movies', async (req,res) => {
    const movies = await Movie.find({})
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                movies
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})    

app.get('/movies/:id', async (req,res) => {
    const moviee = await Movie.find({"_id" :req.params.id})
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                moviee
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
}) 

app.put('/movie/edit/:id', async (req,res) => {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
      })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
              updatedMovie
            }
          })
    }catch(err){
        console.log(err)
    }
})

app.delete('/movie/delete/:id', async(req,res) => {
    console.log("BackendDelete")
    await Movie.findByIdAndDelete(req.params.id)  

    
    try{
      res.status(204).json({
          status : 'Success',
          data : {}
      })
    }catch(err){ 
        res.status(500).json({
            status: 'Failed',
            message : err
        }) 
    }
})