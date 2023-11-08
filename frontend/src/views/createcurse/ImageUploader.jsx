import { PermMedia } from '@mui/icons-material';
import React, { useState } from 'react';

export default function ImageUploader({ onImageSelected }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        onImageSelected(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleIconClick = () => {
    document.getElementById('inputFile').click();
  };

  return (
    <div>
        <input
        type="file"
        accept="image/*"
        id="inputFile"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <label htmlFor="inputFile" style={{ cursor: 'pointer' }}>
        <PermMedia
          onClick={()=>handleIconClick}
        />
      </label>
    </div>
  );
}