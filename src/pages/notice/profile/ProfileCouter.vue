<template>
  <CounterWrapper>
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
</template>

<script lang="ts">
import FontComponentVue from "@/components/atoms/FontComponent.vue";
import styled from "vue3-styled-components";

const CounterWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  gap: 3px;
`;

export default {
  components: { CounterWrapper, FontComponentVue },
};
</script>

<style></style>
