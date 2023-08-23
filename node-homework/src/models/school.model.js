const mongoose=require('mongoose');
const schoolSchema= new mongoose.Schema(
    {
        // School Name
        sch_name: {
            type: String,
            required: true,
        },
        // Address of the school
        address:{
            type :String ,
            require:true
        },
        // Phone number for contacting the school
        phone_no:{
            type:Number,
            unique:false,
        },
        // Email id to reach out to the school
        email_id:{
            type:String,
            unique: false,
        },
        // Website link for the school
        websiteLink:{
            type:String,
            default:"https://www.google.com/",
        },
        // Average rating of the school from 1-5 stars
        avgRating:{
            type: Number,
            min:0, max:5,
            default:3,
        },
        // Description about the school
        description:{
            type:String,
            maxlength:[24,"Description should be less than or equal to 24 characters"],
            trim:true
        },
        // branch name
        branch_name:{
            type:Array,
        },
        // course name like prilimary education,higher education
        course_name:{
            type: Array,
        },
        // branch wise principal_name
        principal_name:{
            type: String,
        },
        // student name
        student_name:{
            type: String,
        },
        // faculty name 
        faculty_name:{
            type: String,
        },is_active:{
            type:Boolean,
            default:true,
        },
        },{timestamps: true,autoCreate: false}
    );
    const School=mongoose.model('school',schoolSchema);
    module.exports=School;
        // Location Coordinates (latitude and longitude)
        // locationCoordinates:{
        //     latitute:{
        //         type:Number,
        //         required:'Please provide latitude'
        //     }


