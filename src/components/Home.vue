<template>
  <div>
    <a-layout-content>
      <a-layout style="padding: 0; margin: 0">
        <carousel-3d :height="640" :width="1920" :space="1280" :controls-visible="true" :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'" :controls-width="30" :controls-height="60" :clickable="false" :autoplay="true" :autoplay-timeout="5000" :perspective="15" style="border-width: 0 !important; margin-top: 0 !important; width: 100%">
          <slide v-for="(slide, i) in carouselImages" :index="i" :key="i" v-html="slideHtml(slide)" />
        </carousel-3d>
        <a-layout-content :style="{ padding: '24px', margin: 0, minHeight: '280px' }">
          <a-row>
            <a-col :span="24" :style="{ padding: '24px' } " :md="24" :lg="18">
              <h1 style="font-size: 2em; font-weight: bold;">
                Welcome to IEEE International Conference on Universal Village 2018 - UV2018
              </h1>
              <a-divider orientation="left">Summary</a-divider>
              <div property="content:encoded" class="home-content">
                <p>After great success in China (Beijing, UV2013), United States (Boston, UV2014) and Japan (Nagoya, UV2016), the Fourth International Conference on Universal Village (UV2018) will be held again in Boston, United States. UV2018 will intensively exemplifies a desired future society that pursues human-nature harmony through wise application of advanced technologies. The concept is an expanded/advanced version of Smart Cities, and signifies that we follow the law of universe to protect the environment and eco-systems, while innovate new lifestyles to provide sustainable happiness for humanity&apos;s future.</p>
                <p>UV2018 will call for the collective efforts across multi-disciplinary fields to develop a platform where researchers with different backgrounds can well collaborate beyond the traditional filed boundaries, and to find a systematic, coordinated, long-term solution for the future of human kind and mother nature.</p>
                <p>Subjects for UV2018 include but are not limited to the following topics:</p>
                <ul>
                  <li>Develop systematic methodologies to advance UV technologies and to develop UV systems, including, intelligent transportation, intelligent environment & communities, intelligent healthcare, intelligent food systems, etc.</li>
                  <li>New life styles enabled by IT / New energy sources / New materials / Effective microorganism technology and environmental protection.</li>
                  <li>Address suitable paths of design, development, implementation, engineering and integration appropriate for different regions.</li>
                  <li>Explore how to benefit governments, companies, universities as well as societies on specific UV topics as well as practical UV solutions.</li>
                </ul>
                <p style="font-weight: bolder;">The theme for UV2018 is "Diversity, Mobility and Connectivity for Emergence of Harmony in Universal Village".</p>
                <router-link to="/pages/call-for-papers">
                  <a-button>
                    UV2018 Call for Papers
                  </a-button>
                </router-link>
              </div>
            </a-col>
            <a-col :span="24" :style="{ padding: '24px' }" :md="24" :lg="6">
              <a-divider orientation="left">Account</a-divider>
              <div style="width: 100%; margin-top: 24px;" class="side-box">
                <router-link to="/reviewer">
                  <div class="hovereffect">
                    <img class="img-responsive" src="https://cdn.universal-village.org/images/home-sidebar/authors-and-reviewers.png" alt="">
                    <div class="overlay">
                      <h2>Reviewers</h2>
                      <span class="ov-description">
                        Login / Register
                      </span>
                      <span class="ov-arrow">
                        &#10093;
                      </span>
                    </div>
                  </div>
                </router-link>
              </div>
              <div style="width: 100%;" class="side-box">
                <router-link to="/conference-registration">
                  <div class="hovereffect">
                    <img class="img-responsive" src="https://cdn.universal-village.org/images/home-sidebar/attendees.png" alt="">
                    <div class="overlay">
                      <h2>Attendees</h2>
                      <span class="ov-description">
                        Login / Register
                      </span>
                      <span class="ov-arrow">
                        &#10093;
                      </span>
                    </div>
                  </div>
                </router-link>
              </div>
              <!--<div style="width: 100%;" class="side-box">-->
                <!--<router-link to="/login">-->
                  <!--<div class="hovereffect" style="border-bottom: none;">-->
                    <!--<img class="img-responsive" src="https://cdn.universal-village.org/images/home-sidebar/volunteers-and-sponsors.png" alt="">-->
                    <!--<div class="overlay">-->
                      <!--<h2>Volunteers / Sponsors</h2>-->
                      <!--<span class="ov-description">-->
                        <!--Login / Register-->
                      <!--</span>-->
                      <!--<span class="ov-arrow">-->
                        <!--&#10093;-->
                      <!--</span>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</router-link>-->
              <!--</div>-->
            </a-col>
          </a-row>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
  </div>
