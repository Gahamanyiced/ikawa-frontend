import React from 'react';
import Link from 'next/link';

function NotificationCard({ data, minHeight }) {
  return (
    <div className={`card-details-holder pt--10 pb--10`}>
      <div
        className={`bg-details p--20 br-10 ${
          minHeight ? 'min-h-125' : 'min-h-175'
        }`}>
        <div className='card-details-head d-flex justify-content-between align-items-center pb--10'>
          <div className='details-title-holder'>Notifications</div>
          <Link href='/dashboard/nofications' passHref={true}>
            <p className='fs--14 mb--0'>
              <span className='pointer'>See all</span>
              <i className='fi fi-arrow-right fs--10 ml--5'></i>
            </p>
          </Link>
        </div>
        <div
          className={`card-details-contents ${
            minHeight ? 'pt--10' : 'pt--15'
          }`}>
          {data.map((notif, i) => (
            <div
              key={i}
              className='d-flex fs--15 justify-content-between mb--1'>
              <span className='mr--20'>{notif.time}</span>
              <span className='font-weight-medium'>{notif.msg}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;
