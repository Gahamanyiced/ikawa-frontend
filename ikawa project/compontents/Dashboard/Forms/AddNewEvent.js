import React, { useState, useEffect } from 'react';
import Input from '../FormElements/Input';
import FileUploader from '../FormElements/FileUploader';
import Button from '../FormElements/Button';
import { addEvent, updateEvent } from '../services/EventsDataService'; 

export default function AddNewEvent({ eventData }) {
  const [eventId, setEventId] = useState(null);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');

  useEffect(() => {

    if (eventData) {
      setEventId(eventData.event._id || null);
      setName(eventData.event.name || '');
      setDate(eventData.event.date ? formatDate(eventData.event.date) : '');
      setDetails(eventData.event.details || '');
    }
  }, [eventData]);

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toISOString().split('T')[0];
    return formattedDate;
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (eventId) {

        const data = await updateEvent({
          name,
          date,
          details,
        }, eventId);

        console.log('Event updated:', data);
      } else {
        // If eventId doesn't exist, it means we are adding a new event
        console.log(name, date, details)
        const data = await addEvent({
          name,
          date,
          details,
        });
        
        console.log('New event added:', data);
      }
    } catch (error) {
      console.error('Error adding/updating event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-100p'>
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
          value={name}
          onChange={(value) => setName(value)}
        />

        <Input
          type='date'
          label='Date of the event'
          name='date'
          id='date'
          isRequired={true}
          placeholder='Ex: 07/09/2021'
          size='col-12 col-md-6'
          bgColor='bg-white'
          value={date}
          onChange={(value) => setDate(value)}
        />

        <FileUploader
          label='Upload picture'
          name='file'
          id='file'
          isRequired={false}
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
          value={details}
          onChange={(value) => setDetails(value)}
        />

        <Button
          offset='offset-md-3'
          label={eventId ? 'Update event' : 'Post event'}
          size='col-12 col-md-6'
          marginTop='20'
          type='submit'
        />
      </div>
    </form>
  );
}
