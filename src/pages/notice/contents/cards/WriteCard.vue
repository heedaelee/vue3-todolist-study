<template>
  <Wrapper>
    <TextWrapper>
      <ArrowText>▶</ArrowText>
      <IntroText>방명록을 남겨보세요 :)</IntroText>
    </TextWrapper>
    <WriteCard> </WriteCard>
  </Wrapper>
</template>

<script lang="ts">
import { GlobalStyles } from "@/styles/globalStyles";
import { defineComponent } from "vue";
import styled from "vue3-styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background-color: yellow;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

const IntroText = styled.div`
  color: ${() => GlobalStyles.Colors.darkGray};
  font-family: ${() => GlobalStyles.fontFamilyType.default};
  font-size: 16px;
`;

const ArrowText = styled(IntroText)`
  color: ${() => GlobalStyles.Colors.teal};
`;

const WriteCard = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${() => GlobalStyles.Colors.lightGray};
  background-color: #f6f2f2;
  height: 100%;
`;
export default defineComponent({
  components: {
    Wrapper,
    TextWrapper,
    IntroText,
    ArrowText,
    WriteCard,
  },
});
</script>

<style></style>
