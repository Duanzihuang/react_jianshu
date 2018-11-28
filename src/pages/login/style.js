import styled from "styled-components";

export const LoginWrapper = styled.div`
  // height: 100%;
  min-height: 600px;
  text-align: center;
  font-size: 14px;
  background-color: #f1f1f1;
`;

export const Main = styled.div`
  width: 400px;
  margin: 160px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  display: inline-block;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  margin: 10px auto;
  padding-left: 8px;
`;

export const Button = styled.button`
  background: #3194d0;
  margin: 20px auto;
  width: 300px;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
`;
