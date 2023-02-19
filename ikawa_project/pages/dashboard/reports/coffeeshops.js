import React from 'react';
import Link from 'next/link';
import Wrapper from '../../../compontents/Dashboard/Layouts/Wrapper';
import PrintReports from '../../../compontents/Dashboard/PrintReports';

export default function AllCoffeeShops() {
  const heads = ['', 'Name', 'Location', 'Menu', 'Action'];
  const data = [
    {
      name: 'Caffee Iwacu',
      location: 'location',
      menu: 'Espresso based, Milk-based espresso',
      link: '/article',
      imgPath: '/images/shop-image2.jpg',
    },
    {
      name: 'Caffee Iwacu',
      location: 'location',
      menu: 'Espresso based, Milk-based espresso',
      link: '/article',
      imgPath: '/images/shop-image2.jpg',
    },
    {
      name: 'Caffee Iwacu',
      location: 'location',
      menu: 'Espresso based, Milk-based espresso',
      link: '/article',
      imgPath: '/images/shop-image2.jpg',
    },
  ];
  return (
    <Wrapper>
      <div className='bg-light p--40 mt--30'>
        <div className='row show-on-print'>
          <div className='col-12 col-md-12'>
            <PrintReports reportTitle='All coffeeshops' />
          </div>
          <div className='col-12 col-md-12 table-responsive'>
            <table class='table'>
              <thead>
                {heads.map((h, i) => (
                  <th
                    scope='col'
                    className={
                      h.toLowerCase() === 'action' ? ' no-print ' : ''
                    }>
                    {h}
                  </th>
                ))}
              </thead>

              <tbody>
                {data.map((shop, i) => (
                  <tr key={i}>
                    <th scope='row'>
                      <img src={shop.imgPath} height='30' alt='' />
                    </th>
                    <td>{shop.name}</td>
                    <td>{shop.location}</td>
                    <td>
                      <Link href={shop.link}>{shop.menu}</Link>
                    </td>
                    <td className='no-print'>
                      <span>
                        <Link href='/'>
                          <i className='fi fi-pencil mr--20 text-success pointer'></i>
                        </Link>
                        <i className='fi fi-thrash text-danger pointer'></i>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
