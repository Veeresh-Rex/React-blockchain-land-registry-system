import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import { loadContract } from '../Utils/load-contract';

export const LoadContracts = async () => {
     const provider = await detectEthereumProvider();
     const contracts = await loadContract('Land', provider);
     if (provider) {
          return {
               provider,
               web3: new Web3(provider),
               contracts,
          };
     } else {
          return {
               provider,
               web3: null,
               contracts: null,
          };
     }
};
