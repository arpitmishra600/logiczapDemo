import React, { useState, useCallback } from 'react';
import { Box, Button } from '@mui/material';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '../../../helpers/cropImage'; // Import the utility to crop image

export default function ImageForm() {
  const [profilePic, setProfilePic] = useState(null);
  const [coverPic, setCoverPic] = useState(null);

  const [croppingImage, setCroppingImage] = useState(null); // Image being cropped
  const [croppingFor, setCroppingFor] = useState(null); // Track what we're cropping (profile/cover)
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  // Handle profile picture upload and set cropping context
  const handleImageChange1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCroppingImage(imageUrl); // Set image for cropping
      setCroppingFor('profile'); // We are cropping the profile image
    }
  };

  // Handle cover picture upload and set cropping context
  const handleImageChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCroppingImage(imageUrl); // Set image for cropping
      setCroppingFor('cover'); // We are cropping the cover image
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // Function to handle cropping confirmation for both profile and cover pics
  const handleCropConfirm = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(croppingImage, croppedAreaPixels);

      if (croppingFor === 'profile') {
        setProfilePic(croppedImage); // Save the cropped profile image
      } else if (croppingFor === 'cover') {
        setCoverPic(croppedImage); // Save the cropped cover image
      }

      // Reset the cropping state
      setCroppingImage(null);
      setCroppingFor(null);
    } catch (error) {
      console.error('Failed to crop image:', error);
    }
  }, [croppingImage, croppedAreaPixels, croppingFor]);

  return (
    <div className="flex flex-col gap-2 w-[100%] z-[1000]">
      <div className="flex gap-3 max-md:flex-col text-nowrap flex-wrap">
        {/* Profile picture section */}
        <div className="flex flex-[0.3] flex-col gap-3">
          <Button variant="contained" component="label" color="primary" size="small">
            Upload Profile Pic
            <input type="file" accept="image/*" hidden onChange={handleImageChange1} />
          </Button>

          {profilePic && (
            <Box className="flex items-center justify-center">
              <img
                src={profilePic}
                alt="Cropped Profile"
                style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
              />
            </Box>
          )}
        </div>

        {/* Cover picture section */}
        <div className="flex flex-1 flex-col gap-3">
          <Button variant="contained" component="label" color="primary" size="small">
            Upload Cover Pic
            <input type="file" accept="image/*" hidden onChange={handleImageChange2} />
          </Button>

          {coverPic && (
            <Box className="flex items-center justify-center">
              <img
                src={coverPic}
                alt="Cropped Cover"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Box>
          )}
        </div>
      </div>

      {/* Cropping UI (appears when cropping an image) */}
      {croppingImage && (
        <div className='absolute z-[100] h-[100%] w-[100%] top-0 left-0'>
          <Cropper
            image={croppingImage}
            crop={crop}
            zoom={zoom}
            aspect={croppingFor === 'profile' ? 1/1 : 4/1} // 1:1 for profile, 16:9 for cover
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
           
          />
          <Button variant='contained' onClick={handleCropConfirm}>Confirm Crop</Button>
        </div>
      )}
    </div>
  );
}
