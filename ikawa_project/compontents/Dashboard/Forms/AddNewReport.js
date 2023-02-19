import React from 'react';
import Input from '../FormElements/Input';
import Button from '../FormElements/Button';

export default function AddNewReport() {
  return (
    <form action='' className='w-100p'>
      <div className='row gutter-md'>
        <Input
          type='text'
          label='Report name'
          name='rName'
          id='rName'
          isRequired={true}
          placeholder='Ex: Rwandan coffee'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Report source'
          name='rSource'
          id='rSource'
          isRequired={true}
          placeholder='Ex: John Doe'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Report summary'
          name='rSummary'
          id='rSummary'
          isRequired={true}
          placeholder='Ex: Add summary'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Report link'
          name='rLink'
          id='rLink'
          isRequired={true}
          placeholder='Ex: Add Link'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Button
          offset='offset-md-3'
          label='Upload report'
          size='col-12 col-md-6'
          marginTop='20'
        />
      </div>
    </form>
  );
}
