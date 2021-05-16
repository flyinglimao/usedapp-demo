import { ChainId, Config, DAppProvider } from '@usedapp/core';
import React from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Balance from './Balance';
import Connect from './Connect';
import Contract from './Contract';

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

function App() {
  return (
    <DAppProvider config={config}>
      <HashRouter>
        <Switch>
          <PageWrapper>
            <Route exact path="/connect" component={Connect} />
            <Route exact path="/balance" component={Balance} />
            <Route exact path="/contract" component={Contract} />
            <Redirect to="/connect" />
          </PageWrapper>
        </Switch>
      </HashRouter>
    </DAppProvider>
  );
}

export default App;
