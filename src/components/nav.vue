<template>
  <nav class="wrappernav">

    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      class="navbar w-nav"
    >
      <div class="w-layout-grid navgrid">
        <a
          href="/"
          id="w-node-b2052354-5446-da9c-e906-f9d98118b8b1-8118b8ae"
          aria-current="page"
          class="w-nav-brand w--current"
          ><img
            src="../assets/images/logo.png"
            loading="lazy"
            sizes="(max-width: 579px) 100vw, 361.890625px"
            srcset="../assets/images/logo.png"
            alt=""
            class="image-brand"
            style="
              /* transform: scale(1); */ /* padding: 0.2em; */
              margin-top: 1.6em;
            "
        /></a>
        <nav
          role="navigation"
          id="w-node-b2052354-5446-da9c-e906-f9d98118b8b3-8118b8ae"
          class="nav-menu w-nav-menu"
        >
          <div class="main-navbar">
            <a
              href="/"
              aria-current="page"
              class="nav-link w-nav-link w--current"
              >Home</a
            >
            <a href="#roadmap" class="nav-link w-nav-link">Roadmap</a>
            <a href="#team" class="nav-link w-nav-link">Team</a>
          </div>
          <div class="buttons-nav-wrapper">
            <div class="w-layout-grid grid-buttons">

              <a @click="$eth.connectToWallet()" v-if="!$eth.getCurrentWallet"
                 class="button color-blue opensea w-inline-block ahov"
                 style=""
              >
                <div>Connect Wallet</div>
              </a>


              <a @click="toggleMint" v-else
                 class="button color-blue opensea w-inline-block ahov"
                 style=""
              >
                <div>{{ $eth.showMint ? 'Go Back': 'Mint Now' }}</div>
              </a>

            </div>
          </div>
        </nav>
        <div
          id="w-node-b2052354-5446-da9c-e906-f9d98118b8c9-8118b8ae"
          data-w-id="b2052354-5446-da9c-e906-f9d98118b8c9"
          class="menu-button w-nav-button"
        >
          <div class="w-layout-grid grid-buttons">



            <a @click="$eth.connectToWallet()" v-if="!$eth.getCurrentWallet"
               class="button color-blue opensea w-inline-block"
               style=""
            >
              <div>Connect Wallet</div>
            </a>


            <a @click="toggleMint" v-else
               class="button color-blue opensea w-inline-block"
               style=""
            >
              <div>{{ $eth.showMint ? 'Cancel Mint': 'Mint Now' }}</div>
            </a>

          </div>
        </div>
      </div>
    </div>
    <div style="padding: 1em; margin: 1em; background: indianred; border-radius: 1em; word-wrap: break-word" v-if="!$eth.onMainNet">
      <h6 class="flavr-title">PLEASE SWITCH TO THE ETHEREUM MAINNET</h6>
    </div>
  </nav>
</template>

<script>
require('dotenv').config();
//const alchemyKey = process.env.APP_ALCHEMY_KEY;
//const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
//const web3 = createAlchemyWeb3(alchemyKey);


export default {
  name: 'app-nav',
  components: {

  },
  mounted() {
    console.log(this.$eth)
  },
  methods: {

    toggleMint() {

      this.$eth.showMint = !this.$eth.showMint
    }
  }
};
</script>
