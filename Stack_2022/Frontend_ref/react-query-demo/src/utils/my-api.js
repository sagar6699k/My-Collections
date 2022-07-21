export const getTodos = () => {
  fetch("http://localhost:4000/Todo").then((res) =>
    res.json()
  );
};

export const postTodo = () => {
  fetch("http://localhost:4000/Todo").then((res) =>
    res.json()
  );
};
