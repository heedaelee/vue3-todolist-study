<template>
  <ContentsWrapper>
    <WriteCardWrapper>
      <TextWrapper>
        <ArrowText>▶</ArrowText>
        <IntroText>방명록을 남겨보세요 :)</IntroText>
      </TextWrapper>
      <WriteCard />
    </WriteCardWrapper>
    <CardList :notices="notices" />
    <!-- 페이지네이션 -->
    <nav>
      <ul class="pagination">
        <li class="page-item">
          <a
            style="cursor: pointer"
            class="page-link"
            @click="getNotices(currentPage - 1)"
          >
            &lt;
          </a>
        </li>
        <li v-for="page in numberOfPages" :key="page" class="page-item">
          <a
            style="cursor: pointer"
            class="page-link"
            :class="currentPage === page ? 'active-custom' : ''"
            @click="getNotices(page)"
            >{{ page }}</a
          >
        </li>
        <li class="page-item">
          <a
            style="cursor: pointer"
            class="page-link"
            @click="getNotices(currentPage + 1)"
          >
            &gt;
          </a>
        </li>
      </ul>
    </nav>
  </ContentsWrapper>
</template>

<script lang="ts">
import { useToast } from "@/composables/toast";
import { GlobalStyles } from "@/styles/globalStyles";
import { INotice } from "@/types/types";
import axios from "axios";
import { computed, defineComponent, ref } from "vue";
import styled from "vue3-styled-components";
import CardList from "../cards/CardList.vue";
import WriteCard from "../cards/WriteCard.vue";

const ContentsWrapper = styled.div`
  flex: 9;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  background-color: white;
  border-radius: ${() => GlobalStyles.secondBorderRadius};
  border: 1px solid #c9c9c9;
  padding: 30px 20px 30px 40px;
  gap: 20px;
  overflow-y: auto;
  /* background-color: red; */
`;
const WriteCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  gap: 5px;
  margin-bottom: 10px;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;
export const IntroText = styled.div`
  color: ${() => GlobalStyles.Colors.darkGray};
  font-family: ${() => GlobalStyles.fontFamilyType.default};
  font-size: 16px;
`;
const ArrowText = styled(IntroText)`
  color: ${() => GlobalStyles.Colors.teal};
`;

export default defineComponent({
  components: {
    ContentsWrapper,
    WriteCard,
    WriteCardWrapper,
    TextWrapper,
    IntroText,
    ArrowText,
    CardList,
  },

  setup() {
    const numberOfNotices = ref(0);
    let limit = 5;
    const currentPage = ref(1);
    const notices = ref([]);
    const error = ref("");
    const numberOfPages = computed(() => {
      return Math.ceil(numberOfNotices.value / limit);
    });

    const { toastMessage, toastAlertType, showToast, triggerToast } = useToast();

    const getNotices = async (page = currentPage.value) => {
      currentPage.value = page;
      try {
        const res = await axios.get(
          `http://localhost:3000/notices?_sort=id&_order=desc&_page=${page}&_limit=${limit}`
        );
        numberOfNotices.value = res.headers["x-total-count"];
        notices.value = res.data;
      } catch (err) {
        console.log(err);
        error.value = "Something went wrong.";
        triggerToast("Something went wrong", "danger");
      }
    };

    getNotices();

    const addNotice = async (notice: INotice) => {
      // 데이터베이스에 방명록 저장
      error.value = "";
      try {
        await axios.post("http://localhost:3000/notices", {
          name: notice.name,
          content: notice.content,
        });

        getNotices(1);
      } catch (err) {
        console.log(err);
        error.value = "Something went wrong.";
        triggerToast("Something went wrong", "danger");
      }
    };

    return {
      getNotices,
      addNotice,
      notices,
      numberOfPages,
      currentPage,
      error,
      toastMessage,
      toastAlertType,
      showToast,
      triggerToast,
    };
  },
});
</script>

<style>
.page-link {
  background-color: none;
  border: none;
  color: darkgray;
  font-size: 14px;
}
.active-custom {
  background-color: none;
  color: #007bff;
}
</style>
