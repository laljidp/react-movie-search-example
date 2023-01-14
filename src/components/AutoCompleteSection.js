import React from 'react';
import styled from '@emotion/styled';
import StarRating from './StarRating';

const Section = styled.div((props) => ({
  minHeight: '55px',
  width: '100%',
  border: '1px solid #979797',
  position: 'absolute',
  top: '50px',
  left: -1,
  '.section-row': {
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '.left-side': {
      display: 'grid',
      color: '#000000',
      textAlign: 'left'
    },
    '.right-side': {
      color: '#777777'
    }
  }
}));

const AutoCompleteSection = ({ data = [] }) => {
  return (
    <Section>
      {data.length === 0 && <p>No movies found!</p>}
      {data.map(({ id, title, rating, category }) => (
        <div className="section-row" key={id}>
          <div className="left-side">
            <span>{title}</span>
            <StarRating total={10} value={rating} />
          </div>
          <div className="right-side">{category}</div>
        </div>
      ))}
    </Section>
  );
};

export default AutoCompleteSection;
