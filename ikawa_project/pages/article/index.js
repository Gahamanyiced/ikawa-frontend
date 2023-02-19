/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import React from 'react';

import Wrapper from '../../compontents/Layouts/Wrapper';
import Contents from '../../compontents/Layouts/Contents';

export default function Article() {
  return (
    <Wrapper>
      <Contents>
        <h1 className='text-center fw-300 pt--20 pb--30 min-size-mobile'>
          Rwandan Coffee in the news
        </h1>
        <div>
          <img src='/images/post-image.png' className='w-100p brr-5' alt='' />
        </div>
        <h1 className='pt--40 pb--10 fs--30 fw--800'>
          RWANDAN COFFEE RANKED AMONG THE BEST OF THE BEST GLOBALLY
        </h1>
        <div className='post-author-details font-weight-medium'>
          <span>Admin - Thursday 24th May 2021</span>
          <span className='d-block text-center'>
            <i className='fi fi-bookmark fs--20'></i>
            <span className='fs--10 font-weight-medium d-block hidde-sm'>
              SAVE ARTICLE
            </span>
          </span>
        </div>
        <div className='post-summary pt--20'>
          <p>
            Rwanda beat eight other competitors to the “Best of the Best” coffee
            accolade on grounds of the beans’ aromatic richness, complexity,
            balance, elegance and aroma intensity and strength, according to
            judges. The country’s coffee was last week competing with beans from
            Brazil, Colombia, Costa Rica, Ethiopia, Guatemala, India, Nicaragua
            and Honduras, known to be the best producers of coffee in the world.
            The competition took place at the United Nations evaluation of the
            world’s highest quality coffee lots grown in the nine countries.
          </p>
          <p>
            The exercise came also after rounds of blind tastings of
            participating coffee lots from across the world at illycaffè, the
            global leader in high-quality coffee and a pioneer of large-scale,
            directly-traded coffee, that Rwanda, represented by three coffee
            washing stations, was announced to have grown its coffee beans with
            the best of qualities. Rwanda’s Rusizi, Liza and Mashesha Coffee
            Washing Stations lots topped the score among 27 of the world’s best
            lots from the 2016/2017 harvests in nine countries. The function was
            attended by representatives of each grower and delegates from each
            nation. The coffee lots were chosen to compete, following intensive
            analysis at illy’s Quality Lab at its Trieste, Italy headquarters.
            All nine finalists will comprise the legendary illy blend, known for
            decades for its unparalleled richness, complexity and consistency.
          </p>
          <p>
            &quot; It is an honor and a pleasure to recognize all finalists for
            their achievements, which is nothing less than producing the
            highest-quality coffee in the world through sustainable
            methods,&quot; said Andrea Illy, chairman of illycaffè. For
            Tumwamini Ndamwemera Jean Paul, the Managing Director of Lisa Coffee
            Washing Station, the second best lot award, says that this
            competition awakens them to compete by ensuring whatever that can
            qualify their coffee beans the best. “We were recognized for raising
            coffee excellence of the highest quality through sustainable means.{' '}
          </p>
          <p>
            For that, we have to stress our company’s hand-in-hand work with
            farmers to realize its dream of offering the best coffee to the
            world,” he said.
          </p>
        </div>
      </Contents>
    </Wrapper>
  );
}
