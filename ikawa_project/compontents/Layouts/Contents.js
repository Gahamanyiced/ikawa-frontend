import React from 'react';

export default function Contents({ children, pt }) {
  return (
    <section className={`pt--${pt ? pt : ''}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-1'></div>
          <div className='col-12 col-md-10'>{children}</div>
          <div className='col-12 col-md-1'></div>
        </div>
      </div>
    </section>
  );
}
