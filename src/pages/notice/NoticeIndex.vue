<template>
  <Container>
    <OuterWrapper>
      <OutlineWrapper>
        <!-- 좌측 프로필 -->
        <NoticeProfile />
        <!-- 우측 컨텐츠 -->
        <NoticeContnets />
      </OutlineWrapper>
    </OuterWrapper>
  </Container>
</template>

<script>
import { defineComponent } from "vue";
import styled from "vue3-styled-components";
import NoticeProfile from "@/pages/notice/profile/NoticeProfile.vue";
import NoticeContnets from "./contents/NoticeContnets.vue";

export const borderRadius = "10px";
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 800px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;
const OuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 950px;
  height: 700px;
  background-color: #59b0d8;
  border-radius: ${borderRadius};
  border: 1px solid black;
`;
const OutlineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 95%;
  padding: 5px;
  border: 1px dashed white;
  border-radius: ${borderRadius};
`;

export default defineComponent({
  components: {
    Container,
    OuterWrapper,
    OutlineWrapper,
    NoticeProfile,
    NoticeContnets,
  },
});
</script>
