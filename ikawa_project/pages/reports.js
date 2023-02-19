import React from 'react';
import { useRouter } from 'next/router';

import Wrapper from '../compontents/Layouts/Wrapper';
import Contents from '../compontents/Layouts/Contents';
import { reportsData } from '../data/client';

export default function reports() {
  return (
    <Wrapper isNavTransparent={true}>
      <Contents pt='100'>
        <h3 className='pb--0 pt--50 mobile text-gold fw-300 fs--45 text-center'>
          Find all reports and studies on Rwandan coffee
        </h3>

        <div className='scroll-button-holder mt--40'>
          <div className='scroll-button'>
            <img src='/images/flesh-down.png' alt='' />
          </div>
        </div>
      </Contents>

      <Contents pt='20'>
        <div className={`row `}>
          {reportsData.map((report, i) => (
            <div key={i} className={`col-12 col-md-12 mb--40 rep`}>
              <div className='w-100p border-customize'>
                <h5 className='font-weight-bold fs--18 mb--30'>
                  {report.title}
                </h5>
                <p>{report.text}</p>
                <span className='font-weight-medium fs--15 text-primary-green pointer'>
                  {report.link}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Contents>
    </Wrapper>
  );
}
