/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Wrapper from '../compontents/Layouts/Wrapper';
import SecondaryHeader from '../compontents/SecondaryHeader';
import { processingData } from '../data/client';
import Contents from '../compontents/Layouts/Contents';

export default function Processing() {
  return (
    <Wrapper isNavTransparent={true}>
      <SecondaryHeader
        bgImage={processingData.headerContent.imgPath}
        title={processingData.headerContent.title}
      />

      <Contents pt='60'>
        {/* Intro */}
        <div className='row'>
          <div className='col-12 col-md-12 '>
            <h3 className='pb--30 text-gold fs--35'>
              {processingData.intro.title}
            </h3>
          </div>
          <div className='col-12 col-md-12'>{processingData.intro.text}</div>
        </div>
      </Contents>

      <Contents pt='0'>
        {processingData.details.map((detail, i) => (
          <div key={i} className={`row ${i > 0 ? ' pt--60 ' : ' '}`}>
            <div
              className={`col-12 mb--40 ${detail.size} ${
                detail.isTitleOffset ? detail.offset : ' '
              }  artistic-title`}
              style={{
                backgroundImage: 'url(/images/bg-text.svg)',
                backgroundSize: 'cover',
              }}>
              <h3 className='text-gold text-center'>{detail.title}</h3>
            </div>
            <div
              className={`col-12 col-md-12 ${
                detail.imgPath1 != '' ? 'mb--40' : ''
              }`}>
              {detail.text}
            </div>
            {detail.imgPath1 != '' && detail.imgPath2 != '' ? (
              <>
                <div className='col-12 col-md-6 pb--10'>
                  <img src={detail.imgPath1} alt='' className='brr-5 w-100p' />
                </div>
                <div className='col-12 col-md-6'>
                  <img src={detail.imgPath2} alt='' className='brr-5 w-100p' />
                </div>
              </>
            ) : (
              ''
            )}
          </div>
        ))}
      </Contents>
    </Wrapper>
  );
}
