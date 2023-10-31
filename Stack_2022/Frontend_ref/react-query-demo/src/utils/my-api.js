export const getTodos = () =>
  fetch("http://localhost:4000/Todo").then((res) => res.json());

export const postTodo = (task) => {
  fetch("http://localhost:4000/Todo", {
    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      title: task
    }),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
