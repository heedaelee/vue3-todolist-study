<template>
  <h1>To-Do Page</h1>
  <TodoForm :editing="true" />
</template>

<script>
import TodoForm from "@/components/TodoForm.vue";
import { useToast } from "@/composables/toast";
import _ from "lodash";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

export default {
  components: {
    TodoForm,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const todo = ref(null);
    const originalTodo = ref(null);
    const loading = ref(true);
    const { toastMessage, toastAlertType, showToast, triggerToast } = useToast();

    const todoId = route.params.id;

    const getTodo = async () => {
      try {
        const res = await axios.get(`
              http://localhost:3000/todos/${todoId}
            `);

        todo.value = { ...res.data };
        originalTodo.value = { ...res.data };

        loading.value = false;
      } catch (error) {
        console.log(error);
        triggerToast("Something went wrong", "danger");
      }
    };

    const todoUpdated = computed(() => {
      return !_.isEqual(todo.value, originalTodo.value);
    });

    const toggleTodoStatus = () => {
      todo.value.completed = !todo.value.completed;
    };

    const moveToTodoListPage = () => {
      router.push({
        name: "Todos",
      });
    };

    getTodo();

    const onSave = async () => {
      try {
        const res = await axios.put(
          `
              http://localhost:3000/todos/${todoId}
            `,
          {
            subject: todo.value.subject,
            completed: todo.value.completed,
          }
        );

        originalTodo.value = { ...res.data };
        triggerToast("Successfully saved!");
      } catch (error) {
        console.log(error);
        triggerToast("Something went wrong", "danger");
      }
    };

    return {
      todo,
      loading,
      toggleTodoStatus,
      moveToTodoListPage,
      onSave,
      todoUpdated,
      showToast,
      toastMessage,
      toastAlertType,
    };
  },
};
</script>

<style></style>
