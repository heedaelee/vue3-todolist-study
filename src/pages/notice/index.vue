<template>
  <Container>
    <OuterWrapper>
      <OutlineWrapper>
        <ProfileWrapper>
          <CounterWrapper>
            <FontComponentVue fontSize="14px" color="#3E3E3E">TODAY</FontComponentVue>
            <FontComponentVue fontSize="14px" color="#890026">12</FontComponentVue>
            <FontComponentVue
              fontSize="14px"
              color="#3E3E3E"
              :additionalStyles="{ margin: '0px 5px' }"
              >|</FontComponentVue
            >
            <FontComponentVue fontSize="14px" color="#3E3E3E">TOTAL</FontComponentVue>
            <FontComponentVue fontSize="14px" color="#3E3E3E">1488</FontComponentVue>
          </CounterWrapper>
          <ProfileBox>
            <!-- <ProfileImage></ProfileImage>
            <ProfileName></ProfileName>
            <ProfileEmail></ProfileEmail>
            <ProfilePhone></ProfilePhone>
            <ProfileAddress></ProfileAddress>
            <ProfileCompany></ProfileCompany> -->
          </ProfileBox>
        </ProfileWrapper>
        <ContentWrapper></ContentWrapper>
      </OutlineWrapper>
    </OuterWrapper>
  </Container>
</template>

<script>
import FontComponentVue from "@/components/atoms/FontComponent.vue";
import { defineComponent } from "vue";
import styled from "vue3-styled-components";

const borderRadius = "10px";
const secondBorderRadius = "20px";

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
const ProfileWrapper = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white;
  border-radius: ${secondBorderRadius};
  border: 1px solid #c9c9c9;
  padding: 7px;
`;
const CounterWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  gap: 3px;
`;
const ProfileBox = styled.div`
  flex: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f5f5f5;
  border-radius: ${secondBorderRadius};
  border: 1px solid #c9c9c9;
`;

export default defineComponent({
  components: {
    FontComponentVue,
    Container,
    OuterWrapper,
    OutlineWrapper,
    ProfileWrapper,
    ContentWrapper,
    CounterWrapper,
    ProfileBox,
  },
});
</script>
