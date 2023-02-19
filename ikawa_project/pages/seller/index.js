/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';

import Wrapper from '../../compontents/Layouts/Wrapper';
import { productsData } from '../../data/client';
import Contents from '../../compontents/Layouts/Contents';

export default function Seller() {
  const router = useRouter();
  return (
    <Wrapper isNavTransparent={true}>
      <Contents pt='80'>
        <h3 className='pb--0 pt--50 text-gold fw-300 fs--40 text-center '>
          Contributor Profile
        </h3>
      </Contents>

      <Contents pt='0'>
        <div className={`row gutters-lg`}>
          <div className='col-12 col-md-5 offset-md-1 pb--20'>
            <img
              onClick={() => router.push('/seller')}
              src='/images/user.png'
              alt=''
              className='w-100p'
            />
          </div>
          <div className='col-12 col-md-5'>
            <div className='product-details'>
              <div className='seller-main-details'>
                <div className='fs--15'>
                  <span className='d-block mb--15 fs--40 fw-300 font-small'>
                    Mugabo Francis
                  </span>
                  <button className='btn btn-primary fw-300 pl--25 pr--25 brr-0 fs--20'>
                    Seller
                  </button>
                  <span className='rating d-block pt--15'>
                    <b>Rating:</b> <i className='fi fi-star-full'></i>
                    <i className='fi fi-star-full'></i>
                    <i className='fi fi-star-full'></i>
                    <i className='fi fi-star-full'></i>
                    <i className='fi fi-star-full'></i>
                  </span>
                </div>
              </div>
              <p className='pt--30'>
                Gorilla&apos;s Coffee, 100% Arabica Bourbon, Dark Chocalate,
                Spice and a Hint of Luscious Fruit. Expresso Roast, Roasted
                Beans, 250g
              </p>
            </div>
          </div>
        </div>
      </Contents>

      <Contents pt='20'>
        <div className='col-12 col-md-10 p--0 offset-md-1'>
          <div className='row'>
            <div className='col-12 col-md-12'>
              <h3 className='w-100p font-weight-normal fs--25 mb--50'>
                Mugabo’s products
              </h3>
            </div>
            {productsData.coffee.slice(0, 2).map((product, i) => (
              <div key={i} className='col-12 col-md-6 mb--20'>
                <div className='bg-white border p-holder'>
                  <div className='product-pic-holder pb--20'>
                    <img
                      onClick={() => router.push('/product')}
                      src={product.imgPath}
                      alt=''
                      className='pointer'
                    />
                  </div>
                  <div className='single-product-details'>
                    <div className=''>
                      <span
                        onClick={() => router.push('/product')}
                        className='d-block pointer'>
                        <b>{product.name}</b>{' '}
                        {product.type != '' ? product.type : ''}
                      </span>
                      <span>{product.company}</span>
                    </div>

                    <div className='pt--20 pb--30'>{product.details}</div>

                    <div className='buy-action-container'>
                      <button className='btn fw--700 btn-sm btn-light-1 w-40p'>
                        {product.price}
                      </button>
                      <button
                        onClick={() => router.push('/checkout')}
                        className='btn btn-sm btn-primary w-40p pointer'>
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Contents>
    </Wrapper>
  );
}
