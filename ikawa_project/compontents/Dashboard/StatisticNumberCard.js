import React from 'react';

export default function StatisticNumberCard({
  number: { title, number, bg, cardSize },
}) {
  return (
    <div className={`${cardSize}`}>
      <div className={`${bg} statistic-card mb--20`}>
        <p className={bg.indexOf('lighter') > 0 ? 'text-dark' : ' '}>{title}</p>
        <h3 className='fs--30 font-weight-bold'>{number}</h3>
      </div>
    </div>
  );
}
