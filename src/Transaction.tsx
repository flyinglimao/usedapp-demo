import { Contract } from '@ethersproject/contracts';
import { ChainId, getExplorerTransactionLink, useContractFunction, useEthers } from '@usedapp/core';
import styled from 'styled-components';

const abiJSON = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
];
const usdcContract = new Contract('0xe22da380ee6b445bb8273c81944adeb6e8450422', abiJSON);

const A = styled.a`
    text-decoration: none;
    color: hsl(323, 65%, 50%);
    ::after {
        content: ' ';
    }
`;
const StyledButton = styled.button`
    display: block;
    margin: 0 auto;
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

export default function Transaction() {
    const { activateBrowserWallet, account } = useEthers();
    const { send, state } = useContractFunction(usdcContract, 'transfer');
    function shortenTransactionHash(hash: string) {
        return hash.substr(0, 6) + '...' + hash.substr(-4)
    }
    return (
        <div>
            { state.status === 'None' && <></> }
            { state.status === 'Exception' && <h1>交易失敗，參數不正確或取消交易</h1> }
            { state.status === 'Mining' && 
                <h1>交易進行中<br />
                    <A href={getExplorerTransactionLink(state.transaction.hash, ChainId.Kovan)}>
                        { shortenTransactionHash(state.transaction.hash) }
                    </A>
                </h1>
            }
            { state.status === 'Success' &&
                <h1>交易成功<br />
                    <A href={getExplorerTransactionLink(state.transaction.hash, ChainId.Kovan)}>
                        { shortenTransactionHash(state.transaction.hash) }
                    </A>
                    位於 { state.receipt.blockNumber }
                </h1>
            }
            { state.status === 'Fail' &&
                <h1>交易失敗<br />
                    <A href={getExplorerTransactionLink(state.transaction.hash, ChainId.Kovan)}>
                        { shortenTransactionHash(state.transaction.hash) } 
                    </A>
                    位於 { state.receipt.blockNumber }
                </h1>
            }
            { account ?
                <StyledButton onClick={() => send('0x000000000000000000000000000000000000dead', '1000000')}>燒毀 1 USDC</StyledButton>:
                <StyledButton onClick={() => activateBrowserWallet()}>連接錢包</StyledButton>
            }
        </div>
    );
}