import React, { useState } from 'react';
import Head from 'next/head';

import DetailsCards from '../../compontents/Dashboard/DetailsCards';
import { client, statisticNumbers, notificationData } from '../../data/admin';
import Wrapper from '../../compontents/Dashboard/Layouts/Wrapper';
import StatisticNumbers from '../../compontents/Dashboard/StatisticNumbers';
import NotifificationCard from '../../compontents/Dashboard/NotificationCard';
import SellerDetails from '../../compontents/Dashboard/SellerDetails';
import ClientDetails from '../../compontents/Dashboard/ClientDetails';

export default function Seller() {
  return (
    <Wrapper>
      <div className='row gutters-sm'>
        <div className='col-12 col-md-6'>
          <StatisticNumbers data={client.statisticNumbers} />
        </div>
        <div className='col-12 col-md-6'>
          <NotifificationCard data={notificationData} minHeight={true} />
        </div>
      </div>

      <div className='row gutters-sm '>
        <div className='col-12 col-md-6'>
          <DetailsCards data={client.data} />
        </div>
        <div className='col-12 col-md-6'>
          <ClientDetails />
        </div>
      </div>
    </Wrapper>
  );
}
