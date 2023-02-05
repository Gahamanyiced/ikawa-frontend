export const getUserData = async () => {
  try {
    
    const response = await fetch('https://ikawa-backend.onrender.com/api/v1/auth/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    
    const userData = await response.json();
    // console.log("user data called ------------------------------")
    // console.log(userData);

    return userData;

  } catch (error) {
    console.error(error);
  }

};
