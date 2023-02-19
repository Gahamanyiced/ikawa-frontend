/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

import Wrapper from '../compontents/Layouts/Wrapper';

export default function NotFound() {
  return (
    <>
      <Wrapper isNavTransparent={true}>
        <div className='not-found'>
          <img src='/images/coffeee.jpg' className='' alt='' />
          <h1 className='d-block text-dark mt--40'>Ooop!! page not found.</h1>
          <p>
            Visits coffeeshops <Link href='/coffeeshops'>here</Link>
          </p>
        </div>
      </Wrapper>
    </>
  );
}
