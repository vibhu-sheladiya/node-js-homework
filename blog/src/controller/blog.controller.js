const fs=require('fs');
const {blogService}=require('../service');
const createBlog=async(req,res)=>{
    try {
        const reqBody=req.body;
        if(req.file){
            reqBody.image=req.file.filename;
        }else{
            throw new Error('blog image is required ');
        }
        const createdBlog= await blogService.createBlog(reqBody);
        return res.status(201).json({message:'created successfully',data:createdBlog,success:true,
    });
    } catch (error) {
        return  res.status(409).json({
            message:`${error}`,
            success:false,
        });
    }
}

// multiple blog
const multipleBlog=async(req,res)=>{
    try {
        const reqBody=req.body;
        image=[];
        if(req.files){
            for(let i of Object.keys(req.files)){
                image.push(i.filename);
        }
    }else{
        throw new Error("please upload images");
    }
    reqBody.image=image;
    const createdBlog=await blogService.createBlog(reqBody);
    return   res.status(201).json({message:"multiple blogs",data:createdBlog,success:true,
});
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            message:error?.message || "something went wrong, please try again or later",
            success:false,
        });
    }
};

// get blog detail 
const getDetails=async(req,res)=>{
    try {
        const blog=await blogService.
    } catch (error) {
        
    }
}