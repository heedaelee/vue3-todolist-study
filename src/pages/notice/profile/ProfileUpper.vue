<template>
  <Wrapper>
    <Photo src="/assets/ProfileImg.png" alt="프로필 사진" />
    <TodayWrapper>
      <TodayFont> TODAY IS ... </TodayFont>
      <ImojiFont>⛄️</ImojiFont>
      <TodayLastFont>행 복 </TodayLastFont>
    </TodayWrapper>
    <ContentWrapper>○ビㄴત્રુṑㅏㅅㅔ요<br />방명록 좀 남겨㈜バㅔ요~!!</ContentWrapper>
  </Wrapper>
</template>

<script>
import styled from "vue3-styled-components";
import { GlobalStyles } from "@/styles/globalStyles";
import FontComponentVue from "@/components/atoms/FontComponent.vue";

const Wrapper = styled.div`
  display: flex;
  flex: 6.5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 200px;
  gap: 10px;
`;
const Photo = styled.img`
  flex: 5;
  width: inherit;
`;
const TodayWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${GlobalStyles.Colors.gray};
  margin: 10px 0;
`;
const ContentWrapper = styled.div`
  flex: 4;
  width: 100%;
  font-size: 16px;
  font-family: ${GlobalStyles.fontFamilyType.default};
`;
const TodayFont = styled.div`
  font-size: 14px;
  color: ${GlobalStyles.Colors.teal};
  font-weight: bold;
  font-family: ${GlobalStyles.fontFamilyType.default};
`;
const ImojiFont = styled(TodayFont)`
  font-size: 14px;
  margin: 0 5px;
`;
const TodayLastFont = styled(TodayFont)`
  font-size: 14px;
  color: black;
`;

export default {
  components: {
    Wrapper,
    Photo,
    TodayWrapper,
    ContentWrapper,
    TodayFont,
    ImojiFont,
    TodayLastFont,
  },
};
</script>

<style></style>
