<template>
  <div>
    <a-layout-content style="padding: 0 50px;">
      <a-layout style="padding: 0; margin: 0">
        <carousel-3d :height="640" :width="1920" :space="1280" :controls-visible="true" :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'" :controls-width="30" :controls-height="60" :clickable="false" :autoplay="true" :autoplay-timeout="5000" :perspective="15" style="border-width: 0 !important; margin-top: 0 !important; width: 100%">
          <slide v-for="(slide, i) in carouselImages" :index="i" :key="i">
            <img :src="getWebp(slide)" style="width: 100%; height: auto;">
          </slide>
        </carousel-3d>
        <a-layout-content :style="{ padding: '24px', margin: 0, minHeight: '280px' }">
          <div property="content:encoded" >
            <p>After great success in China (Beijing, UV2013), United States (Boston, UV2014) and Japan (Nagoya, UV2016), the Fourth International Conference on Universal Village (UV2018) will be held again in Boston, United States. UV2018 will intensively exemplifies a desired future society that pursues human-nature harmony through wise application of advanced technologies. The concept is an expanded/advanced version of Smart Cities, and signifies that we follow the law of universe to protect the environment and eco-systems, while innovate new lifestyles to provide sustainable happiness for humanity’s future.</p>
            <p>UV2018 will call for the collective efforts across multi-disciplinary fields to develop a platform where researchers with different backgrounds can well collaborate beyond the traditional filed boundaries, and to find a systematic, coordinated, long-term solution for the future of human kind and mother nature.</p>
            <p>Subjects for UV2018 include but are not limited to the following topics:</p>
            <ul>
              <li>Develop systematic methodologies to advance UV technologies and to develop UV systems, including, intelligent transportation, intelligent environment & communities, intelligent healthcare, intelligent food systems, etc.</li>
              <li>New life styles enabled by IT / New energy sources / New materials / Effective microorganism technology and environmental protection.</li>
              <li>Address suitable paths of design, development, implementation, engineering and integration appropriate for different regions.</li>
              <li>Explore how to benefit governments, companies, universities as well as societies on specific UV topics as well as practical UV solutions.</li>
            </ul>
            <router-link to="/pages/call-for-papers">
              <a-button type="dashed">
                UV2018 Call for Papers
              </a-button>
            </router-link>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
  </div>
</template>

<style>
  #components-layout-demo-top-side .logo {
    width: 120px;
    height: 31px;
    background: rgba(255,255,255,.2);
    margin: 16px 28px 16px 0;
    float: left;
  }

  .ant-divider-horizontal.ant-divider-with-text-left:before,
  .ant-divider-horizontal.ant-divider-with-text-left:after {
    border-top: 1px solid #121212;
  }
  .container {
    margin: 0 auto;
    max-width: 1280px;
    width: 90%;
  }

  @media only screen and (min-width: 601px) {
    .container {
      width: 85%;
    }
  }

  @media only screen and (min-width: 993px) {
    .container {
      width: 70%;
    }
  }

  .container .row {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }

  .carousel-3d-slide {
    border-width: 0 !important;
  }

  .carousel-3d-controls > .prev,
  .carousel-3d-controls > .next, {
    color: #efefef;
    transition: all 225ms ease-in-out;
  }
</style>

<script>
export default {
  name: 'Home',
  methods: {
    hey () {
      console.log(this)
    },
    getWebp (src) {
      return 'https://cdn.universal-village.org/images/carousel/carousel-img-' + src + '.webp'
    }
  },
  data () {
    return {
      carouselImages: [
        '8t3r5njr',
        'tcgvz4t7',
        '2sb5r0s0'
      ]
    }
  }
}
</script>
