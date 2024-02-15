<template>
  <ContentsWrapper>
    <WriteCard />
  </ContentsWrapper>
</template>

<script lang="ts">
import { GlobalStyles } from "@/styles/globalStyles";
import { defineComponent } from "vue";
import styled from "vue3-styled-components";
import WriteCard from "../cards/WriteCard.vue";

const ContentsWrapper = styled.div`
  flex: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  border-radius: ${() => GlobalStyles.secondBorderRadius};
  border: 1px solid #c9c9c9;
  padding: 30px 20px 30px 40px;
`;
export default defineComponent({
  components: { ContentsWrapper, WriteCard },
});
</script>

<style></style>
