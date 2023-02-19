import React from 'react';
import DetailsCard from './DetailsCard';

export default function DetailsCards({ data, isHuge }) {
  return (
    <div className='statistic-cards row gutters-sm pt--10'>
      {data.length > 0
        ? data.map((el, i) => <DetailsCard key={i} data={el} isHuge={isHuge} />)
        : ''}
    </div>
  );
}
