const postModel = require('../models/postModel')
const msg = require('../helpers/message')

module.exports = {
    get: (req,res,)=>{
        try {
            const result = postModel.fetch()
            res.json(result)
        } catch (error) {
            res.status(500).json({message: `Error ${error}`})
        }
    },
    getById: (req,res,)=>{
        var id = req.params.id
        try {
            const result = postModel.fetchById(id)
            if(result == 404){
                res.json({message: msg.messages(result)})
            }
            res.json(result[0])
        } catch (error) {   
            res.status(500).json({message: `Error ${error}`})
        }
    },
    create: (req,res,)=>{
        try {
            const result = postModel.create(
                req.body
            )
            res.json(result.length == 1 ?result[0]:result)
        } catch (error) {
            res.status(500).json({message: `Error ${error}`})
        }
    },
    update: (req,res,)=>{
        var id = req.params.id
        var {title,content} = req.body
        var publishedAt = new Date().toISOString()
        var updatedAt = new Date().toISOString()
    
        try {
            const result = postModel.update(
                id,
                title,
                content,
                publishedAt,
                updatedAt
            )
            res.json(result[0])
        } catch (error) {
            res.status(500).json({message: `Error ${error}`})
        }
    },
    delete: (req,res,)=>{
        var id = req.params.id
    
        try {
            const result = postModel.delete(id)
            if(result == 404){
                res.json({message:msg.messages(result)})
            }
            res.json(result[0])
        } catch (error) {
            res.status(500).json({message: `Error ${error}`})
        }
    }
}