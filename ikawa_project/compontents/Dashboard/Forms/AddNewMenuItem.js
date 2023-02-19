import React from 'react';
import Input from '../FormElements/Input';
import FileUploader from '../FormElements/FileUploader';
import Button from '../FormElements/Button';

export default function AddNewMenuItem() {
  return (
    <form action='' className='w-100p'>
      <div className='row gutter-md'>
        <Input
          type='text'
          label='Item name'
          name='iName'
          id='iName'
          isRequired={true}
          placeholder='Ex: Rwandan Coffee'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Item type'
          name=''
          id=''
          isRequired={true}
          placeholder='Ex: Rwandan coffee'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Item details'
          name=''
          id=''
          isRequired={true}
          placeholder='Ex: Add details'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Item price'
          name='iPrice'
          id='iPrice'
          isRequired={true}
          placeholder='Ex: RWF 7,000'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <FileUploader
          label='Upload images (Maximum 6 images)'
          name='iFile'
          id='iFile'
          isRequired={true}
          size='col-12 col-md-6'
          maxFiles='4'
          accepted='image/*'
        />

        <Input
          type='text'
          label='Product unit-count'
          name='iUnit'
          id='iUnit'
          isRequired={true}
          placeholder='Ex: Add unit-count'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Product weight'
          name='iWeight'
          id='iWeight'
          isRequired={true}
          placeholder='Ex: 400 mg'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <FileUploader
          label='Upload images (Maximum 4 images)'
          name='iFile2'
          id='iFile2'
          isRequired={true}
          size='col-12 col-md-6'
          maxFiles='4'
          accepted='image/*'
        />

        <Button
          offset='offset-md-3'
          label='Post article'
          size='col-12 col-md-6'
          marginTop='20'
        />
      </div>
    </form>
  );
}
