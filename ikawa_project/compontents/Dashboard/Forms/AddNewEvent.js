import React from 'react';
import Input from '../FormElements/Input';
import FileUploader from '../FormElements/FileUploader';
import Button from '../FormElements/Button';

export default function AddNewEvent() {
  return (
    <form action='' className='w-100p'>
      <div className='row gutter-md'>
        <Input
          type='text'
          label='Name of the event'
          name='eventName'
          id='eventName'
          isRequired={true}
          placeholder='Ex: Coffee event'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Date of the event'
          name='date'
          id='date'
          isRequired={true}
          placeholder='Ex: 07/09/2021'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <FileUploader
          label='Upload picture'
          name='file'
          id='file'
          isRequired={true}
          size='col-12 col-md-6'
          maxFiles='1'
          accepted='image/*'
        />

        <Input
          type='text'
          label='Event details'
          name='details'
          id='details'
          isRequired={true}
          placeholder='About the event'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Button
          offset='offset-md-3'
          label='Post event'
          size='col-12 col-md-6'
          marginTop='20'
        />
      </div>
    </form>
  );
}
