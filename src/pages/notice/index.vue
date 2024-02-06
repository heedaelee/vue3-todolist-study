<template>
  <h1>Notice</h1>
  <div class="row">
    <div class="col-12">
      <div v-for="(item, index) in notices" :key="item.id" class="card mt-2">
        <div class="card-body p-2 d-flex align-items-center">
          <div class="form-check flex-grow-1">
            <label class="form-check-label"> {{ item.subject }} {{ item.name }} </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <form @submit.prevent="onSave">
    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <label>Subject</label>
          <input v-model="notice.subject" type="text" class="form-control" />
        </div>
      </div>
      <div v-if="editing" class="col-6">
        <div class="form-group">
          <label>Status</label>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <label>컨텐츠</label>
          <textarea
            v-model="notice.content"
            class="form-control"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">전송</button>
  </form> -->
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { ref, computed } from "vue";
import _ from "lodash";
import Toast from "@/components/Toast.vue";
import { useToast } from "@/composables/toast";

export default {
  setup() {
    const notices = ref([]);
    const getNotices = async () => {
      try {
        const response = await axios.get("http://localhost:3000/notice");
        notices.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };
    getNotices();
    return {
      notices,
    };
  },
};
</script>

<style></style>
