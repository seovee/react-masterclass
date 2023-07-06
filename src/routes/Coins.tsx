import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

const Container = styled.div`
  padding: 0px 10px;
  max-width: 400px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ConinsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Coin = styled.li`
  display: block;
  background-color: ${(props) => props.theme.boxColor};
  box-shadow: 1px 1px ${(props) => props.theme.shadowColor};
  width: 120px;
  height: 120px;
  color: ${(props) => props.theme.textColor};
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  transition: all 0.15s ease-in;
  a {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 10px;
  }
  &:hover {
    transform: scale(110%);
    font-weight: 700;
    font-size: 0.9rem;
    img {
      transform: rotate(360deg);
    }
  }
`;
const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-align: center;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  margin: 0 auto;
  transition: all 0.5s ease-in;
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

function Coins() {
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
        <Title>All Coin</Title>
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
                {coin.name}
              </Link>
            </Coin>
          ))}
        </ConinsList>
      )}
    </Container>
  );
}
export default Coins;
