import React from 'react';
import Input from '../FormElements/Input';
import FileUploader from '../FormElements/FileUploader';
import Button from '../FormElements/Button';

export default function AddNewAnnouncement() {
  return (
    <form action='' className='w-100p'>
      <div className='row gutter-md'>
        <Input
          type='text'
          label='Announcement title'
          name='AnnTitle'
          id='AnnTitle'
          isRequired={true}
          placeholder='Add title'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Announcement Details'
          name='annDetails'
          id='annDetails'
          isRequired={true}
          placeholder='Add details'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Announcement Date'
          name='annDate'
          id='annDate'
          isRequired={true}
          placeholder='Ex: 17/07/2021'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Button
          offset='offset-md-3'
          label='Post announcement'
          size='col-12 col-md-6'
          marginTop='20'
        />
      </div>
    </form>
  );
}
