import { Interface } from '@ethersproject/abi';
import { formatUnits } from '@ethersproject/units';
import { useContractCall, useContractCalls, useEthers } from '@usedapp/core';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const abiJSON = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
];
const abi: Interface = new Interface(abiJSON);

const Input = styled.input`
    border: none;
    font-size: inherit;
`;

export default function Contract() {
    const { account } = useEthers();
    const [ address, setAddress ] = useState('0xe22da380ee6b445bb8273c81944adeb6e8450422');
    const tokenBalance = useContractCall({
        abi,
        address,
        method: 'balanceOf',
        args: [account || '0x0000000000000000000000000000000000000000'],
    });
    const [ tokenName, tokenDecimals ] = useContractCalls([
        {
            abi,
            address,
            method: 'name',
            args: [],
        },
        {
          abi,
          address,
          method: 'decimals',
          args: [],
        },
    ]);
    return (
        <div>
            <h1>
                代幣地址：
                <Input
                    type="text"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setAddress(event.currentTarget.value)}
                    value={address}
                />
            </h1>
            <h1>代幣名稱：{ tokenName }</h1>
            { tokenBalance && <h1>代幣餘額：{ formatUnits(tokenBalance[0], tokenDecimals) }</h1> }
        </div>
    );
}