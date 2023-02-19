import React from 'react';
import Input from '../FormElements/Input';
import FileUploader from '../FormElements/FileUploader';
import Textarea from '../FormElements/Textarea';
import Button from '../FormElements/Button';

export default function AddNewArticle() {
  return (
    <form action='' className='w-100p'>
      <div className='row gutter-md'>
        <Input
          type='text'
          label='Title of the article'
          name='articleTitle'
          id='articleTitle'
          isRequired={true}
          placeholder='Ex: Coffee is awesome'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Author'
          name='author'
          id='author'
          isRequired={true}
          placeholder='Ex: John Doe'
          size='col-12 col-md-6'
          bgColor='bg-white'
        />

        <Input
          type='text'
          label='Date uploaded'
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
          accepted='image/*'
          maxFiles='1'
        />

        <Textarea
          label='Article content'
          name='aContent'
          id='aContent'
          isRequired={true}
          placeholder='Add contents'
          size='col-12 col-md-12'
          bgColor='bg-white'
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
