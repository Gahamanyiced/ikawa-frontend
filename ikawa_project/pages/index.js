/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';

import Wrapper from '../compontents/Layouts/Wrapper';
import Contents from '../compontents/Layouts/Contents';
import { homePage } from '../data/client';
import PostsGrip from '../compontents/PostsGrip';

export default function componentName() {
  return (
    <>
      <Wrapper isNavTransparent={true}>
        <section className='main-header w-100p p--0'>
          <h1 className='main-header-text'>
            Everything you <br />
            need to know about <br />
            <span className='font-weight-bold'>Rwandan coffee</span>
          </h1>
        </section>
        <Contents>
          {/* History */}
          <div className='row'>
            <div className='col-12 col-md-6 pb--20 '>
              <img src={homePage.history.imgPath} alt='' className='w-100p' />
            </div>
            <div className='col-12 col-md-6'>
              <h3 className='pb--30 text-gold'>History</h3>
              {homePage.history.text}
            </div>
          </div>

          {/* Current state of the Rwandan coffee */}
        </Contents>

        <Contents pt='0'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='pb--50 fw--500 text-gold text-center'>
                Current state of the Rwandan coffee
              </h3>
            </div>
            <div className='col-12 col-md-5 pb--20'>
              <img
                src={homePage.currentState.img1Path}
                className='w-100p'
                alt=''
              />
            </div>
            <div className='col-12 col-md-7 pb--20'>
              <img
                src={homePage.currentState.img2Path}
                className='w-100p'
                alt=''
              />
            </div>
          </div>
        </Contents>

        <Contents pt='0'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='pb--40 fw--500 text-gold text-center'>
                The Rwandan coffee value chain
              </h3>
            </div>
            <div className='col-12 col-md-12 pb--20'>
              <p>{homePage.rCoffeeValue.text}</p>
            </div>
            <div className='col-12 col-md-12 pb--20'>
              <img
                src={homePage.rCoffeeValue.imgPath}
                className='w-100p'
                alt=''
              />
            </div>
          </div>
        </Contents>

        <Contents pt='0'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='pb--40 fw--500 text-gold text-center'>
                Rwandan coffee growing calendar
              </h3>
            </div>
            <div className='col-12 col-md-12 pb--20'>
              <p>{homePage.rGrowingCalendar.text}</p>
            </div>
            <div className='col-12 col-md-12 pb--20'>
              <img
                src={homePage.rGrowingCalendar.imgPath}
                className='w-100p'
                alt=''
              />
            </div>
          </div>
        </Contents>

        <Contents pt='20'>
          <h3 className='pb--60 fw--500 text-gold text-center'>
            Rwandan coffee in the news
          </h3>
          <PostsGrip posts={homePage.news} />
        </Contents>

        <section className='bg-light pt--50 pb--0 mt--30 pb--0 mb---20'>
          <Contents pt='0'>
            <div className='row gutters-lg'>
              <div className='col-12 col-md-7 order-last'>
                <div className='bg-white p--30'>
                  <form action='' className='w-100p'>
                    <div className='form-label-group mb-3'>
                      <input
                        placeholder='Full Name'
                        id='fname'
                        type='text'
                        className='form-control only-border-bottom bg-white'
                      />
                      <label for='fname' className='fs--16'>
                        Full Name
                      </label>
                    </div>

                    <div className='form-label-group mb-3'>
                      <input
                        placeholder='Email'
                        id='email'
                        type='text'
                        className='form-control only-border-bottom bg-white'
                      />
                      <label for='email' className='fs--16'>
                        Email
                      </label>
                    </div>

                    <div className='form-label-group mb-3'>
                      <textarea
                        name=''
                        id=''
                        rows='1'
                        className='form-control only-border-bottom bg-white'
                      />
                      <label for='message' className='fs--16'>
                        Your Message/Feedback
                      </label>
                    </div>
                    <div className='text-center'>
                      <button className='btn btn-primary brr-0 pl--25 pr--25 mt--20'>
                        Send message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='col-12 col-md-1'></div>
              <div className='col-12 col-md-4 order-first'>
                <h3 className='fs--50 fw-300 text-dark pt--40 message'>
                  Send us <br /> a message <br /> or feedback
                </h3>
              </div>
            </div>
          </Contents>
        </section>
      </Wrapper>
    </>
  );
}
