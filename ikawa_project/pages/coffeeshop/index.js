/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

import Wrapper from '../../compontents/Layouts/Wrapper';
import Contents from '../../compontents/Layouts/Contents';
import SecondaryHeader from '../../compontents/SecondaryHeader';
import { singleShop, shops } from '../../data/client';

export default function CoffeShop() {
  return (
    <Wrapper>
      <SecondaryHeader
        bgImage='/images/single-coffeshop.jpg'
        title={
          <>
            Welcome to cafe Iwacu
            <br /> Bienvenue au cafe Iwacu <br /> Ikaze muri cafe Iwacu
          </>
        }
        fontSize_='font-medium'
      />
      <Contents pt='50'>
        <div className='row gutters-lg'>
          <div className='col-12 col-md-5 mb--20'>
            <h3 className='mb--20 fw--500 w-80p text-dark'>
              Start your day with our best coffee.
            </h3>
            <p>
              Behind every successful day is a delicious cup of coffee, and
              behind every delicious cup of coffee is Cafe Iwacu.{' '}
            </p>
          </div>
          <div className='col-12 col-md-7'>
            <div className='row shop-details'>
              <div className='col-6 col-md-4'>
                <img src='/images/cup.svg' alt='' />
                <p>10+ coffee flavours available for order.</p>
              </div>
              <div className='col-6 col-md-4'>
                <img src='/images/takeaway.svg' alt='' />
                <p>Packaging Take away service.</p>
              </div>
              <div className='col-6 col-md-4'>
                <img src='/images/plate.svg' alt='' />
                <p>Affordable lunch.</p>
              </div>
            </div>
          </div>
        </div>
      </Contents>
      <Contents pt='0'>
        <div className='row mt---20'>
          <div className='col-12 col-md-5 hidde-sm'>
            <img src='/images/coffeee.jpg' className='w-100p' alt='' />
          </div>

          <div className='col-12 col-md-7'>
            <div className='row gutters-lg'>
              <div className='col-12 col-md-6'>
                <div className='pb--20 row'>
                  <div className='col-12 col-md-12'>
                    <h3 className='fs--22 font-weight-bold text-dark mb--30'>
                      Espresso Based
                    </h3>
                  </div>
                  {singleShop.espressoBased.map((detail, i) => (
                    <div key={i} className='col-12 col-md-6'>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
              <div className='col-12 col-md-6 pb--10'>
                <div className='row'>
                  <div className='col-12 col-md-12'>
                    <h3 className='fs--22 font-weight-bold text-dark mb--30'>
                      Milk-Based Espresso
                    </h3>
                  </div>
                  {singleShop.milkBased.map((detail, i) => (
                    <div key={i} className='col-12 col-md-6'>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
              <div className='col-12 col-md-12 pb--40'>
                <button className='btn btn-outline-dark button-contact w-100p mt--30'>
                  Contact us to book a table: 0788001122/ 0788112233
                </button>
              </div>
              <div className='col-12 col-md-6 pb--10'>
                <img src='/images/shop-image1.jpg' className='w-100p' alt='' />
              </div>

              <div className='col-12 col-md-6'>
                <img src='/images/shop-image2.jpg' className='w-100p' alt='' />
              </div>
            </div>
          </div>
        </div>
      </Contents>

      <Contents pt='20'>
        <h3 className='text-gold mb--60 fs--25'>Coffeshops near Iwacu</h3>
        <div className='shops-container'>
          {shops.slice(0, 2).map((shop, i) => (
            <div key={i} className='shop'>
              <div className='shop-image-holder'>
                <img src={shop.imgPath} alt='' />
              </div>
              <div className='shop-details'>
                <h3 className='fs--20 text-dark shop-name'>{shop.name}</h3>
                <p className='pt--20 pb--10'>{shop.details}</p>
                <Link href='/coffeeshop' passHref={true}>
                  <span className='fw--500 text-primary-green d-flex align-items-center pointer'>
                    <span>Discover</span>
                    <span className='fs--30 ml--5'>&rarr;</span>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Contents>
    </Wrapper>
  );
}
