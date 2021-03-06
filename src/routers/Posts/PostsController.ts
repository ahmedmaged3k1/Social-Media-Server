import Express  from 'express';
import Posts from '../../models/Posts/PostInterface';


export async  function getPostrById (request : Express.Request ,response: Express.Response, next: Express.NextFunction){

    try{
        var id = request.params.id 
        const posts = await Posts.find({"postId": +id })
        response.json(posts)
    }
    catch(e){
        next(e)
    }
    
}

export async  function getPostUserById (request : Express.Request ,response: Express.Response, next: Express.NextFunction){

    try{
        var id = request.params.userId 
        const posts = await Posts.find({"userId": +id })
        response.json(posts)
    }
    catch(e){
        next(e)
    }
    
}
export async  function changePostById (request : Express.Request ,response: Express.Response, next: Express.NextFunction){

    try{
        var id = request.params.postId 
        const post = request.body
        const newPost =  new Posts(post)
        
        const posts = await Posts.findOneAndUpdate({"id": +id },{"name" : newPost.name },{upsert:true})
        response.json(posts)
    }
    catch(e){
        next(e)
    }
    
}

export async  function deletePostrById (request : Express.Request ,response: Express.Response, next: Express.NextFunction){

    try{
        var id = request.params.id 
         const result = await Posts.deleteOne({"id": +id })
    
       if(result.deletedCount ==1 ){
           console.log("Deleted Successly ")
           response.json("Deleted Successly ")
       }
       else{
        console.log("Erorr Not Deleted  ")
        response.json("Erorr Not Deleted ")

       }
    }
    catch(e){
        next(e)
    }
    
}
export async  function getPosts (request : Express.Request ,response: Express.Response, next: Express.NextFunction){

    try{
        const shoes = await Posts.find()
        response.json(shoes)
    }
    catch(e){
        next(e)
    }
    
}
export async function  addPost(request : Express.Request ,response: Express.Response, next: Express.NextFunction) {
    try{
        const shoes = request.body
        const newShoe =  new Posts(shoes)
        const result = await newShoe.save();
        response.json(result)
        console.log(newShoe)
    }
    catch(e){
        next(e)
    }
}