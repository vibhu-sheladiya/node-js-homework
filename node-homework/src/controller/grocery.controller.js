
const {groceryService}=require('../services');
// create grocery
const createGrocery=async(req,res)=>{
    try {
        const reqBody=req.body;
        console.log(reqBody,'++++++++++ reqbody.grocery');
        const grocery=await groceryService.createGrocery(reqBody);
        if(!grocery){
            throw new Error("something went to wrong");
        }
        res.status(201).json({
            success:true,
            message:"created successfully",
            data:{grocery},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// get grocery list
const getGroceryList=async(req,res)=>{
    try {
        const groceryList=await groceryService.getGroceryList(req,res);
        res.status(201).json({
            success:true,
            message:'get all grocery list',
            data:{groceryList},
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// // get grocery details by id
const getGroceryDetails=async(req,res)=>{
    try {
        const groceryDetails=await groceryService.getGroceryById(req.params.groceryId);
        if(!groceryDetails){
            throw new Error("grocery not found");
        }
        res.status(201).json({
            success:"grocery  details get success",
            data:groceryDetails,
        })
    } catch (error) {
       res.status(400).json({success:false,message:error.message}); 
    }
};

// // delete grocery by id
const deleteGrocery=async(req,res)=>{
    try {
        const groceryId=req.params.groceryId;
        const groceryExists=await groceryService.getGroceryById(groceryId)
        if(!groceryExists){
            throw new Error("grocery name not found");
        }
        await groceryService.deleteGrocery(groceryId);
        res.status(201).json({
            success :true,
            message :"deleted succesfully" ,
        });
    } catch (error) {
        res.status(400).json({success:false,message:error.message});
    }
};

// update grocery
const updateGrocery=async(req,res)=>{
    try {
        const groceryId=req.params.groceryId;
        const groceryEx=await groceryService.getGroceryById(groceryId);
        if (!groceryEx )throw new Error('not exist');
        await groceryService.updateGrocery(updateGrocery,req.body)
        res.status(201).json({
            success:true,
            message:'successfully update'
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
        });
    }
};

module.exports={
    createGrocery,
    getGroceryList,
    getGroceryDetails,
    deleteGrocery,
    updateGrocery
}