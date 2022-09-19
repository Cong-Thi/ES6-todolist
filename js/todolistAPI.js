function apiGetTodoList() {
    return axios({
           url: "https://62f50939535c0c50e76847f6.mockapi.io/todolist",
           method: "GET",   
       });
   }

   function apiAddTodo(todo) {
    return axios({
           url: "https://62f50939535c0c50e76847f6.mockapi.io/todolist",
           method: "POST",
           data: todo,
       });
   }

   function apiDeleteTodo(todoID) {
    return axios({
           url: `https://62f50939535c0c50e76847f6.mockapi.io/todolist/${todoID}`,
           method: "DELETE",
       });
   }

   function apiGetTodoById(todoID) {
    return axios({
           url: `https://62f50939535c0c50e76847f6.mockapi.io/todolist/${todoID}`,
           method: "GET",
       });
   }

   function apiUpdateTodo(todoID, todo) {
    return axios({
           url: `https://62f50939535c0c50e76847f6.mockapi.io/todolist/${todoID}`,
           method: "PUT",
           data: todo,
       });
   }