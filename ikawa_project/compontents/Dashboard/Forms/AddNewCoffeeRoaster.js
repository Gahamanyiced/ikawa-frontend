import React from 'react';
import Input from '../FormElements/Input';
import Button from '../FormElements/Button';

export default function AddNewCoffeeRoaster() {
  return (
    <form action='' className='w-100p'>
      <div className='row gutter-md'>
        <Input
          type='text'
          label='Roaster name'
          name='roName'
          id='roName'
          isRequired={true}
          placeholder='Ex: Roaster name'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Owner name'
          name='oName'
          id='oName'
          isRequired={true}
          placeholder='Ex: John Doe'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Address'
          name='address'
          id='address'
          isRequired={true}
          placeholder='Ex: Kigali, Rwanda'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Phone'
          name='phone'
          id='phone'
          isRequired={true}
          placeholder='Ex: +250 788 263 325'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='email'
          label='Email'
          name='email'
          id='email'
          isRequired={true}
          placeholder='Ex: someone@example.com'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Button
          offset='offset-md-3'
          label='Upload roaster'
          size='col-12 col-md-6'
          marginTop='20'
        />
      </div>
    </form>
  );
}
