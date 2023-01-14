import React from 'react';
import { Rating } from 'react-simple-star-rating';

const StarRating = ({ value, total = 5 }) => {
  return (
    <span>
      <Rating
        allowFraction
        readonly        
        initialValue={value}
        iconsCount={total}
        size={18.5}
        fillColor={'#171717'}
      />
    </span>
  );
};

export default StarRating;
