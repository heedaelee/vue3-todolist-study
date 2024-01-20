<template>
  <div
    v-for="(todo, index) in todos"
    :key="todo.id"
    class="card mt-2"
  >
    <div class="card-body p-2 d-flex align-items-center">
      <div class="form-check flex-grow-1">
        <input
          class="form-check-input"
          type="checkbox"
          :checked="todo.completed"
          @change="toggleTodo(index)"
        />
        <label
          class="form-check-label"
          :class="{ todo: todo.completed }"
        >
          {{ todo.subject }}
        </label>
      </div>
      <button
        class="btn btn-danger btn-sm"
        @click="deleteTodo(index)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  emits: ["toggle-todo", "delete-todo"],
  setup(props, { emit }) {
    const toggleTodo = (index) => {
      /**
       * 키: "toggle-todo", param: index인 리스너를
       * 부모에게 내보내겠다는 뜻임.
       * 즉 부모는 toggle-todo 이벤트를 받으면(= 부모는 함수를 만들어 걸어준다)
       * index를 param으로 받는다.
       * */
      emit("toggle-todo", index);
    };

    const deleteTodo = (index) => {
      emit("delete-todo", index);
    };

    return {
      toggleTodo,
      deleteTodo,
    };
  },
};
</script>

<style></style>
