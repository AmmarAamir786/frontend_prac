"use client"

import { useState } from 'react';
import Image from "next/image";
import star from "@/assets/icon-star.svg";
import thankyou from "@/assets/illustration-thank-you.svg";

const RatingCard = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating !== null) {
      setSubmitted(true);
    } else {
      alert("Please select a rating before submitting.");
    }
  };

  return (
    <div className="flex justify-center items-center items-center h-screen bg-gray-900">
      {!submitted ? (
        <div className="px-8 bg-gray-800 rounded-3xl w-[395px] h-[395px] flex flex-col justify-center">
          <div className='bg-slate-700 rounded-full p-3 w-fit mb-6'>
            <Image src={star} alt="star"/>
          </div>

          <div className="text-gray-100 mb-6 text-start">
            <span className="block text-2xl font-bold mb-2">How did we do?</span>
            <span className="font-extralight text-sm mb-2">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</span>
          </div>
          <div className="flex justify-between mb-7">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleRatingClick(rating)}
                className={`w-12 h-12 rounded-full ${
                  selectedRating === rating ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'
                } hover:bg-orange-400 hover:text-white`}
              >
                {rating}
              </button>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 w-full"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="px-8 bg-gray-800 rounded-3xl w-[395px] h-[395px] flex flex-col justify-center text-center">
          <div className='flex justify-center items-center'>
            <Image src={thankyou} alt="thank you"/>
          </div>
          <div className="w-full my-8">
            <span className='w-fit bg-gray-700 text-orange-300 py-1 px-5 text-sm rounded-2xl'>You selected {selectedRating} out of 5</span>
          </div>
          <div className="text-gray-100">
            <span className="block text-2xl font-bold mb-2">Thank you!</span>
            <span className="font-extralight text-sm mb-2">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingCard;
