import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        totalSupply: 0,
        maxSupply: 0,
        maxMintPerNFT: 0,
        maxMint: 0,
        gasPrice: 0,
        isWhitelistEnabled: false,
        cost: 0,
        isPaused: false,
        isRevealed: false,
        currentWallet: ''
    },

    mutations: {

        SET_TOTAL_SUPPLY(state, payload) {
            state.totalSupply = payload
        },

        SET_MAX_SUPPLY(state, payload) {
            state.maxSupply = payload
        },

        SET_IS_WHITELISTED(state, payload) {
            state.isWhitelistEnabled = payload
        },

        SET_COST(state, payload) {
            state.cost = payload
        },

        SET_IS_PAUSED(state, payload) {
            state.isPaused = payload
        },

        SET_IS_REVEALED(state, payload) {
            state.isRevealed = payload
        },

        SET_MAX_MINT_PER_NFT(state, payload) {
            state.maxMintPerNFT = payload
        },

        SET_MAX_MINT(state, payload) {
            state.maxMint = payload
        },

        SET_GAS_PRICE(state, payload) {
            state.gasPrice = payload
        }
    },

    actions: {

        setTotalSupply(context, payload) {

            context.commit('SET_TOTAL_SUPPLY', payload)
        },

        setMaxSupply(context, payload) {

            context.commit('SET_MAX_SUPPLY', payload)
        },

        setIsWhitelisted(context, payload) {

            context.commit('SET_IS_WHITELISTED', payload)
        },

        setCost(context, payload) {

            context.commit('SET_COST', payload)
        },

        setIsPaused(context, payload) {

            context.commit('SET_IS_PAUSED', payload)
        },

        setIsRevealed(context, payload) {

            context.commit('SET_IS_REVEALED', payload)
        },

        setMaxMintPerNFT(context, payload) {

            context.commit('SET_MAX_MINT_PER_NFT', payload)
        },

        setMaxMint(context, payload) {

            context.commit('SET_MAX_MINT', payload)
        },

        setGasPrice(context, payload) {

            context.commit('SET_GAS_PRICE', payload)
        }

    },

    getters: {
        TotalSupply: (state) => state.totalSupply,
        MaxSupply: (state) => state.maxSupply,
        IsWhitelistEnabled: (state) => state.isWhitelistEnabled,
        Cost: (state) => state.cost,
        IsPaused: (state) => state.isPaused,
        IsRevealed: (state) => state.isRevealed,
        MaxMintPerNFT: (state) => state.maxMintPerNFT,
        MaxMint: (state) => state.maxMint,
        GasPrice: (state) => state.gasPrice
    }
})