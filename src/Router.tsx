import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

interface IRouterProps {
  toggleTheme: () => void;
  isDark: boolean;
}

function Router({ toggleTheme, isDark }: IRouterProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/:coinId">
          <Coin isDark={isDark} />
        </Route>
        <Route path="/">
          <Coins toggleTheme={toggleTheme} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
