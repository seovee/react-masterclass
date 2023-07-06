import styled from "styled-components";
import { fetchCoinTickers } from "../api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

const Boxes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 15px 0px;
  gap: 10px;
`;

const Box = styled.div`
  display: block;
  background-color: ${(props) => props.theme.boxColor};
  padding: 10px 0px;
  height: 60px;
  text-align: center;
  font-size: 1rem;
`;

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price() {
  const { coinId } = useParams<RouteParams>();
  const { data: tickersData } = useQuery<IPriceData>(["tickers", coinId], () =>
    fetchCoinTickers(coinId)
  );

  return (
    <>
      <Boxes>
        <Box>
          <span>Price:</span>
          <span>
            <span></span>
            여기가 안되는데, <br></br>이거는 좀 고민을 해봐야겠습니다
          </span>
        </Box>
        <Box>
          <span>Price:</span>
          <span>
            여기가 안되는데, <br></br>이거는 좀 고민을 해봐야겠습니다
          </span>
        </Box>
        <Box>
          <span>Price:</span>
          <span>
            여기가 안되는데, <br></br>이거는 좀 고민을 해봐야겠습니다
          </span>
        </Box>
        <Box>
          <span>Price:</span>
          <span>
            여기가 안되는데, <br></br>이거는 좀 고민을 해봐야겠습니다
          </span>
        </Box>
      </Boxes>
    </>
  );
}

export default Price;
