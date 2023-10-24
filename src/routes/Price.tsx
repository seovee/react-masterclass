import styled from "styled-components";
import { fetchCoinTickers } from "../api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

const Loader = styled.span`
  display: block;
  text-align: center;
  font-size: 40px;
  font-weight: 800;
  color: ${(props) => props.theme.accentColor};
`;

const Boxes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 15px 0px;
  gap: 10px;
`;

const Box = styled.div`
  display: block;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 15px;
  padding: 10px 0px;
  height: 60px;
  text-align: center;
  font-size: 1rem;
`;

interface IIPriceData {
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

interface PriceProps {
  coinId: string;
}

// props로 coinId를 받아야함
// useParams로 받으려고 해서 오류난것!

function Price({ coinId }: PriceProps) {
  const { isLoading: priceLoading, data: priceData } = useQuery<IIPriceData>(
    ["price", coinId],
    () => fetchCoinTickers(coinId)
  );

  return (
    <>
      {priceLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <Boxes>
          <Box>
            <span>1 </span>
            <br />
            <span>{priceData?.quotes.USD.volume_24h}</span>
          </Box>
          <Box>
            <span>2 </span>
            <br />
            <span>{priceData?.quotes.USD.percent_change_12h}</span>
          </Box>
          <Box>
            <span>3 </span>
            <br />
            <span>{priceData?.quotes.USD.market_cap}</span>
          </Box>
          <Box>
            <span>4 </span>
            <br />
            <span>{priceData?.quotes.USD.percent_change_30m}</span>
          </Box>
        </Boxes>
      )}
    </>
  );
}

export default Price;
