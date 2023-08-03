import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Board = styled.div`
  display: flex;
  gap: 10px;
`;

const Box = styled(motion.div)`
  height: 200px;
  width: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: orange;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Switch = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState("2");
  const toggleSwitch = () => {
    if (clicked === "2") {
      return setClicked((prev) => "3");
    }
    if (clicked === "3") {
      return setClicked((prev) => "2");
    }
  };
  return (
    <Wrapper>
      <Board>
        {["1", "2", "3", "4"].map((i) => (
          <Box key={i}>
            <AnimatePresence>
              {i === clicked ? <Circle layoutId="circle" /> : null}
            </AnimatePresence>
          </Box>
        ))}
      </Board>
      <Switch onClick={toggleSwitch}>Switch</Switch>
    </Wrapper>
  );
}

export default App;
