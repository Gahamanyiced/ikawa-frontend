import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const footerContent = {
    production: [
      { name: 'Farming', url: '/' },
      { name: 'Processing', url: '/' },
      { name: 'Storage', url: '/' },
    ],
    reports: [
      { name: 'Reports', url: '/reports' },
      { name: 'Papers', url: '/' },
    ],
    about: [
      { name: 'Contact us', url: '/' },
      { name: 'Help center', url: '/' },
    ],
    getInTouch: [
      { name: 'Feedbacks', url: '/' },
      { name: 'Questions', url: '/' },
    ],
  };

  return (
    <div className='footer mt--20 no-print'>
      <div className='container'>
        <div>
          <img
            src='/images/logo-footer.svg'
            width='128'
            height='70.76'
            alt='ikawa'
            className='footer-logo mb--40'
          />
        </div>
        <div>
          <h5>Production & Trade</h5>
          <ul>
            {footerContent.production.map((el, i) => (
              <Link key={i} href={el.url}>
                {el.name}
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <h5>Reports</h5>
          <ul>
            {footerContent.reports.map((el, i) => (
              <Link key={i} href={el.url}>
                {el.name}
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <h5>About us</h5>
          <ul>
            {footerContent.about.map((el, i) => (
              <Link key={i} href={el.url}>
                {el.name}
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <h5>Get in touch</h5>
          <ul>
            {footerContent.getInTouch.map((el, i) => (
              <Link key={i} href={el.url}>
                {el.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
