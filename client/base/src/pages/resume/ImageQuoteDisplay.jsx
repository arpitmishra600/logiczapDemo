import React, { useEffect, useState } from 'react';
import { useMyContext } from '../../context/Context';

const imageQuoteData = {
  education: {
    image: "/images/education.jpg",
    quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X"
  },
  workExperience: {
    image: "/images/work-experience.jpg",
    quote: "The only way to do great work is to love what you do. - Steve Jobs"
  },
  responsibility: {
    image: "/images/responsibility.jpg",
    quote: "The price of greatness is responsibility. - Winston Churchill"
  },
  skill: {
    image: "/images/skills.jpg",
    quote: "Your talent determines what you can do. Your motivation determines how much you are willing to do. Your attitude determines how well you do it. - Lou Holtz"
  },
  default: {
    image: "/images/default.jpg",
    quote: "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
  }
};

const stepTypeMap = [
  'education',
  'workExperience',
  'workExperience',
  'responsibility',
  'responsibility',
  'skill'
];

export default function ImageQuoteDisplay() {
  const { step } = useMyContext();
  const [currentImage, setCurrentImage] = useState(imageQuoteData.education.image);
  const [currentQuote, setCurrentQuote] = useState(imageQuoteData.education.quote);

  useEffect(() => {
    const stepType = stepTypeMap[step];
    const { image, quote } = imageQuoteData[stepType];
    setCurrentImage(image);
    setCurrentQuote(quote);
  }, [step])


  

  return (
    <div className="h-full flex flex-col justify-center items-center">
      {/* <img src={currentImage} alt="Resume section illustration" className="w-full max-w-md mb-4 rounded-lg shadow-lg" /> */}
      <p className="text-center text-lg italic">{currentQuote}</p>
    </div>
  );
}