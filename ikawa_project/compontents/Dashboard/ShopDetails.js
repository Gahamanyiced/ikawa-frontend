import React from 'react';
import Image from 'next/image';
import Input from './FormElements/Input';
import Button from './FormElements/Button';

export default function ShopDetails() {
  return (
    <div className='bg-details logged-profile mb--30 p--20 mt--10 br-10'>
      <div className='details-title-holder pb--10'>Profile</div>
      <div className='d-flex justify-content-center'>
        <div className='logged-user-picture'>
          <Image
            src='/images/user.png'
            alt=''
            width={120}
            height={120}
            quality={100}
          />
        </div>
      </div>
      <div className='row pt--30 pb--30 pr--30 pl--30'>
        <Input
          type='text'
          label='Coffeeshop name'
          name=''
          id=''
          isRequired={true}
          placeholder='Ex: John Doe'
          size='col-12 col-md-12'
          bgColor='bg-white'
          extraClass='form-control-md'
        />
        <Input
          type='text'
          label='Email'
          name='email'
          id='email'
          isRequired={true}
          placeholder='MugaboFrancis@gmail.com'
          size='col-12 col-md-6'
          bgColor='bg-white'
          extraClass='form-control-md'
        />
        <Input
          type='text'
          label='Password'
          name='password'
          id='password'
          isRequired={true}
          placeholder='Password'
          size='col-12 col-md-6'
          bgColor='bg-white'
          extraClass='form-control-md'
        />
        <Input
          type='text'
          label='Bio'
          name='bio'
          id='bio'
          isRequired={true}
          placeholder='Add bio'
          size='col-12 col-md-6'
          bgColor='bg-white'
          extraClass='form-control-md'
        />

        <Input
          type='text'
          label='Contact'
          name='contact'
          id='contact'
          isRequired={true}
          placeholder='Ex: someone@example.com'
          size='col-12 col-md-6'
          bgColor='bg-white'
          extraClass='form-control-md'
        />

        <Input
          type='text'
          label=''
          name='lat'
          id='lat'
          isRequired={true}
          placeholder='Latitude'
          size='col-12 col-md-6'
          bgColor='bg-white'
          extraClass='form-control-md'
        />

        <Input
          type='text'
          label=''
          name='long'
          id='long'
          isRequired={true}
          placeholder='Longitude'
          size='col-12 col-md-6'
          bgColor='bg-white'
          extraClass='form-control-md'
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
