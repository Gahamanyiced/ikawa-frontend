import React from 'react';
import Link from 'next/link';
import Wrapper from '../../../compontents/Dashboard/Layouts/Wrapper';
import PrintReports from '../../../compontents/Dashboard/PrintReports';

export default function Events() {
  const heads = ['', 'Name', 'Event date', 'Action'];
  const data = [
    {
      name: 'Caffee Iwacu',
      date: 'Thursday 24th May 2021',
      imgPath: '/images/shop-image2.jpg',
    },
    {
      name: 'Caffee Iwacu',
      date: 'Thursday 24th May 2021',
      imgPath: '/images/shop-image2.jpg',
    },
    {
      name: 'Caffee Iwacu',
      date: 'Thursday 24th May 2021',
      imgPath: '/images/shop-image2.jpg',
    },
  ];
  return (
    <Wrapper>
      <div className='bg-light p--40 mt--30'>
        <div className='row show-on-print'>
          <div className='col-12 col-md-12'>
            <PrintReports reportTitle='All events' />
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
                {data.map((event, i) => (
                  <tr key={i}>
                    <th scope='row'>
                      <img src={event.imgPath} height='30' alt='' />
                    </th>
                    <td>{event.name}</td>
                    <td>{event.date}</td>
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
