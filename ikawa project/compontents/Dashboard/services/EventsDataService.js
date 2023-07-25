export const getAllEvents = async () => {
  try {
    
    const response = await fetch('https://ikawa-backend.onrender.com/api/v1/events/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    
    const userData = await response.json();

    return userData;

  } catch (error) {
    console.error(error);
    console.log("error")
  }

};

export const addEvent = async (eventData) => {
  try {
    const response = await fetch('https://ikawa-backend.onrender.com/api/v1/events/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(eventData),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteEvent = async (id) => {

  try {

    const response = await fetch(`https://ikawa-backend.onrender.com/api/v1/events/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    const data = await response.json();

    console.log("event deleted")
    return data;
  } catch (error) {
    console.error(error);
  }
  
};

export const updateEvent = (event, id) => {
  fetch(`https://ikawa-backend.onrender.com/api/v1/events/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(event),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('event updated');
      return data;
    });
};



export const fetchEvent = async (eventId) => {
  try {

    const response = await fetch(`https://ikawa-backend.onrender.com/api/v1/events/${eventId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    const data = await response.json();
    console.log(data)
    
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch event data');
  }
};