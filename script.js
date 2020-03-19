var vm = new Vue({
    el: ".container",
    data: {
        todoId: 0,
        todos: []
    },
    methods: {
        addTodo: function() {
            var todoInput = document.querySelector(".inputText")
            var todoText = todoInput.value
            if (!todoText) return
            this.todos.push({ text: todoText, todoId: this.todoId++ })
            todoInput.value = ""
        },
        removeTodos: function(index) {
            this.todos.splice(index, 1)
        }
    }
})
