/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';

import Wrapper from '../compontents/Layouts/Wrapper';
import Contents from '../compontents/Layouts/Contents';

export default function Events() {
  const router = useRouter();
  return (
    <Wrapper isNavTransparent={true}>
      <Contents pt='100'>
        <h3 className='pb--0 pt--50 mobile text-gold fw-300 fs--45 text-center'>
          Find all coffee related events in Rwanda
        </h3>

        <div className='scroll-button-holder mt--40'>
          <div className='scroll-button'>
            <img src='/images/flesh-down.png' alt='' />
          </div>
        </div>
      </Contents>

      <Contents pt='0'>
        <div className={`row gutters-lg`}>
          <div className='col-12 col-md-12'>
            <span className='font-weight-medium d-block mb--40 fs--20'>
              Newest Events
            </span>
          </div>
          <div className='col-12 col-md-6 pb--20'>
            <img
              src='/images/newest-event.jpg'
              className='w-100p br--5'
              alt=''
            />
          </div>
          <div className='col-12 col-md-6'>
            <h4 className='fs--30 font-weight-medium w--80p'>
              Rwanda Golden Barista <br /> Championship 2021{' '}
            </h4>
            <p className='pb--20 pt--10'>
              This Golden Barista Championship is an initiative that carefully
              focuses on promoting coffee culture in Kigali and rural areas, but
              also encouraging baristas to sharpen their skills.
            </p>
            <button className='btn btn-dark pl--20 pr--20 brr-0'>
              Save event
            </button>
            <button className='btn btn-outline-dark pl--20 pr--20 brr-0'>
              <i className='fi fi-bell-full fs--20 mr--0'></i>
            </button>
          </div>
        </div>
      </Contents>

      <Contents pt='0'>
        <div className={`row gutters-lg`}>
          <div className='col-12 col-md-12'>
            <span className='font-weight-medium d-block mb--40 fs--20'>
              Oldest Events
            </span>
          </div>
          <div
            onClick={() => router.push('/event')}
            className='col-12 col-md-6 pb--20 pointer'>
            <img src='/images/letstalk.jpg' className='w-100p brr-5' alt='' />
            <h4 className='fs--20 pt--20 font-weight-medium w--80p'>
              Let’s Talk Coffee® Rwanda 2019
            </h4>
            <p className='pb--20 pt--10'>
              Let’s Talk Coffee® Rwanda 2017 took place in Kigali, gathering
              more than 250 farmers with buyers, government, philanthropy, and
              other supply chain stakeholders.
            </p>
          </div>
          <div
            onClick={() => router.push('/event')}
            className='col-12 col-md-6 pointer'>
            <img src='/images/golden.jpg' className='w-100p brr-5' alt='' />
            <h4 className='fs--20 pt--20 font-weight-medium w--80p'>
              Golden Barista 2019 Champion
            </h4>
            <p className='pb--20 pt--10'>
              This Golden Barista Championship is an initiative that carefully
              focuses on promoting coffee culture in Kigali and rural areas, but
              also encouraging baristas to sharpen their skills.
            </p>
          </div>
        </div>
      </Contents>
    </Wrapper>
  );
}
