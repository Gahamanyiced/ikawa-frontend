import React, { useState, useEffect } from 'react';
import Input from '../FormElements/Input';
import FileUploader from '../FormElements/FileUploader';
import Textarea from '../FormElements/Textarea';
import Button from '../FormElements/Button';
import { addArticle, updateArticle } from '../services/ArticlesDataService';

export default function AddNewArticle({ articleData }) {
  const [articleId, setArticleId] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [picture, setPicture] = useState('');

  useEffect(() => {

    if (articleData) {
      setArticleId(articleData.article._id || null);
      setTitle(articleData.article.title || '');
      setContent(articleData.article.content || '');
      setAuthor(articleData.article.author || '');
      setPicture(articleData.article.picture || '');
    }
  }, [articleData]);


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (articleId) {
        console.log("update =====")
        const data = await updateArticle({
          title,
          author,
          content,
          picture,
        }, articleId);

        console.log('Article updated:', data);
      } else {
        console.log("only addd =====")
        console.log(content)
        const data = await addArticle({
          title,
          author,
          content,
          picture,
        });

        console.log('New article added:', data);
      }
    } catch (error) {
      console.error('Error adding/updating article:', error);
    }
  };

  return (
    <form  onSubmit={handleSubmit} className='w-100p'>
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
          value={title}
          onChange={(value) => setTitle(value)}
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
          value={author}
          onChange={(value) => setAuthor(value)}
        />

        <FileUploader
          label='Upload picture'
          name='file'
          id='file'
          isRequired={false}
          size='col-12 col-md-6'
          accepted='image/*'
          maxFiles='1'
        />

        <Textarea
          label='Article content'
          name='content'
          id='aContent'
          isRequired={true}
          placeholder='Add contents'
          size='col-12 col-md-12'
          bgColor='bg-white'
          value={content}
          onChange={(value) => setContent(value)}
        />

        <Button
          offset='offset-md-3'
          label={articleId ? 'Update article' : 'Post article'}
          size='col-12 col-md-6'
          marginTop='20'
        />
      </div>
    </form>
  );
}
