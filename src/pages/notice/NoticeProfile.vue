<template>
  <ProfileWrapper>
    <CounterWrapper>
      <!-- TODO:추후 컴포넌트 분리 시작-->
      <FontComponentVue fontSize="14px" color="#3E3E3E">TODAY</FontComponentVue>
      <FontComponentVue fontSize="14px" color="#890026">12</FontComponentVue>
      <FontComponentVue
        fontSize="14px"
        color="#3E3E3E"
        :additionalStyles="{ margin: '0px 5px' }"
      >
        |
      </FontComponentVue>
      <FontComponentVue fontSize="14px" color="#3E3E3E">TOTAL</FontComponentVue>
      <FontComponentVue fontSize="14px" color="#3E3E3E">1488</FontComponentVue>
      <!-- 추후 컴포넌트 분리-->
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
</template>

<script>
import FontComponentVue from "@/components/atoms/FontComponent.vue";
import styled from "vue3-styled-components";
import { GlobalStyles } from "@/styles/globalStyles";

const ProfileWrapper = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white;
  border-radius: ${GlobalStyles.secondBorderRadius};
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
  border-radius: ${GlobalStyles.secondBorderRadius};
  border: 1px solid #c9c9c9;
`;
export default {
  components: {
    ProfileWrapper,
    CounterWrapper,
    ProfileBox,
    FontComponentVue,
  },
};
</script>

<style></style>
