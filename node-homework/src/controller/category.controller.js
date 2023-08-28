const { categoryService } = require("../services");

/** create category*/
const createCategory = async (req, res) => {
  // console.log()
  try {
    const reqBody = req.body;

      console.log(reqBody,'+++++++++++ reqBody.category');
    // const userExists = await userService.getUserByEmail(reqBody.email);
    // if (userExists) {
    //   throw new Error("User already created by this email!");
    // }

    const categoryEx = await categoryService.getCategoryByName(reqBody.category_name);
    // const categoryEx = await categoryService.createCategory(reqBody);
    if (!categoryEx) {
      // throw new Error("Something went wrong, please try again or later!");
      throw new Error(`please add other category this ${categoryEx.category_name} category already created.`);
    }

    res.status(200).json({
      success: true,
      message: reqBody,
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
 



  /** Get user list */
  // const getUserList = async (req, res) => {
  //   try {
  //     const { search, ...options } = req.query;
  //     let filter = {};
  
  //     if (search) {
  //       filter.$or = [
  //         { first_name: { $regex: search, $options: "i" } },
  //         { last_name: { $regex: search, $options: "i" } },
  //       ];
  //     }
  
  //     const getList = await userService.getUserList(filter, options);
  
  //     res.status(200).json({
  //       success: true,
  //       message: "Get user list successfully!",
  //       data: getList,
  //     });
  //   } catch (error) {
  //     res.status(400).json({ success: false, message: error.message });
  //   }
  // };

  module.exports = {
    createCategory
    // getUserList,
    // getUserDetails,
    // updateDetails,
    // deleteUser,
    // sendMail,
  };