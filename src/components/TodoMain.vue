<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="completed">
      <div class="view" v-for="(name, index) in list" :key="index">
        <input class="toggle" type="checkbox" :name="name.done" />
        <label>{{ name.name }}</label>
        <button class="destroy" @click="delBtn(name.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("todoList");
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["list"]),
  },
  methods: {
    ...mapActions(["dekTodoList"]),
    delBtn(id) {
      this.dekTodoList(id);
    },
  },
};
</script>
