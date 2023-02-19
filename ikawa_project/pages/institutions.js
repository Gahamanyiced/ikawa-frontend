/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

import Wrapper from '../compontents/Layouts/Wrapper';
import { institutionData } from '../data/client';
import Contents from '../compontents/Layouts/Contents';

export default function Processing() {
  return (
    <Wrapper isNavTransparent={true}>
      <Contents pt='80'>
        <h3 className='pb--0 pt--50 text-gold fw-300 fs--45 text-center'>
          {institutionData.mainTitle}
        </h3>
      </Contents>

      <Contents pt='0'>
        <div className={`row`}>
          {institutionData.statisticNumber.map((statistic, i) => (
            <div key={i} className={`col-6 col-md-3 mb--40`}>
              <h3 className='font-weight-bold fs--35'>{statistic.numbers}</h3>
              <span className='font-weight-medium'>{statistic.title}</span>
            </div>
          ))}

          <div className='col-12 col-md-10 offset-md-1'>
            <img
              src={institutionData.institutions.imgPath}
              className='w-100p'
              alt=''
            />
          </div>
        </div>
      </Contents>

      <Contents pt='30'>
        <div className='row'>
          <div className='col-12 col-md-12 mb--50'>
            <h3 className='text-gold mb--20'>Government institutions</h3>
            <p>
              The government institutions you need to help you start, run and
              maintain your coffee business in Rwanda
            </p>
          </div>
          {institutionData.institutions.data.map((gov, i) => (
            <div key={i} className='col-12 col-md-6 pb--50'>
              <div className='gov-image-holder text-center pb--30'>
                <img
                  src={gov.imgPath}
                  alt=''
                  height={gov.picHeight ? gov.picHeight : '100'}
                  className={
                    gov.imgPath.split('.')[0] === '/images/rdb' ? 'rdb' : ''
                  }
                />
              </div>
              <div>
                <p>{gov.text}</p>
                <h5 className='fs--18 text-dark text-center pt--15 font-weight-medium'>
                  Contacts
                </h5>
                <span className='d-block text-center'>
                  {`${gov.contact.tel} - ${gov.contact.email} - `}
                  <Link href='/' passHref>
                    <span className='text-success'>{gov.contact.web}</span>
                  </Link>
                </span>
              </div>
            </div>
          ))}
        </div>
      </Contents>

      <Contents pt='0'>
        <div className={`row mt---20`}>
          <div className='col-12 col-md-12 mb--30'>
            <h3 className='text-gold mb--20'>
              {institutionData.guidance.mainTitle}
            </h3>
            <p>{institutionData.guidance.text}</p>
          </div>
          {institutionData.guidance.data.map((guidance, i) => (
            <div key={i} className={`col-12 col-md-12 mb--40`}>
              <h5 className='font-weight-bold fs--18 mb--30'>
                {guidance.title}
              </h5>
              <p>{guidance.text}</p>
              <span className='font-weight-medium fs--15 text-primary-green pointer'>
                {guidance.link}
              </span>
            </div>
          ))}
        </div>
      </Contents>

      <Contents pt='0'>
        <div className={`row mt---20`}>
          <div className='col-12 col-md-12 mb--30'>
            <h3 className='text-gold mb--0 fs--40'>
              {institutionData.other.mainTitle}
            </h3>
          </div>
          <div className='col-12 col-md-12'>
            <div className='separated'>
              <h5 className=' text-gold'>
                {institutionData.other.roasters.subTitles}
              </h5>
              <i className='fi fi-arrow-down-slim'></i>
            </div>
          </div>
          {institutionData.other.roasters.data.map((roaster, i) => (
            <div key={i} className={`col-12 col-md-4 mb--20`}>
              <span className='d-block'>
                <b>{roaster.name}</b>
              </span>
              <span className='d-block'>{roaster.detail}</span>
              <span className='d-block'>{roaster.address}</span>
              <span className='d-block'>{roaster.tel}</span>
              <span className='d-block'>{roaster.email}</span>
            </div>
          ))}

          <div className='col-12 col-md-12 pt--30'>
            <div className='separated'>
              <h5 className='text-gold'>
                {institutionData.other.exporters.subTitles}
              </h5>
              <i className='fi fi-arrow-down-slim'></i>
            </div>
          </div>
          {institutionData.other.exporters.data.map((exporter, i) => (
            <div key={i} className={`col-12 col-md-4 mb--20`}>
              <span className='d-block'>
                <b>{exporter.name}</b>
              </span>
              <span className='d-block'>{exporter.detail}</span>
              <span className='d-block'>{exporter.address}</span>
              <span className='d-block'>{exporter.tel}</span>
              <span className='d-block'>{exporter.email}</span>
            </div>
          ))}
        </div>
      </Contents>
    </Wrapper>
  );
}
