import React from 'react';
import Link from 'next/link';
import Wrapper from '../../../compontents/Dashboard/Layouts/Wrapper';
import PrintReports from '../../../compontents/Dashboard/PrintReports';

export default function Articles() {
  const heads = ['', 'Name', 'Posted date', 'Menu', 'Action'];
  const data = [
    {
      name: 'Caffee Iwacu',
      date: 'Thursday 24th May 2021',
      menu: 'Espresso based, Milk-based espresso',
      link: '/article',
      imgPath: '/images/shop-image2.jpg',
    },
    {
      name: 'Caffee Iwacu',
      date: 'Thursday 24th May 2021',
      menu: 'Espresso based, Milk-based espresso',
      link: '/article',
      imgPath: '/images/shop-image2.jpg',
    },
    {
      name: 'Caffee Iwacu',
      date: 'Thursday 24th May 2021',
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
            <PrintReports reportTitle='All articles' />
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
                {data.map((article, i) => (
                  <tr key={i}>
                    <th scope='row'>
                      <img src={article.imgPath} height='30' alt='' />
                    </th>
                    <td>{article.name}</td>
                    <td>{article.date}</td>
                    <td>
                      <Link href={article.link}>{article.menu}</Link>
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
