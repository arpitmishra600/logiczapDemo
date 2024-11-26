import React, { useState, useEffect } from 'react';
import { useMyContext } from '../../../context/Context';

export default function AboutForm() {
  const { setEnableNextButton,setFormData,formData } = useMyContext();
  const [aboutText, setAboutText] = useState(formData.about);
  const [error, setError] = useState('');

  // Function to count words
  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  // Handle textarea change
  const handleChange = (event) => {
    const text = event.target.value;
    setAboutText(text);
  };

  // Validate the text and enable/disable the next button
  useEffect(() => {
    const wordCount = countWords(aboutText);

    // Validation
    if (!aboutText.trim()) {
      setError('The About section cannot be empty.');
      setEnableNextButton(false);
    } else if (aboutText.length > 1000) {
      setError('About section cannot exceed 1000 characters.');
      setEnableNextButton(false);
    } else if (wordCount < 3) {
      setError('About section must contain at least 30 words.');
      setEnableNextButton(false);
    } else if (wordCount > 200) {
      setError('About section cannot exceed 200 words.');
      setEnableNextButton(false);
    } 
     else {
      setError('');
      setEnableNextButton(true); // Enable the button when everything is valid
      setFormData({...formData,about:aboutText})

    }
  }, [aboutText, setEnableNextButton]);

  return (
    <div>
      <textarea
        id='about'
        className="font-[OpenSauceSans] p-2 outline-none bg-[#F4F2EE] border-[black] border rounded-md w-full min-h-[200px] max-md:min-h-[150px] "
        placeholder="About"
        value={aboutText}
        onChange={handleChange}
      ></textarea>
      {/* Error Message */}
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  );
}
