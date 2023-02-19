import React from 'react';

export default function SecondaryHeader({ bgImage, title, fontSize_ }) {
  const fSize = fontSize_ && fontSize_ != '' ? fontSize_ : '';
  return (
    <section
      className='secondary-header w-100p p--0'
      style={{ backgroundImage: `url(${bgImage})` }}>
      <h1 className={`secondary-header-text ${fSize}`}>{title}</h1>
    </section>
  );
}
