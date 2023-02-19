/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Wrapper from '../compontents/Layouts/Wrapper';
import { shops } from '../data/client';
import Contents from '../compontents/Layouts/Contents';
import GMap from '../compontents/Gmap';

// API key of the google map
const GOOGLE_MAP_API_KEY = 'AIzaSyC77Wojqs-lQjc1eYI5SOeHTWW5DOtyG_E';

// load google map script
const loadGoogleMapScript = (callback) => {
  if (
    typeof window.google === 'object' &&
    typeof window.google.maps === 'object'
  ) {
    callback();
  } else {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', callback);
  }
};

const CoffeeShops = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true);
    });
  }, []);

  return (
    <Wrapper>
      <Contents>
        <div className='w-100p'>
          <h3 className='pb--40 pt--30 text-gold fw-300 fs--40 text-center'>
            Find the best coffeeshops near you
          </h3>
          {!loadMap ? (
            <div className='text-center w--100p'>
              <i className='fi fi-circle-spin fi-spin fs--50 text-gold'></i>
            </div>
          ) : (
            <GMap height='400px' />
          )}
        </div>
      </Contents>

      <Contents pt='20'>
        <div className='shops-container'>
          {shops.map((shop, i) => (
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
};

export default CoffeeShops;
