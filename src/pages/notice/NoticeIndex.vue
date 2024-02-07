<template>
  <Container>
    <OuterWrapper>
      <OutlineWrapper>
        <ContentWrapper></ContentWrapper>
      </OutlineWrapper>
    </OuterWrapper>
  </Container>
</template>

<script>
import { defineComponent } from "vue";
import styled from "vue3-styled-components";

const borderRadius = "10px";
export const secondBorderRadius = "20px";

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
const ContentWrapper = styled.div`
  display: flex;
  flex: 7;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #efefef;
  border-radius: ${secondBorderRadius};
  border: 1px solid #c9c9c9;
`;

export default defineComponent({
  components: {
    Container,
    OuterWrapper,
    OutlineWrapper,
    ContentWrapper,
  },
});
</script>
