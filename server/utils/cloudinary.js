const cloudinary = require('cloudinary').v2;
const fs = require('fs');
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET, 
});

exports.uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;

        // upload file on cloudinary
        const response =  await cloudinary.uploader.upload(localFilePath,
            {
                resource_type: 'auto'
            })
        fs.unlinkSync(localFilePath);
        
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath);  // remove the temporary saved file as the upload 
//                                        operation has failed
        return null;
    }
}
