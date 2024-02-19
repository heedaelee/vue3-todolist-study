<template>
  <Wrapper>
    <Title />
    <Contents />
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import styled from "vue3-styled-components";
import { ProfileWrapper } from "@/pages/notice/profile/NoticeProfile.vue";
import Title from "./components/Title.vue";
import Contents from "./components/Contents.vue";
import { GlobalStyles } from "@/styles/globalStyles";

const Wrapper = styled(ProfileWrapper)`
  flex: 7;
  background-color: ${() => GlobalStyles.Colors.backGround};
`;

export default defineComponent({
  components: { Wrapper, Title, Contents },
});
</script>

<style></style>
