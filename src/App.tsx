import { Admin, CustomRoutes } from "react-admin";
import { Route, Link } from "react-router-dom";
import { Container } from "@mui/material";

import { dataProvider } from "./dataProvider";
import { Checkout } from "./Checkout";

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={() => <Link to="/checkout">Go to checkout</Link>}
    layout={({ children }) => (
      <Container maxWidth="md" sx={{ p: 1, height: "100vh" }}>
        {children}
      </Container>
    )}
  >
    <CustomRoutes>
      <Route path="/checkout" element={<Checkout />} />
    </CustomRoutes>
  </Admin>
);