</template>

<style scoped>
  @media only screen and (max-width: 960px) {
    .ant-layout-content {
      padding: 0;
    }
  }
  @media only screen and (min-width: 960px){
    .ant-layout-content {
      padding: 0 5%;
    }
  }

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
  .carousel-3d-controls > .next{
    color: #efefef;
    transition: all 225ms ease-in-out;
  }

  .hovereffect {
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
    background: -webkit-linear-gradient(195deg, rgba(190, 255, 76, 0.8), rgba(0, 255, 225, 0.8));
    background: linear-gradient(195deg, rgba(190, 255, 76, 0.8), rgba(0, 255, 225, 0.8));
  }

  .hovereffect .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    padding: 2em;
    text-align: left;
  }

  .hovereffect img {
    display: block;
    position: relative;
    max-width: none;
    width: calc(100% + 60px);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.45s, -webkit-filter 0.45s;
    transition: opacity 0.35s, transform 0.45s, filter 0.45s;
    -webkit-transform: translate3d(-60px,0,0);
    transform: translate3d(-60px,0,0);
  }

  .hovereffect h2 {
    border-radius: 8px 8px 8px 0;
    text-transform: uppercase;
    position: relative;
    font-size: 15px;
    text-align: left;

    display: inline-block;
    background-color: #6B14D3;
    color: white;
    padding: 9px 15px 10px 15px;
    margin: 1px;
    background: -webkit-linear-gradient(195deg, rgba(101, 137, 41, 0.9), rgb(0, 153, 133));
    background: linear-gradient(195deg, rgba(101, 137, 41, 0.9), rgb(0, 153, 133));
  }

  .hovereffect .overlay:before {
    position: absolute;
    top: 20px;
    right: 20px;
    bottom: 20px;
    left: 20px;
    border-radius: 1em;
    border: 2px solid rgba(255, 255, 255, .8);
    content: '';
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.45s, -webkit-filter 0.45s;
    transition: opacity 0.35s, transform 0.45s, filter 0.45s;
    -webkit-transform: translate3d(-20px,0,0);
    transform: translate3d(-20px,0,0);
  }

  .hovereffect a, .hovereffect span {
    border-radius: 0 8px 8px 8px;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.45s, -webkit-filter 0.45s;
    transition: opacity 0.35s, transform 0.45s, filter 0.45s;

    display: inline-block;
    background-color: #6B14D3;
    color: white;
    padding: 8px 15px 7px 15px;
    margin: 1px;
    background: -webkit-linear-gradient(195deg, rgba(101, 137, 41, 0.9), rgb(0, 153, 133));
    background: linear-gradient(195deg, rgba(101, 137, 41, 0.9), rgb(0, 153, 133));
  }

  .hovereffect .ov-arrow {
    color: #FFF;
    background: none;
    padding: 0;
    position: absolute;
    right: 10%;
    bottom: 13%;
    font-size: 36px;
  }

  .ov-description {
    opacity: 1 !important;
  }

  .hovereffect:hover img {
    opacity: 0.6;
    filter: alpha(opacity=60);
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }

  .hovereffect:hover .overlay:before,
  .hovereffect:hover a, .hovereffect:hover span {
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }

  .hovereffect {
    border-bottom: 2px solid #ffffff;
    cursor: pointer;
    transition: all 600ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  .hovereffect:active {
    filter: brightness(60%);
  }
  .home-content p {
    font-size: 18px;
  }
  .home-content li {
    font-size: 18px;
  }
</style>

<script>
import ALayoutSider from 'vue-antd-ui/es/layout/Sider'
import ADivider from 'vue-antd-ui/es/divider/index'
export default {
  name: 'Home',
  components: {ADivider, ALayoutSider},
  methods: {
    getWebp (src) {
      return 'https://cdn.universal-village.org/images/carousel/carousel-img-' + src + '.webp'
    },
    getJpg (src) {
      return 'https://cdn.universal-village.org/images/carousel/carousel-img-' + src + '.jpg'
    },
    slideHtml (slide) {
      return '<img src=' + this.getWebp(slide) + " style=\"width: 100%; height: auto; background: linear-gradient(135deg, #5c258d, #4389a2)\" onerror=\"this.onerror=null; this.src='" + this.getJpg(slide) + "'\">"
    }
  },
  data () {
    return {
      carouselImages: [
        'ol2CtlIw',
        /* 'tcgvz4t7', */
        '8t3r5njr'
      ]
    }
  }
}
</script>
