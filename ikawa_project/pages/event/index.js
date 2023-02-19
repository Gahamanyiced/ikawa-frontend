/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

import Wrapper from '../../compontents/Layouts/Wrapper';
import Contents from '../../compontents/Layouts/Contents';

export default function Event() {
  const picures = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Wrapper>
      <Contents pt='100'>
        <h3 className='pb--0 pt--30 text-gold fw-300 fs--45 text-center min-size-mobile'>
          Find all coffee related events in Rwanda
        </h3>

        <div className='row mt--40 gutters-lg no-mt-mobile'>
          <div className='col-12 col-md-12 pb--30'>
            <img src='images/coffee-ev.jpg' className='w-100p' alt='' />
          </div>

          <div className='col-12 col-md-12'>
            <h1 className=' pb--20 fs--30 font-weight-bold huge-size'>
              Let’s Talk Coffee® Rwanda 2019
            </h1>

            <p>
              Let’s Talk Coffee® Rwanda 2017 was the largest-ever Relationship
              Coffee event in Africa, gathering more than 400 attendees at the
              Kigali Marriott to discuss pressing issues in the coffee industry,
              strengthen business relationships, and participate in training
              workshops and cuppings.
            </p>
          </div>

          <div className='col-12 col-md-5 pt--30  pb--30'>
            <img src='/images/old-ev1.jpg' className='w-100p mb--20' alt='' />
            <img src='/images/old-ev2.jpg' className='w-100p' alt='' />
          </div>

          <div className='col-12 col-md-7 pt--30'>
            <h5 className='pb--20 font-weight-bold'>
              FORGING RELATIONSHIPS IN RWANDA
            </h5>
            <p>
              In 2013, Bloomberg Philanthropies and Sustainable Harvest®
              partnered to create the Relationship Coffee Institute, a
              non-profit public benefit corporation committed to transforming
              the lives of rural, low-income women coffee farmers through
              training and market access. In 2017, the Relationship Coffee
              Institute and Bloomberg Philanthropies presented Let’s Talk
              Coffee® Rwanda, the largest buying event of the country’s 2017
              harvest.
            </p>
            <p>
              The 258 farmers at the event, 72% of whom were women, represented
              cooperatives comprised of more than 13,000 women farmers. As a
              result, the event offered an unprecedented opportunity to connect
              farmers to international markets and develop business
              relationships between buyers and producers.
            </p>
            <p>
              For roasters, the event provided a unique opportunity to explore
              the diverse flavor profiles of Rwanda’s growing specialty coffee
              industry and meet hundreds of farmers face-to-face. The “Build
              Your Own Lot” program featured at the event gave buyers a chance
              to taste coffees from throughout Rwanda and take home their
              favorite selections from the cupping table.
            </p>
          </div>
        </div>
      </Contents>

      <section className='bg-light pt--80 pb--0'>
        <Contents pt='0'>
          <div className='row gutters-lg'>
            <div className='col-12 col-md-6 pb--20'>
              <h5 className='pb--30 font-weight-bold fs--30 mid-size'>
                EXPERIENCING RWANDA’S PRODUCTION FIRST HAND
              </h5>
              <p>
                Let’s Talk Coffee Rwanda 2017 wrapped up with field trips to the
                Rwandan cooperatives Dukunde Kawa and Twongere Umusaruro. During
                these trips, farmers showcased their production processes and
                provided attendees with the opportunity to see the dedication
                that goes into producing high quality coffee in Rwanda. The farm
                visits also served as an important opportunity to strengthen
                relationships between growers and buyers at the farm level.
              </p>
            </div>
            <div className='col-12 col-md-6'>
              <img src='/images/old-ev3.jpg' className='w-100p' alt='' />
            </div>
          </div>
        </Contents>
      </section>

      <Contents pt='60'>
        <h3 className='text-center fw-300 mb--50'>Event photos</h3>
        <div className='row'>
          {picures.map((pic, i) => (
            <div key={i} className='col-12 col-md-6 mb--10'>
              <img src={`/images/e${pic}.jpg`} className='w-100p' alt='' />
            </div>
          ))}
        </div>
      </Contents>

      <section className='bg-light pt--60 pb--60 mt--30 mb---20 '>
        <div className='take-action'>
          <h1 className='font-weight-normal fs--30'>
            Learn more about Let's Talk Coffee®!
          </h1>
          <Link href='/' passHref={true}>
            <button className='btn btn-outline-dark mt--20 pl--30 pr--30 brr-0'>
              Continue to LetsTalkCoffee.org
            </button>
          </Link>
        </div>
      </section>
    </Wrapper>
  );
}
