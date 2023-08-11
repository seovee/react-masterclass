import styled from "styled-components";
import { animate, AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 900;
  font-style: italic;
  margin-bottom: 30px;
  color: orange;
  display: flex;
  flex-direction: row;
  gap: 10px;
  p {
    color: white;
  }
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const Box = styled(motion.div)`
  height: 200px;
  width: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
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
  background-color: orange;
  font-size: 18px;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const hoverEffect = {
  hover: (i: string) => ({
    scale: 1.2,
    opacity: 0.7,
    x: i === "1" || i === "3" ? -20 : i === "2" || i === "4" ? 20 : 0,
    y: i === "1" || i === "2" ? -20 : i === "3" || i === "4" ? 20 : 0,
  }),
};

const overlayEffect = {
  ini: {
    zIndex: -1,
    opacity: 0,
  },
  mid: {
    opacity: 1,
    zIndex: 10,
  },
  fin: {
    zIndex: -1,
    opacity: 0,
  },
};

function App() {
  const [id, setId] = React.useState<null | string>(null);
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
      <AnimatePresence>
        <Title>
          Sunny <p>side up</p>
        </Title>
        <Board>
          {["1", "2", "3", "4"].map((i) => (
            <Box
              key={i}
              custom={i}
              variants={hoverEffect}
              whileHover="hover"
              transition={{ type: "linear" }}
              onClick={() => setId(i)}
              layoutId={i}
            >
              <AnimatePresence>
                {i === clicked ? <Circle layoutId="circle" /> : null}
              </AnimatePresence>
            </Box>
          ))}
        </Board>
        <Switch onClick={toggleSwitch}>Switch</Switch>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            variants={overlayEffect}
            initial="ini"
            animate="mid"
            exit="fin"
          >
            <Box
              layoutId={id}
              style={{
                width: 500,
                height: 300,
                fontSize: 50,
                fontWeight: 800,
                color: "orange",
              }}
            >
              {id}번 상자입니다.
            </Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
export default App;
