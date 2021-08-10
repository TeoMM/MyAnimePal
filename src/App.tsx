import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import React from "react";
import Search from "./components/Search";
import Toplist from "./components/Toplist";
import styled from "@emotion/styled";

function App() {
  return (
    <PageWrapper>
      <Router>
        <Navbar />
        <ContentWrapper>
          <Switch>
            <Route path="/toplist">
              <Toplist />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ContentWrapper>
      </Router>
    </PageWrapper>
  );
}
const ContentWrapper = styled.div`
  border-radius: 0.5rem;
  margin: 1rem 2rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #adc3fadf;
`;
const PageWrapper = styled.div`
  min-width: 280px;
`;
export default App;
