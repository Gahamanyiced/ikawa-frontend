import React from 'react';
import Link from 'next/link';
import Wrapper from '../../../compontents/Dashboard/Layouts/Wrapper';
import PrintReports from '../../../compontents/Dashboard/PrintReports';

export default function AllCoffeeShops() {
  const heads = ['Name', 'Email', 'Feedback', 'Action'];
  const data = [
    {
      name: 'Caffee Iwacu',
      email: 'email@gmail.com',
      feedback: 'Espresso based, Milk-based espresso',
    },
    {
      name: 'Caffee Iwacu',
      email: 'email@gmail.com',
      feedback: 'Espresso based, Milk-based espresso',
    },
    {
      name: 'Caffee Iwacu',
      email: 'email@gmail.com',
      feedback: 'Espresso based, Milk-based espresso',
    },
  ];
  return (
    <Wrapper>
      <div className='bg-light p--40 mt--30'>
        <div className='row show-on-print'>
          <div className='col-12 col-md-12'>
            <PrintReports reportTitle='All Feedbacks/Questions' />
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
                    <td>{shop.name}</td>
                    <td>{shop.email}</td>
                    <td>{shop.feedback}</td>
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
