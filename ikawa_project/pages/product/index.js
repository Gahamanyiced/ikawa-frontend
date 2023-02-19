/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';

import Wrapper from '../../compontents/Layouts/Wrapper';
import SecondaryHeader from '../../compontents/SecondaryHeader';
import { productsData } from '../../data/client';
import Contents from '../../compontents/Layouts/Contents';

export default function Buy() {
  const router = useRouter();
  return (
    <Wrapper isNavTransparent={true}>
      <SecondaryHeader
        bgImage={productsData.headerContent.imgPath}
        title={productsData.headerContent.title}
      />
      <Contents pt='80'>
        <div className='row'>
          <div className='col-12 col-md-6 mb--20'>
            <div className='product-image-container'>
              <img src='/images/huge-product-pic.jpg' alt='' />
            </div>
            <div className='product-gallery'>
              <img src='/images/p-1.jpg' alt='' />
              <img src='/images/p-2.jpg' alt='' />
              <img src='/images/p-3.jpg' alt='' />
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='product-details'>
              <div className='seller-main-details'>
                <div className='seller-image-container'>
                  <img
                    onClick={() => router.push('/seller')}
                    src='/images/user.png'
                    alt=''
                    className='pointer'
                  />
                </div>
                <div className='fs--15'>
                  <span
                    onClick={() => router.push('/seller')}
                    className='d-block pointer'>
                    <b>Seller:</b> Emmanuel Mugabo
                  </span>
                  <span className='rating'>
                    <b>Rating:</b> <i className='fi fi-star-full'></i>
                    <i className='fi fi-star-full'></i>
                    <i className='fi fi-star-full'></i>
                    <i className='fi fi-star-full'></i>
                    <i className='fi fi-star-full'></i>
                  </span>
                </div>
              </div>
              <p className='pt--15'>
                Gorilla&apos;s Coffee, 100% Arabica Bourbon, Dark Chocalate,
                Spice and a Hint of Luscious Fruit. Expresso Roast, Roasted
                Beans, 250g
              </p>
            </div>

            <div className='row gutters-sm pt--30'>
              <div className='col-6 col-md-2 mb--15'>
                <button className='btn btn-light-1 w-100p br--0 fw--700'>
                  $13
                </button>
              </div>
              <div className='col-6 col-md-2 mb--15'>
                <input
                  type='number'
                  value='1'
                  min='1'
                  className='form-control'
                />
              </div>
              <div className='col-6 col-md-4'>
                <button
                  onClick={() => router.push('/checkout')}
                  className='btn btn-primary w-100p brr--0'>
                  Buy
                </button>
              </div>
              <div className='col-6 col-md-4'>
                <button className='btn btn-light-2 w-100p brr--0'>
                  Add to cart
                </button>
              </div>
            </div>
            <hr className='pt--20' />
            <div className='product-specifications pb--60'>
              <span>
                <b>Brand</b>: Gorilla&apos;s Coffee
              </span>
              <span>
                <b>Flavor:</b> Expresso Roast
              </span>
              <span>
                <b>Weight:</b> 250 Grams
              </span>
              <span>
                <b>Unit Count:</b> 8.8185 Ounce
              </span>
              <span>
                <b>Package Weight:</b> 0.26 Kilograms
              </span>
            </div>
            <div className='p-made-logo'>
              <img src='/images/madeinrwanda.jpg' alt='' />
            </div>
          </div>
        </div>
      </Contents>
    </Wrapper>
  );
}
