import $ from 'jquery';

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos: function() {
    let todos = [];
    try {
      todos = JSON.parse(localStorage.getItem('todos'));
    } catch(e) {
      console.log('Problem with getting todos', e);
    }

    return $.isArray(todos) ? todos : [];
  }
}
