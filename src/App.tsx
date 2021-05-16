import { ChainId, Config, DAppProvider } from '@usedapp/core';
import React from 'react';
import { Switch, Route, HashRouter, Redirect, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Balance from './Balance';
import Connect from './Connect';
import Contract from './Contract';
import Transaction from './Transaction';

const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

const config: Config = {
  readOnlyChainId: ChainId.Kovan,
  readOnlyUrls: {
    [ChainId.Kovan]: 'https://kovan.infura.io/v3/1b4fd85ec53748feae973ece5bc436bd',
  },
}

const activeClassName = 'ACTIVE';
const Nav = styled.div`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: hsl(323, 65%, 90%);
  display: flex;
  padding: .3rem .3rem;
  border-radius: 12px;
`;
const StyledNavLink = styled(NavLink).attrs({ activeClassName })<{ isActive?: boolean }>`
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  color: black;
  padding: .3rem .6rem;

  &.${activeClassName} {
    border-radius: 12px;
    background-color: hsl(323, 95%, 80%);
    color: white;
  }
`;

function App() {
  return (
    <DAppProvider config={config}>
      <HashRouter>
        <Nav>
          <StyledNavLink to="/connect">連接</StyledNavLink>
          <StyledNavLink to="/balance">餘額</StyledNavLink>
          <StyledNavLink to="/contract">合約</StyledNavLink>
          <StyledNavLink to="/transaction">交易</StyledNavLink>
        </Nav>
        <Switch>
          <PageWrapper>
            <Route exact path="/connect" component={Connect} />
            <Route exact path="/balance" component={Balance} />
            <Route exact path="/contract" component={Contract} />
            <Route exact path="/transaction" component={Transaction} />
            <Redirect to="/connect" />
          </PageWrapper>
        </Switch>
      </HashRouter>
    </DAppProvider>
  );
}

export default App;
