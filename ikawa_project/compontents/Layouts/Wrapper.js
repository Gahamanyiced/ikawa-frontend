import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Wrapper({ children, isNavTransparent }) {
  return (
    <div id='wrapper_content'>
      <Nav isNavTransparent={isNavTransparent} />
      <section className='min-h-100vh p--0'>{children}</section>
      <Footer />
    </div>
  );
}
