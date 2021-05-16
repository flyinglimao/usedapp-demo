import { useEthers } from '@usedapp/core';
import { useEffect } from 'react';
import styled from 'styled-components';

const ConnectButton = styled.button`
    border: none;
    background-color: hsl(323, 95%, 80%);
    border-radius: 12px;
    font-size: 1.2rem;
    padding: .5rem 1rem;
    color: white;
    font-weight: 500;
    :hover,
    :focus {
        outline: 1px solid hsl(323, 95%, 40%);
    }
`;

export default function Connect() {
    const { activateBrowserWallet, account, error } = useEthers();
    useEffect(() => {
        error && alert(error);
    }, [error]);
    return account ?
        <h1>{ account }</h1> :
        <ConnectButton onClick={() => activateBrowserWallet()}>Connect To Wallet</ConnectButton>;
}