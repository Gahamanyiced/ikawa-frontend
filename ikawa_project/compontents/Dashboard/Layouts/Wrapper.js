import React from 'react';
import Nav from '../../Layouts/Nav';
import Footer from '../../Layouts/Footer';
import PageTitle from '../PageTitle';
import { adminPageTitle } from '../../../data/admin';

export default function Wrapper(props) {
  return (
    <div idid='wrapper_content'>
      <Nav />
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-1'></div>
          <div className='col-12 col-md-10 pt--130 pb--50 pt-mobile-80'>
            <PageTitle data={adminPageTitle} />
            {props.children}
          </div>
          <div className='col-12 col-md-1'></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
