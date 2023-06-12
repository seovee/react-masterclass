import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import DarkmodeBtn from "../DarkmodeBtn";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ConinsList = styled.ul``;
const Coin = styled.li`
  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 18px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface ICoinsProps {
  toggleTheme: () => void;
}

function Coins({ toggleTheme }: ICoinsProps) {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100));
  //     setLoading(false);
  //   })();
  // }, []);

  return (
    <Container>
      <Header>
        <Title>Coin</Title>
        <DarkmodeBtn toggleTheme={toggleTheme} />
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <ConinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt="/"
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </ConinsList>
      )}
    </Container>
  );
}
export default Coins;
