export const getUsersFromServer = async () => {
  try {
    const request = await fetch('https://jsonplaceholder.typicode.com/users');
    return await request.json();
  } catch (error) {
    console.error('Users Error, try now!');
  }
};
