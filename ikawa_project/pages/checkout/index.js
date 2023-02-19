/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Wrapper from '../../compontents/Layouts/Wrapper';
import SecondaryHeader from '../../compontents/SecondaryHeader';
import { productsData } from '../../data/client';
import Contents from '../../compontents/Layouts/Contents';
import Input from '../../compontents/Dashboard/FormElements/Input';
import Radio from '../../compontents/Dashboard/FormElements/Radio';
import Button from '../../compontents/Dashboard/FormElements/Button';

export default function Checkout() {
  const router = useRouter();
  return (
    <Wrapper isNavTransparent={true}>
      <SecondaryHeader
        bgImage={productsData.headerContent.imgPath}
        title={productsData.headerContent.title}
      />
      <Contents pt='80'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='fw-300 text-center mb--60'>Checkout</h2>
          </div>
          <div className='col-12 col-md-12 mb--20'>
            <div className='w-100p bg-light p--40'>
              <div className='row gutters-lg pb--30'>
                <div className='col-12 col-md-12'>
                  <h3 className='fs--22 text-dark pb--30'>Order summary</h3>
                </div>
                <div className='col-12 col-md-2'>
                  <img
                    src='/images/huge-product-pic.jpg'
                    height='200'
                    className='pb--10'
                    alt=''
                  />
                </div>
                <div className='col-12 col-md-9'>
                  <p>
                    Gorilla&apos;s Coffee, 100% Arabica Bourbon, Dark Chocalate,
                    Spice and a Hint of Luscious Fruit. Expresso Roast, Roasted
                    Beans, 250g
                  </p>
                  <hr />
                  <div className='checkout-details'>
                    <span>
                      <b>Quantity</b>: 1
                    </span>
                    <span>
                      <b>Subtotal:</b> $10
                    </span>
                    <span>
                      <b>Delivery:</b> $5
                    </span>
                    <hr />
                    <span>
                      <b>Total</b>: $15
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'></div>
        </div>
      </Contents>

      <Contents pt='0'>
        <div className='row mt---20'>
          <div className='col-12 col-md-12'>
            <h3 className='fs--20 text-dark pb--15'>Delivery address</h3>
          </div>
          <div className='col-12 col-md-12'>
            <form action='' className='wp--100p row'>
              <Input
                type='text'
                label='Full name'
                name='fullName'
                id='fullName'
                isRequired={true}
                placeholder='Enter your name'
                size='col-12 col-md-4'
                bgColor='bg-light'
              />
              <Input
                type='text'
                label='Country'
                name='country'
                id='country'
                isRequired={true}
                placeholder='Rwanda'
                size='col-12 col-md-4'
                bgColor='bg-light'
              />

              <Input
                type='text'
                label='Phonr number'
                name='pNum'
                id='pNum'
                isRequired={true}
                placeholder='Add phone number'
                size='col-12 col-md-4'
                bgColor='bg-light'
              />

              <div className='col-12 col-md-12'>
                <hr className='w-100p mt--30' />
                <h3 className='fs--20 text-dark pb--0 mt--30'>
                  Choose payment method
                </h3>
                <div className='row mt--30 mb--20'>
                  <Radio
                    size='col-6 col-md-3'
                    label={
                      <>
                        Pay cash at <br /> delivery
                      </>
                    }
                  />

                  <Radio
                    size='col-6 col-md-3'
                    label={
                      <>
                        <Image
                          src='/images/airetel1.jpg'
                          width={80}
                          height={40}
                          quality='100'
                          alt=''
                        />
                      </>
                    }
                  />

                  <Radio
                    size='col-6 col-md-3 pb--10'
                    label={
                      <>
                        <Image
                          src='/images/card-pay.jpg'
                          width={65}
                          height={40}
                          quality='100'
                          alt=''
                        />
                      </>
                    }
                  />

                  <Radio
                    size='col-6 col-md-3 pb--10'
                    label={
                      <>
                        <Image
                          src='/images/momo-pay.jpg'
                          width={70}
                          height={45}
                          quality='100'
                          alt=''
                        />
                      </>
                    }
                  />
                </div>
                <hr />
                <div className='col-12 col-md-12'>
                  <div className='row pb--20 pt--20'>
                    <Input
                      type='text'
                      label='Phone number '
                      name='paymentPhone'
                      id='paymentPhone'
                      isRequired={true}
                      placeholder='Enter your number'
                      size='col-12 col-md-4 pl--0'
                      bgColor='bg-light'
                    />
                  </div>

                  <div className='row pt--20 pb--20'>
                    <h3 className='fs--20 text-dark pb--15 w-100p'>
                      Card info:
                    </h3>
                    <Input
                      type='text'
                      label='Cardholder name '
                      name='cName'
                      id='cName'
                      isRequired={true}
                      placeholder='Enter your number'
                      size='col-12 col-md-4 pl--0'
                      bgColor='bg-light'
                    />

                    <Input
                      type='text'
                      label='Card number'
                      name='cNum'
                      id='cNum'
                      isRequired={true}
                      placeholder='Enter your number'
                      size='col-12 col-md-4 pl--0'
                      bgColor='bg-light'
                    />

                    <Input
                      type='text'
                      label='Expiry date'
                      name='eDate'
                      id='eDate'
                      isRequired={true}
                      placeholder=''
                      size='col-6 col-md-2 pl--0'
                      bgColor='bg-light'
                    />

                    <Input
                      type='text'
                      label='CCV'
                      name='ccv'
                      id='ccv'
                      isRequired={true}
                      placeholder='Ex: 123'
                      size='col-6 col-md-2 pl--0'
                      bgColor='bg-light'
                    />
                  </div>
                  <div className='row pt--20'>
                    <Button
                      size='col-12 col-md-4'
                      offset='offset-md-4'
                      label='Pay'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Contents>
    </Wrapper>
  );
}
