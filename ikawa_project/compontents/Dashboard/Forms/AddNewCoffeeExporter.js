import React from 'react';
import Input from '../FormElements/Input';
import Button from '../FormElements/Button';

export default function AddNewCoffeeExporter() {
  return (
    <form action='' className='w-100p'>
      <div className='row gutter-md'>
        <Input
          type='text'
          label='Exporter name'
          name='exName'
          id='exName'
          isRequired={true}
          placeholder='Ex: John Doe'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Owner name'
          name='owName'
          id='owName'
          isRequired={true}
          placeholder='Ex: David Munyakazi'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Address'
          name='exAddress'
          id='exAddress'
          isRequired={true}
          placeholder='Ex: Kigali, Rwanda'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Phone'
          name='exPhone'
          id='exPhone'
          isRequired={true}
          placeholder='Ex: +250 788 263 325'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='email'
          label='Email'
          name='exEmail'
          id='exEmail'
          isRequired={true}
          placeholder='Ex: someone@example.com'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Button
          offset='offset-md-3'
          label='Upload exporter'
          size='col-12 col-md-6'
          marginTop='20'
        />
      </div>
    </form>
  );
}
