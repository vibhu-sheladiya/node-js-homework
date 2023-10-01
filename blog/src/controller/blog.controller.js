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
        const blog=await blogService.getAllBlog(req,res);
        return    res.status(200).json({message:"get all details",data:{...blog},success:true})
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// get blog details by Id
const getDetailById=async(req,res)=>{
    try {
        const blog=await blogService.findBlogById(req.params.blogId);
        return     res.status(200).json({message:"get single blog",data:{...blog[0]},success:true})
    } catch (error) {
        res.status(400).json({success:false,message:error.message}); 
    }
};


const updateBlog=async(req,res)=>{
    try {
        const blogId=req.params.blogId;
        const blogEx=await blogService.findBlogById(blogId);
        if(!blogEx){
            throw  new Error('blog doesnot exist');
        }
        await blogService.findBlogAndUpdate(blogId,req.body);
        res.status(201).json({
            success:true,
            message:"successfully updated"
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
        });
    }
}
module.exports={createBlog,multipleBlog,updateBlog,getDetails,getDetailById};