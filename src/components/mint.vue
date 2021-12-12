<template>


    <div id="specs" class="bg-dark-gray wf-section" style="display: flex; justify-content: center; align-content: space-between; height: 100vh; overflow-y: scroll;">
    
        <div class="flavr-outer flipInX _animated">
            <div class="flavr-content" style="text-align: center; margin: 20px;">
                <h1 class="flavr-title">Mint Meta Alient NFT</h1>
                <li class="image-frame" style="max-width: 500px; width: 44vw">
                    <img
                    src="../assets/images/t1.jpeg"
                    alt=""
                    class="imgok"
                    style="border-radius: 5em"
                    width="100"
                    height="100"
                    id="banner-img"
                    />
                </li>
                <div class="flavr-message">
                    <p class="about-para mb-3">Take back the universe</p>
                    <p class="about-para mb-3">Join the Aliens</p>
                    <p class="about-para mb-2">You may mint <span class="color-pink">up to 4 Meta Alien NFT</span> per wallet
                    </p>
                    <div style="padding: 20px; margin:20px;">{{ mintValue }}</div>
                    <form class="flavr-form form-html">
                        <vue-slider v-model="mintValue" :max=4 />
                    </form>
                </div>
            </div>
            <div style="margin: 20px;" :disabled="mintValue===0">
                <a
                  class="button color-blue opensea w-inline-block"
                  style=""
                >
                  <div>Mint {{ mintValue }} Aliens</div>
                </a>
              </div>
            <div class="progress" style="text-align: center; margin: 20px;">
                <div class="current_minting">Minting Progress [<span class="current-minted">167</span> / <span
                        class="total-supply">5555</span>] <i class="percent val mint_progeress_pencent">1.67%</i></div>
                <div class="progress-bar-wrap">
                    <div class="progressbar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                        style="width: 1.67%;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

    export default {

        name: 'app-mint',
        components: {
            VueSlider
        },
        data: () => ({
            mintValue: 1
        })

    }
</script>