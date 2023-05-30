import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius:20px;
}
50% {
  transform: rotate(180deg);
  border-radius:100px;
}
0% {
  transform: rotate(360deg);
  border-radius:20px;
}
`;

const Emoji = styled.span`
  font-size: 70px;
  transition: all 1s;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 3s linear infinite;
  transition: all 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}:hover {
    font-size: 130px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🤩</Emoji>
      </Box>
      <Emoji>🔥</Emoji>
    </Wrapper>
  );
}

export default App;
