import styled from "styled-components";

export const MyButton = styled.button`
  padding: 7px 7px;
  border: 2px solid #fffcfc;
  background-color: #006eff;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.4s ease;
  outline: none;
  position: relative;
  overflow: hidden;
  font-weight: bold;
  width: 640px;

  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    transform: scale(0);
    transition: transform 0.5s ease;
  }

  &:hover::after{
    transform: scale(4);
  }

  &:hover{
    border-color: #ffffff;
    background:#0e2d5d;
  }
`;