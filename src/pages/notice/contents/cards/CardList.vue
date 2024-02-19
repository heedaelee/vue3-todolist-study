<template>
  <Wrapper v-for="(data, index) in notices" :key="data.id">
    <HeaderWrapper>
      <IdLabelText>NO.</IdLabelText>
      <IdText>{{ data.id }}</IdText>
      <NameText>{{ data.name }}</NameText>
      <RegDateText>{{ data.regData }}</RegDateText>
    </HeaderWrapper>
    <BottomWrapper>
      <MinimiWrapper>
        <MinimiImage src="/assets/minimi.png" />
      </MinimiWrapper>
      <WriteWrapper>
        <BodyText>
          {{ data.content }}
        </BodyText>
      </WriteWrapper>
    </BottomWrapper>
  </Wrapper>
</template>

<script lang="ts">
import { GlobalStyles } from "@/styles/globalStyles";
import { defineComponent, PropType } from "vue";
import styled from "vue3-styled-components";
import { MinimiWrapper, MinimiImage } from "./minimi";
import { INotice } from "@/types/types";

const Wrapper = styled.div`
  /* NOTE: auto */
  flex: none
  width: 100%;
  height: 169px;
`;
const HeaderWrapper = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color: ${() => GlobalStyles.Colors.backGround};
  border-top: 1px solid ${() => GlobalStyles.Colors.lightGray};
`;
const IdLabelText = styled.div`
  color: ${() => GlobalStyles.Colors.darkGray};
  font-family: ${() => GlobalStyles.fontFamilyType.default};
  font-size: 13px;
`;
const IdText = styled.div`
  color: ${() => GlobalStyles.Colors.darkGray2};
  font-family: ${() => GlobalStyles.fontFamilyType.default};
  font-size: 13px;
  margin-left: 2px;
`;
const NameText = styled.div`
  color: ${() => GlobalStyles.Colors.teal};
  font-family: ${() => GlobalStyles.fontFamilyType.default};
  font-size: 14px;
  margin-left: 10px;
`;
const RegDateText = styled.div`
  color: ${() => GlobalStyles.Colors.darkGray};
  font-family: ${() => GlobalStyles.fontFamilyType.default};
  font-size: 12px;
  margin-left: 10px;
`;
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80%;
`;
const WriteWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px 5px;
  /* background-color: red; */
`;
const BodyText = styled.div`
  color: ${() => GlobalStyles.Colors.darkGray};
  /* font-family: ${() => GlobalStyles.fontFamilyType.default}; */
  font-size: 14px;
`;

export default defineComponent({
  components: {
    Wrapper,
    HeaderWrapper,
    BottomWrapper,
    IdLabelText,
    IdText,
    NameText,
    RegDateText,
    MinimiWrapper,
    MinimiImage,
    WriteWrapper,
    BodyText,
  },
  props: {
    notices: Array as PropType<INotice[]>,
  },

  setup() {
    return {};
  },
});
</script>

<style></style>
