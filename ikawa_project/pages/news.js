/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';

import Wrapper from '../compontents/Layouts/Wrapper';
import Contents from '../compontents/Layouts/Contents';
import { homePage } from '../data/client';

export default function News() {
  const router = useRouter();
  return (
    <Wrapper isNavTransparent={true}>
      <Contents>
        <div className='pt--50 mobile '>
          {homePage.news.map((post, i) => (
            <div key={i} className='pb--30 post-item'>
              <div className='post-image'>
                <div className='post-grid-img-holder'>
                  <img
                    onClick={() => router.push(post.articleUrl)}
                    src={post.imgPath}
                    className='w-100p pointer'
                    alt=''
                  />
                </div>
              </div>
              <div>
                <h4
                  onClick={() => router.push(post.articleUrl)}
                  className='post-grid-head pt--0 pointer'>
                  {post.head}
                </h4>
                <span className='post-grid-subhead font-weight-medium fs--14 d-block mb--10'>
                  {post.subHead}
                </span>
                <p>{post.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Current state of the Rwandan coffee */}
      </Contents>
    </Wrapper>
  );
}
