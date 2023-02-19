import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Nav from '../../compontents/Layouts/Nav';

export default function componentName() {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className='login'>
        <div className='login-details'>
          <div className='login-details-container'>
            <img
              src='/images/logo-footer.svg'
              height='90'
              alt='ikawa'
              class='footer-logo mb--40'
            />
            <h1 className='fw-300 text-white fs--40'>
              Everything you need to know about{' '}
              <span className='font-weight-bold'>Rwandan coffee</span>
            </h1>
          </div>
        </div>
        <div className='login-form--area pt-mobile-80'>
          <div className='login-form--area-group'>
            <h1 className='fs--45 font-weight-bold text-center'>Login</h1>
            <p className='pt--10 text-center'>
              Enjoy all the different features available for you
            </p>
            <form className='pt--10 pb--10'>
              <div className='form-group position-relative'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  placeholder='Ex: someone@gmail.com'
                  className='form-control'
                  autoComplete='off'
                />
              </div>
              <div className='form-group position-relative'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  placeholder='Min. 8 characters'
                  className='form-control'
                  autoComplete='off'
                />
              </div>
              <div className='form-group d-parallel pt--10'>
                <label className='form-checkbox form-checkbox-primary mb--0'>
                  <input type='checkbox' name='checkbox' checked />
                  <i></i> <span className='fs--15'>Remember me</span>
                </label>
                <Link href='/dashboard/forgot-password' passHref={true}>
                  <span className='fs--15 pointer'>Forgot password?</span>
                </Link>
              </div>
              <div className='form-group position-relative pt--20'>
                <Link href='/dashboard/admin' passHref>
                  <button className='btn btn-primary w-100p'>Login</button>
                </Link>
              </div>
            </form>

            <span className='fs--16 d-block text-center'>
              Don’t have an account yet?
              <Link href='/dashboard/create-account' passHref={true}>
                <span className='font-weight-bold pointer text-primary-green'>
                  {' '}
                  SIGN UP
                </span>
              </Link>
            </span>

            <Link href='/' passHref={true}>
              <p className='terms pointer'>
                Terms & condition | Privacy Policy{' '}
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
