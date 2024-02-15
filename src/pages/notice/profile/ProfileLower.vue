<template>
  <Wrapper>
    <HistoryWrapper>
      <RightArrow>▶</RightArrow>
      <HistoryText>HISTORY</HistoryText>
    </HistoryWrapper>
    <NameWrapper>
      <NameText>이희대</NameText>
      <BirthText>1988.03.21</BirthText>
    </NameWrapper>
    <EmailText>blabla@gmail.com</EmailText>
    <IlChonButton>
      <div>파도타기</div>
      <div>▼</div>
    </IlChonButton>
  </Wrapper>
</template>

<script>
import styled from "vue3-styled-components";
import { GlobalStyles } from "@/styles/globalStyles";

const Wrapper = styled.div`
  display: flex;
  flex: 3.5;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
`;
const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px
  font-family: ${GlobalStyles.fontFamilyType.default};
  color: #535353;
  width:100%;
  justify-content: flex-start;
  border-bottom: 2.5px solid ${GlobalStyles.Colors.lightGray};
`;

const HistoryText = styled.div``;

const RightArrow = styled.div`
  color: #4d92ac;
`;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${GlobalStyles.fontFamilyType.default};
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;
const NameText = styled.div`
  font-size: 15px;
  color: black;
  font-weight: 100;
`;
const BirthText = styled.div`
  font-size: 16px;
  color: #9b9c9c;
`;
const EmailText = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-size: 17px;
  color: ${GlobalStyles.Colors.orange};
  font-family: ${GlobalStyles.fontFamilyType.default};
`;
const IlChonButton = styled.button`
  width: 100%;
  border: 1px solid ${GlobalStyles.Colors.lightGray};
  display: flex;
  flex-driction: row;
  justify-content: space-between;
  background-color: white;
  font-family: ${GlobalStyles.fontFamilyType.default};
  font-size: 12px;
  margin-top: 30px;
  color: #535353;
  box-shadow: rgba(0, 0, 0, 0.15) 1.45px 1.45px 2.2px;
`;
export default {
  components: {
    Wrapper,
    HistoryWrapper,
    HistoryText,
    RightArrow,
    NameWrapper,
    NameText,
    BirthText,
    EmailText,
    IlChonButton,
  },
};
</script>

<style></style>
