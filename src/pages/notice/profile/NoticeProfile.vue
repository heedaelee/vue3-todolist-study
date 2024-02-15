<template>
  <ProfileWrapper>
    <ProfileCouter />
    <ProfileBox>
      <ProfileUpper />
      <ProfileLower />
    </ProfileBox>
  </ProfileWrapper>
</template>

<script lang="ts">
import styled from "vue3-styled-components";
import { GlobalStyles } from "@/styles/globalStyles";
import ProfileUpper from "./ProfileUpper.vue";
import ProfileLower from "./ProfileLower.vue";
import ProfileCouter from "./ProfileCouter.vue";

export const ProfileWrapper = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white;
  border-radius: ${() => GlobalStyles.secondBorderRadius};
  border: 1px solid #c9c9c9;
  padding: 7px;
`;

const ProfileBox = styled.div`
  flex: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  border-radius: ${() => GlobalStyles.secondBorderRadius};
  border: 1px solid #c9c9c9;
  padding: 20px 30px;
`;
export default {
  components: {
    ProfileWrapper,
    ProfileBox,
    ProfileUpper,
    ProfileLower,
    ProfileCouter,
  },
};
</script>

<style></style>
