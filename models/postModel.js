const db = require('../db/config')

module.exports ={
    fetch(){
        const query = 'SELECT * FROM posts'
        const data = db.query(query)
        return data.all()
    },
    fetchById(id){
        const query = `SELECT * FROM posts WHERE id = '${id}'`
        const data = db.query(query)
        if(data.all().length <= 0){
            return 404
        }
        return data.all()
    },
    validateCreate(post){
        let messages = [];
    
        if (!post) {
            messages.push('No object is provided');
        }
        if (!post.title) {
            messages.push('Title is empty');
        }
        if (!post.content) {
            messages.push('Content is empty');
        }
        if (messages.length) {
            let error = new Error(messages.join());
            error.statusCode = 400;
            throw error;
        }
    },
    create(obj){
        this.validateCreate(obj)
        var currentTime = new Date().toISOString()
        var {title,content} = obj
        const query = `INSERT INTO posts 
            (
                title,
                content,
                published_at,
                updated_at,
                created_at)
            VALUES
            (
                @title,
                @content,
                @currentTime,
                @currentTime,
                @currentTime
            )`
        const insert = db.run(query,{title,content,currentTime})

        let message = 'Error creating'
        if(insert.changes){
            const result = this.fetchById(insert.lastInsertRowid)
            message = result   
        }
        return message
    },
    update(
        id,
        title,
        content,
        publishedAt,
        updatedAt
        ){
        const query = `UPDATE posts
        SET
            title = @title,
            content = @content,
            published_at = @publishedAt,
            updated_at = @updatedAt
        WHERE id = @id
    `;
        const update = db.run(
            query,{title,content,publishedAt,updatedAt,id})

        let message = 'Error updating'
        if(update.changes){
            const result = this.fetchById(id)
            message = result   
        }
        return message
    },
    delete(id){
        let message = 'Error deleting'
        const query = `DELETE FROM posts WHERE id = @id`;
        const result = this.fetchById(id)
        if(result.length <= 0){
            message = 404
        }
        const del = db.run(query,{id})
        if(del.changes){
            message = result   
        }
        return message
    }

}