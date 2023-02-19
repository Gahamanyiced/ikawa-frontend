import React from 'react';
import Link from 'next/link';

import DetailsCardItems from './DetailsCardItems';
import HugeCardDetails from './HugeCardDetails';

export default function DetailsCard({
  data: { cardSize, detailTitle, contents, moreDetailsLink },
  isHuge,
}) {
  return (
    <div
      className={`card-details-holder pb--15 ${
        cardSize ? cardSize : ' col-12 col-md-6'
      }`}>
      <div className='bg-details p--20 br-10'>
        <div className='card-details-head d-flex justify-content-between align-items-center pb--10'>
          <div className='details-title-holder'>{detailTitle}</div>
          <Link href={`${moreDetailsLink}`} passHref={true}>
            <p className='fs--14 mb--0'>
              <span className='pointer'>See all</span>
              <i className='fi fi-arrow-right fs--10 ml--5'></i>
            </p>
          </Link>
        </div>
        <div className='card-details-contents'>
          {isHuge ? (
            <HugeCardDetails data={contents} />
          ) : (
            <DetailsCardItems data={contents} />
          )}
        </div>
      </div>
    </div>
  );
}
