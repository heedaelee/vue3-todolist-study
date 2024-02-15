<template>
  <Wrapper>
    <Title>㉧ㅕ행フト고 싶⊂ト</Title>
    <SettingWrapper>
      <SettingText>홈설정</SettingText>
      <UrlText>http://www.cyworld.com/test1234</UrlText>
    </SettingWrapper>
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GlobalStyles } from "@/styles/globalStyles";
import styled from "vue3-styled-components";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;
const Title = styled.div`
  font-size: 20px;
  color: ${() => GlobalStyles.Colors.teal};
  font-family: ${() => GlobalStyles.fontFamilyType.default};
`;
const SettingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const SettingText = styled.div`
  font-size: 15px;
  color: ${() => GlobalStyles.Colors.orange};
  font-family: ${() => GlobalStyles.fontFamilyType.default};
`;
const UrlText = styled.div`
  font-size: 12px;
  color: #676565
  font-family: ${() => GlobalStyles.fontFamilyType.default};
`;

export default defineComponent({
  components: { Wrapper, Title, SettingWrapper, SettingText, UrlText },
});
</script>

<style></style>
