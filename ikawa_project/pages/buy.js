/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';

import Wrapper from '../compontents/Layouts/Wrapper';
import SecondaryHeader from '../compontents/SecondaryHeader';
import { productsData } from '../data/client';
import Contents from '../compontents/Layouts/Contents';
import BgGrayContainer from '../compontents/BgGrayContainer';

export default function Buy() {
  const router = useRouter();
  return (
    <Wrapper isNavTransparent={true}>
      <SecondaryHeader
        bgImage={productsData.headerContent.imgPath}
        title={productsData.headerContent.title}
      />

      <BgGrayContainer>
        <Contents pt='0'>
          <div className='row'>
            {productsData.coffee.map((product, i) => (
              <div key={i} className='col-12 col-md-6 mb--20'>
                <div className='bg-white p-holder'>
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
        </Contents>
      </BgGrayContainer>
    </Wrapper>
  );
}
