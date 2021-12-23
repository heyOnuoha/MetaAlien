<template>
    <div class="section mblnew2 wf-section">

        <div class="w-layout-grid hero-grid-header">

            <div
                    id="box-l"
                    class="overflow-wrapper"
                    style="align-self: start; margin-top: 5em"
            >
                <div
                        class="hero-rail gap mbl"
                        style="display: flex; justify-content: center; align-items: center"
                >
                    <li class="image-frame" style="max-width: 500px; width: 44vw">
                        <img
                                src="../assets/images/RM1.png"
                                loading="lazy"
                                alt=""
                                class="imgok"
                                style="border-radius: 5em"
                                id="banner-img"
                        />
                    </li>
                </div>
            </div>
            <div
                    id="w-node-_60837eb3-9bf5-14c7-3965-db787b15f714-718776cd"
                    class="wrapper-container"
            >
                <div class="container w-container">
                    <div class="w-layout-grid main-grid">
                        <div
                                id="w-node-_60837eb3-9bf5-14c7-3965-db787b15f717-718776cd"
                                class="paragraph-wrapper inner-padding-medium"
                        >
                            <div class="flavr-outer flipInX _animated">
                                <div class="flavr-content" style="text-align: center; margin: 20px;">
                                    <div style="padding: 1em; margin: 1em; background: indianred; border-radius: 1em; word-wrap: break-word" v-if="error.length">
                                        <h4 class="flavr-title">{{ error }}</h4>
                                    </div>
                                    <h1 class="flavr-title">Mint Meta Alien NFT</h1>
                                    <div class="flavr-message">
                                        <p class="about-para mb-3">Take back the universe</p>
                                        <p class="about-para mb-3">Join the Aliens</p>
                                        <p class="about-para mb-2">You may mint <span class="color-pink">up to {{ MaxMintPerNFT }} Meta Alien NFT</span> per wallet
                                        </p>
                                        <div style="padding: 20px; margin:20px; font-size: 2em">{{ mintValue }}</div>
                                        <form class="flavr-form form-html">
                                            <vue-slider v-model="mintValue" :max=Number(MaxMint) :min=1 :dotSize=40 />
                                        </form>
                                    </div>
                                </div>
                                <div style="margin: 20px;" :disabled="mintValue===0" class="ahov" @click="mintNFT">
                                    <a
                                            class="button color-blue opensea w-inline-block"
                                            style=""
                                    >
                                        <div>Mint {{ mintValue }} Aliens (<span style="font-weight: bolder">{{getTotalCost}} ETH</span>)</div>
                                    </a>
                                </div>
<!--                                <div class="progress" style="text-align: center; margin: 20px;">-->
<!--                                    <div class="current_minting">Minting Progress [<span class="current-minted">{{ TotalSupply }}</span> / <span-->
<!--                                            class="total-supply">{{ MaxSupply }}</span>] <i class="percent val mint_progeress_pencent">{{ map(TotalSupply, 0, MaxSupply, 0, 100) }}%</i></div>-->
<!--                                    <div class="progress-bar-wrap">-->
<!--                                        <div class="progressbar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"-->
<!--                                             style="width: 1.67%;"></div>-->
<!--                                    </div>-->
<!--                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'
    import {mapGetters} from "vuex";

    export default {
        name: 'app-minter',
        components: {
            VueSlider
        },
        data: () => ({
            mintValue: 1,
            error: '',
        }),
        mounted() {
            console.log(this.$eth)
        },
        computed: {
            ...mapGetters(['Cost', 'MaxSupply', 'TotalSupply', 'IsWhitelistEnabled', 'MaxMintPerNFT', 'MaxMint', 'GasPrice']),
            getTotalCost: function() {

                return this.$store.getters.Cost * this.mintValue
            }
        },
        methods: {


            map: function (current, in_min, in_max, out_min, out_max) {
                return Math.round((current - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
            },

            async mintNFT() {

                if(this.$eth.showMint) {

                    const isWhitelisted = await this.$eth.checkIsWhitelisted()
                    const checkBalance = await this.$eth.checkBalance()

                    if(this.IsWhitelistEnabled && !isWhitelisted) {

                        this.error = 'You are not whitelisted'

                        return
                    }

                    console.log('asfddsfafd', this.MaxMintPerNFT)

                    if(Number(checkBalance) >= Number(this.MaxMintPerNFT)) {

                        this.error = 'Sorry, Max amount minted'

                        return
                    }

                    this.$eth.mint(Number(this.mintValue), this.Cost, this.GasPrice).then((res) => {

                        console.log(res)

                        this.error = 'Minting....'

                        setTimeout(() => this.error = 'Minted, Please check OpenSea', 1000)
                    })
                    .catch(() => {

                        this.error = 'Mint Failed'
                    })
                }

            }
        }
    };
</script>
