import React from 'react';
import Input from '../FormElements/Input';
import FileUploader from '../FormElements/FileUploader';
import Button from '../FormElements/Button';

export default function AddNewProduct() {
  return (
    <form action='' className='w-100p'>
      <div className='row gutter-md'>
        <Input
          type='text'
          label='Name of the product'
          name='pName'
          id='pName'
          isRequired={true}
          placeholder='Ex: Rwandan Coffee'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Product details'
          name='pDetails'
          id='pDetails'
          isRequired={true}
          placeholder='Ex: The best coffee on the market'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Product price'
          name='price'
          id='price'
          isRequired={true}
          placeholder='Ex: RWF 7,000'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Product brand'
          name='pBrand'
          id='pBrand'
          isRequired={true}
          placeholder='Ex: The best brand'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Product unit-count'
          name='pUnit'
          id='pUnit'
          isRequired={true}
          placeholder='Ex: 400 mg'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Product unit-count'
          name='pUnit'
          id='pUnit'
          isRequired={true}
          placeholder='Ex: 400 mg'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Product height'
          name='pHeight'
          id='pHeight'
          isRequired={true}
          placeholder='Ex: 100 mm'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <FileUploader
          label='Upload picture'
          name='file'
          id='file'
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
