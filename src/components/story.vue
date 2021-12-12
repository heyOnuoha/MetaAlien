
<template>
    <div id="specs" class="bg-dark-gray wf-section">
        <div class="w-layout-grid inner-full-width-grid padding-bottom-medium newp2 early-sketch">
            <div id="box-o" class="inner-half">
                <div><img src="../assets/images/mas.png" loading="lazy" srcset="../assets/images/mas.png"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 91vw, (max-width: 991px) 93vw, (max-width: 1000px) 100vw, 1000px"
                        alt="" class="full-image device sketch1"></div>
            </div>
            <div id="w-node-_0e4cd495-9219-962c-dcaa-5ee57a00ea83-718776cd" class="half-container reverse">
                <div class="content-wrap inner-padding-small">
                    <h2 class="heading-large _20-ch margin-bottom-xsmall mbl">Our Story</h2>
                    <div class="paragraph-wrapper margin-bottom-small">
                        <p class="main-paragraph lower2">The year is 2021. The Metaverse has just been unvieled and
                            humanity has
                            adopted NFTs into their lives and identities. For a small golden age humanity
                            prospered and began to unite under one banner within the digital paradise
                            they had built.<br>
                            <br>However, humanity's peace was short lived. Rogue Humans, corrupted with greed,
                            have begun stealing, scamming, and rugpulling the citizens of the Metaverse.<br>
                            <br>In humanity's time of need, we the Meta Aliens appeared. Original protectors of
                            the Metaverse, we have been summoned to combine our colony's strength and
                            knowledge to war on Rogue Humans and their corruption.<br>
                            <br>We are coming...are you ready for salvation?</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container hmpg3 w-container">
            <div class="w-layout-grid main-grid inner-padding-medium newp1 mbl">
                <div id="w-node-_134870ee-edd3-fbad-5f79-fb2b4cd7c662-718776cd" class="stats-wrapper">
                    <h3 class="value">{{ MaxSupply.toLocaleString() }}</h3>
                    <p class="p-small-size text-white-opacity">{{ MaxSupply.toLocaleString() }} random Meta Aliens NFTs</p>
                </div>
                <div id="w-node-_134870ee-edd3-fbad-5f79-fb2b4cd7c667-718776cd" class="stats-wrapper">
                    <h3 class="value">{{ Cost }}ETH</h3>
                    <p class="p-small-size text-white-opacity">Fair Launch and distribution - all aliens have the same
                        cost of {{ Cost }} ETH Pre-sale price</p>
                </div>
                <div id="w-node-_134870ee-edd3-fbad-5f79-fb2b4cd7c66c-718776cd" class="stats-wrapper">
                    <h3 class="value">©</h3>
                    <p class="p-small-size text-white-opacity">Includes creative and commercial rights usage of your
                        alien for as long as you keep the NFT</p>
                </div>
                <div id="w-node-_134870ee-edd3-fbad-5f79-fb2b4cd7c671-718776cd" class="stats-wrapper">
                    <h3 class="value">100%</h3>
                    <p class="p-small-size text-white-opacity">Unlock additional benefits through roadmap activations
                        and future phases</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    
    name: 'app-story',
    computed: {
        ...mapGetters(['Cost', 'MaxSupply'])
    },
    mounted() {


    }

}

</script>