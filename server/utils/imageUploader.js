

const cloudinary = require('cloudinary').v2


exports.uploadImageToCloudinary  = async (file, folder, height, quality) => {
    const options = {folder};
    if(height) {
        options.height = height;
    }
    if(quality) {
        options.quality = quality;
    }
    options.resource_type = "auto";
 console.log(await cloudinary.uploader.upload(file.tempFilePath, options))
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}




// const cloudinary =  require("cloudinary").v2;
// const{CloudinaryStorage} = require("multer-storage-cloudinary");

// cloudinary.config({
//    cloud_name:process.env.CLOUND_NAME,
//    api_key:process.env.CLOUND_API_KEY,
//    api_secret:process.env.CLOUND_API_SECRET
// });


// const storage = new CloudinaryStorage({
//    cloudinary: cloudinary,
//    params: {
//      folder: 'Study_Notion',
//      allowedFormats: async (req, file) => ['png','jpg','jpeg'] // supports promises as well
     
//    }, 
//  });
  
//  module.exports = {
//    cloudinary,
//    storage
//  }