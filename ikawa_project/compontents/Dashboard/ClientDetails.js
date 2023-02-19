import React from 'react';
import Image from 'next/image';
import Input from './FormElements/Input';
import Button from './FormElements/Button';

export default function ClientDetails() {
  return (
    <div className='bg-details mb--30 p--20 mt--10 br-10'>
      <div className='details-title-holder pb--20'>Profile</div>
      <div className='d-flex justify-content-center'>
        <div className='logged-user-picture'>
          <Image
            src='/images/user.png'
            alt=''
            width={150}
            height={150}
            quality={100}
          />
        </div>
      </div>
      <div className='row pt--30 pb--20 pr--40 pl--40'>
        <Input
          type='text'
          label='Full name'
          name='fullName'
          id='fullName'
          isRequired={true}
          placeholder='Ex: John Doe'
          size='col-12 col-md-12'
          bgColor='bg-white'
        />
        <Input
          type='text'
          label='Email'
          name='email'
          id='email'
          isRequired={true}
          placeholder='MugaboFrancis@gmail.com'
          size='col-12 col-md-12'
          bgColor='bg-white'
        />
        <Input
          type='text'
          label='Password'
          name='password'
          id='password'
          isRequired={true}
          placeholder=''
          size='col-12 col-md-12'
          bgColor='bg-white'
        />

        <Button
          offset=''
          label='Update profile'
          size='col-12 col-md-12'
          marginTop='20'
        />
      </div>
    </div>
  );
}
