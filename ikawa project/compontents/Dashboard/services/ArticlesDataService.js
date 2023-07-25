export const getAllArticles = async () => {
  try {
    
    const response = await fetch('https://ikawa-backend.onrender.com/api/v1/articles/', {
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
  }

};


export const addArticle = async (articleData) => {
  console.log("claled")
  console.log(articleData)
  try {
    const response = await fetch('https://ikawa-backend.onrender.com/api/v1/articles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(articleData),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteArticle = async (id) => {

  try {

    const response = await fetch(`https://ikawa-backend.onrender.com/api/v1/articles/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
  
};
export const updateArticle = (article, id) => {
  console.log(`Updating article ${article}`);
  fetch(`https://ikawa-backend.onrender.com/api/v1/articles/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(article),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};



export const fetchArticle = async (articleId) => {
  try {

    const response = await fetch(`https://ikawa-backend.onrender.com/api/v1/articles/${articleId}`, {
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
    throw new Error('Failed to fetch article data');
  }
};