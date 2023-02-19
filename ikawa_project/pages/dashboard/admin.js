import React from 'react';
import Head from 'next/head';

import DetailsCards from '../../compontents/Dashboard/DetailsCards';
import AdminAddData from '../../compontents/Dashboard/AdminAddData';

import {
  adminPageContent,
  statisticNumbers,
  hugeCardDetails,
} from '../../data/admin';
import Wrapper from '../../compontents/Dashboard/Layouts/Wrapper';
import StatisticNumbers from '../../compontents/Dashboard/StatisticNumbers';

export default function componentName() {
  return (
    <Wrapper>
      <StatisticNumbers data={statisticNumbers} />
      <DetailsCards data={adminPageContent} />
      <DetailsCards data={hugeCardDetails} isHuge={true} />
      <AdminAddData />
    </Wrapper>
  );
}
