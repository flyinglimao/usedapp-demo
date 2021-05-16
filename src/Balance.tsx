import { useEtherBalance, useEthers, useTokenBalance } from "@usedapp/core";
import { formatEther, formatUnits } from '@ethersproject/units';

export default function Balance() {
    const { account } = useEthers();
    const ethBalance = useEtherBalance(account);
    const usdcBalance = useTokenBalance('0xe22da380ee6b445bb8273c81944adeb6e8450422', account);

    return (
        account ?
            <div>
                <h1>Ethers: { ethBalance ? formatEther(ethBalance) : 0 }</h1>
                <h1>USDC: { usdcBalance ? formatUnits(usdcBalance, 6) : 0 }</h1>
            </div>:
            <h1>Not Connect Yet</h1>
    );
}