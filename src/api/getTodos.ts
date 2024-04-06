export const getTodosFromServer = async () => {
  try {
    const request = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    );
    const todos = await request.json();
    return { todos };
  } catch (error) {
    throw new Error('Failed to fetch todos');
  }
};
