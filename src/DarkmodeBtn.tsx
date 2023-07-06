import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

const CheckboxLabel = styled.label`
  display: block;
  position: relative;
  left: 5px;
`;

const Checkbox = styled.input`
  width: 5rem;
  height: 1rem;
  background: white;
  border-radius: 2rem;
  &::before {
    content: "";
    text-align: center;
    line-height: 50px;
    width: 70px;
    height: 40px;
    display: block;
    position: absolute;
    border-radius: 30px;
    background-color: white;
    box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
    transition: all 0.2s ease-in;
    cursor: pointer;
  }
  &::after {
    content: "";
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
    top: 5px;
    left: 5px;
    border-radius: 50%;
    background: #2f3640;
    transition: all 0.2s ease-in;
    cursor: pointer;
  }
  &:checked {
    &::before {
      background-color: #585d6d;
    }
    &::after {
      background-color: white;
      left: calc(100% - 47.5px);
    }
  }
`;
interface IToggleProps {
  toggleTheme: () => void;
}

function DarkmodeBtn({ toggleTheme }: IToggleProps) {
  return (
    <Container>
      <CheckboxLabel>Dark Mode On/Off</CheckboxLabel>
      <Checkbox type="checkbox" id="toggle" onClick={() => toggleTheme()} />
    </Container>
  );
}

export default DarkmodeBtn;
