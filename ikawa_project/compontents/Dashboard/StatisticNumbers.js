import React from 'react';
import StatisticNumberCard from './StatisticNumberCard';

export default function StatisticNumbers({ data }) {
  return (
    <div className='statistic-cards row  gutters-sm pt--30'>
      {data.length > 0
        ? data.map((el, i) => <StatisticNumberCard key={i} number={el} />)
        : ''}
    </div>
  );
}
