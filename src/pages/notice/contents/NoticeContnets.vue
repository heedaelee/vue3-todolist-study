<template>
  <Wrapper>
    <Title />
    <ContentsWrapper />
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import styled from "vue3-styled-components";
import { ProfileWrapper } from "@/pages/notice/profile/NoticeProfile.vue";
import Title from "./components/Title.vue";
import ContentsWrapper from "./components/Contents.vue";

const Wrapper = styled(ProfileWrapper)`
  flex: 7;
  background-color: #f6f2f2;
`;

export default defineComponent({
  components: { Wrapper, Title, ContentsWrapper },
});
</script>

<style></style>
