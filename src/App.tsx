import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const Box = styled(motion.div)`
  height: 200px;
  width: 200px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: blue;
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

function App() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState(false);
  return (
    <Wrapper>
      <Grid>
        <AnimatePresence>
          {["1", "2", "3", "4"].map((n) => (
            <Box
              whileHover="hover"
              onClick={() => setId(n)}
              key={n}
              layoutId={n}
            ></Box>
          ))}
        </AnimatePresence>
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Box layoutId={id} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
