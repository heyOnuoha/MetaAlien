import config from '../config.json'
import abi from '../abi.json'

require('dotenv').config();

import { createAlchemyWeb3 }  from '@alch/alchemy-web3'
import ethConverter from 'ethereum-unit-converter'

const web3 = createAlchemyWeb3(process.env.KEY)

export default {
  name: 'app-ethereum',
  data: () => ({
    wallets: [],
    currentWallet: '',
    message: '',
    showMint: false,
    contractData: {}
  }),
  computed: {
    isWalletConnected() {
      return this.wallets.length > 0;
    },

    getCurrentWallet() {
      return this.wallets[0];
    },
  },
  async created() {
    // await this.enableMetaMask();
    await this.getConnectedWallets()
    await this.addWalletListener()
    await this.makeChecks()
  },
  methods: {
    enableMetaMask() {
      if (window.ethereum) {
        window.ethereum.enable();
      } else {
        // The user doesn't have Metamask installed.
      }
    },

    async makeChecks() {
    },

    async getTotalSupply() {

      return new web3.eth.Contract(abi, config.contract).methods.totalSupply().call()
    },

    async getMaxSupply() {

      return new web3.eth.Contract(abi, config.contract).methods.maxSupply().call()
    },

    async getCost() {

      return new web3.eth.Contract(abi, config.contract).methods.cost().call()
    },

    async checkIsWhitelisted() {

      const wallets = await window.ethereum.request({
        method: 'eth_accounts',
      })

      return new web3.eth.Contract(abi, config.contract).methods['iswhitelisted(address)'](wallets[0]).call()
    },

    async checkBalance() {

      const wallets = await window.ethereum.request({
        method: 'eth_accounts',
      })

      return new web3.eth.Contract(abi, config.contract).methods['balanceOf(address)'](wallets[0]).call()
    },

    async checkWhitelistEnabled() {

      return new web3.eth.Contract(abi, config.contract).methods['onlyWhitelisted']().call()
    },

    async checkIsPaused() {

      return new web3.eth.Contract(abi, config.contract).methods['paused']().call()
    },

    async checkRevealed() {

      return new web3.eth.Contract(abi, config.contract).methods['revealed']().call()
    },

    async checkMaxMintAmount() {

      return new web3.eth.Contract(abi, config.contract).methods['maxMintAmount']().call()
    },

    async checkMaxMintAmountPerAddress() {

      return new web3.eth.Contract(abi, config.contract).methods['nftPerAddressLimit']().call()
    },

    async connectToWallet() {

      if (window.ethereum) {
        try {
          this.wallets = await window.ethereum.request({
            method: 'eth_requestAccounts',
          });

          this.message = 'Wallet connected';
        } catch (e) {
          this.message = e.message;
        }
      } else {
        this.message = 'Please Install MetaMask from https://metamask.io';
        alert(this.message);
      }
    },

    async mint(amount, cost) {

      const wallets = await window.ethereum.request({
        method: 'eth_accounts',
      })

      return new web3.eth.Contract(abi, config.contract).methods['mint(uint256)'](amount).send({ from: wallets[0], value: ethConverter(cost, 'ether').wei })
    },

    async getConnectedWallets() {
      if (window.ethereum) {
        try {
          this.wallets = await window.ethereum.request({
            method: 'eth_accounts',
          });

          this.message = 'Wallet connected';
        } catch (e) {
          this.message = e.message;
        }
      } else {
        this.message = 'Please Install MetaMask from https://metamask.io';
        alert(this.message);
      }
    },

    addWalletListener() {
      if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts) => {
          if (accounts.length > 0) {
            this.wallets = accounts;
          } else {
            this.message = 'Please connect to MetaMask';
          }
        });
      }
    },
  },
};
