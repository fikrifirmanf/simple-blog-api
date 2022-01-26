const express = require('express')
const router = express.Router()
const postRoute = require('../routers/postRoute')

router.get('/',(req,res)=>{
    res.send('Otoklix Apps')
})
router.use('/posts',postRoute)

module.exports = router