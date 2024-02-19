<template>
  <Wrapper>
    <MinimiWrapper>
      <MinimiImage src="/assets/minimi.png" />
      <MinimiChangeText>미니미 바꾸기 ↻</MinimiChangeText>
    </MinimiWrapper>
    <WriteWrapper>
      <TextArea v-model="message" placeholder="방명록을 남겨주세요" />
      <WriteButton>등록</WriteButton>
    </WriteWrapper>
  </Wrapper>
</template>

<script lang="ts">
import { GlobalStyles } from "@/styles/globalStyles";
import { defineComponent } from "vue";
import styled from "vue3-styled-components";
import { MinimiWrapper, MinimiImage } from "./minimi";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${() => GlobalStyles.Colors.lightGray};
  background-color: ${() => GlobalStyles.Colors.backGround};
  height: 150px;
`;
const MinimiChangeText = styled.div`
  color: ${() => GlobalStyles.Colors.darkGray};
  font-family: ${() => GlobalStyles.fontFamilyType.default};
  font-size: 14px;
`;
const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 70%;
  height: 100%;
  padding: 10px 20px 5px;
`;

const TextArea = styled.textarea`
  /* background-color: red; */
  width: 100%;
  height: 100%;
  border: 1px solid ${() => GlobalStyles.Colors.lightGray};
  padding: 10px;
  resize: none;
  font-family: ${() => GlobalStyles.fontFamilyType.default};
  line-height: 1.2;
  font-size: 16px;
  white-space: pre-wrap;
`;

const WriteButton = styled.button`
  width: 50px;
  height: 30px;
  background-color: white;
  color: ${() => GlobalStyles.Colors.darkGray};
  border: 1px solid ${() => GlobalStyles.Colors.lightGray};
  border-radius: "5px";
  font-family: ${() => GlobalStyles.fontFamilyType.default};
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: ${() => GlobalStyles.Colors.gray};
  }
`;

export default defineComponent({
  components: {
    Wrapper,
    MinimiWrapper,
    MinimiImage,
    MinimiChangeText,
    WriteWrapper,
    TextArea,
    WriteButton,
  },
});
</script>

<style></style>
