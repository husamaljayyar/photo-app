import styled from "styled-components";
import image from "../../Assets/Logo.png";

export const IneerContainer = styled.section``;

export const HeaderPage = styled.header`
  height: 10vh;
  width: auto;
  background: transparent url(${image}) 7% 30% no-repeat padding-box;
  background-color: #FAE5D3;
  background-size: 120px 40px; // 200px => Right and Left & 50px Top and Bottom
`;
export const HeaderInputSearch = styled.input`
  position: absolute;
  right: 20px;
  top: 10px;
  border-radius: 20px;
  border: 1px solid #707070;
  opacity: 1;
  outline: none;
  height: 30px;
  max-height: 15%;

  padding: 0 10px 0 10px; // padding Right
  // used (width with max-width) instead of use Media Query
  width: 300px;
  max-width: 50%;
`;
export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const HeroSection = styled.section``;
export const Title = styled.h1`
  padding: 20px 0 50px 0;
  font: normal normal 500 20px Segoe UI;
`;
export const CardSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
