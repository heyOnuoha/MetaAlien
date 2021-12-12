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
              :src="getImgUrl(bannerImg)"
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
              <h1 class="heading-xlarge hero">The Aliens Are Coming</h1>
              <p class="paragraph-2">
                Meta Aliens is a collection of 5,555 unique, randomly generated
                aliens roaming on the Ethereum blockchain as ERC-721 NFTs.<br /><strong></strong>
              </p>
              <div class="hero-cta-wrapper">
                <div
                  class="w-layout-grid grid-buttons inner-padding-micro newbl2"
                >
                  <a
                    href="https://twitter.com/MetaAliensNFT"
                    class="button color-red opensea w-inline-block"
                    style="color: black; font-weight: 600"
                  >
                    <div>Our Twitter</div>
                    <img
                      src="https://global-uploads.webflow.com/6117f5b431e8c219e118dc3a/6117f5b431e8c242b718dcab_cta-arrow-white.svg"
                      loading="lazy"
                      alt=""
                      class="icon-arrow"
                    /> </a
                  ><a
                    href="https://discord.com/invite/vUBAWawY2A"
                    target="_blank"
                    class="button color-blue opensea w-inline-block"
                    style=""
                  >
                    <div>Join The Discord</div>
                    <img
                      src="https://global-uploads.webflow.com/6117f5b431e8c219e118dc3a/6117f5b431e8c242b718dcab_cta-arrow-white.svg"
                      loading="lazy"
                      alt=""
                      class="icon-arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-banner',

  data: () => ({
    bannerImg: '1',
  }),
  methods: {
    getImgUrl(pic) {
      return require(`../assets/images/t${pic}.jpeg`);
    },
  },
  mounted() {
    const bannerImages = ['1', '2', '3', '4', '5', '6', '7', '8'];
    let counter = 0;
    const speed = 400;

    setInterval(() => {
      this.bannerImg = bannerImages[counter];

      if (counter >= bannerImages.length - 1) {
        counter = 0;
      } else {
        counter++;
      }
    }, speed);
  },
};
</script>
