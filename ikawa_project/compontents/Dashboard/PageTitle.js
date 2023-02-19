import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function PageTitle({
  data: { pageTitle, accountHolder, role, imgPath },
}) {
  const router = useRouter();
  return (
    <div className='admin-page-title no-print'>
      <div className='page-title-detail'>
        <h1
          className='mb--0 pointer'
          onClick={() => router.push('/dashboard/admin')}>
          {pageTitle}
        </h1>
        <span>{accountHolder}</span>
      </div>
      <div className='account-user-details'>
        <div className='account-img-holder'>
          <Image
            src={imgPath}
            width={80}
            height={80}
            quality={100}
            alt='user-picture'
            className='pointer'
            onClick={() => router.push('/dashboard/seller')}
          />
        </div>
        <span className='bg-white user-role mt--10'>{role}</span>
      </div>
    </div>
  );
}
