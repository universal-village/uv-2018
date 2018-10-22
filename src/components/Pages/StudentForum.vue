<template lang="html">

  <a-layout-content class="main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content class="page-content">
        <div class="uv-studentForum">
          <h4 style = "text-align:right;">23-24TH October 2018</h4>
          <h1>UV2018 Students’ Forum <br>
          at <br>
          The Fourth International Conference on Universal Village (UV2018)</h1>

          <h5>Expand our horizon:<br>
          UV for regions at different developing phases, and for people at different ages, with various technology & culture background</h5>

          <div class="text-reflecth02">
          <h2 class="text-reflecth2" >CALL FOR STUDENT PARTICIPANTS</h2>
          </div>
          <div class="text-reflecth03">
          <p class="text-reflecth3">Massachusetts of Institute, USA</p>
          </div>
          <div class="text-reflecth04">
          <p class="text-reflecth4">October 23-24, 2018</p>
          </div>

          <div class="title">
          <p>[BASIC INFORMATION]</p>
          </div>
          <p>
          Date: 23-24th October 2018 (Wednesday)<br>
          Venue: Massachusetts of Institute, USA<br>
          Language: English<br>
          Expected Participants: Students, student advisors, related researchers, and attendees of UV-2018 Conference in general<br>
          Application Procedure: E-mail to: uv2018.contact@universal-village.org<br>
          </p>
          <p>
          Application Deadline: <br>
          Website: https://uv2018.universal-village.org/#/
          </p>
          <br>

          <div class="title">
          <p>[AIMS AND SCOPE]</p>
          </div>
          <p>
          The UV2018 Students’ Forum will be organized as one of the events of The Fourth International Conference on Universal Village (UV2018) to be held from 23th – 24th October 2018 at Massachusetts of Institute, USA (https://uv2018.universal-village.org/#/). The UV 2018 students’ Forum aims to establish a platform for international students to exchange their research experience and vision with peers, to get constructive feedback from senior researchers, and collaborate beyond the boundaries of individual research fields. The forum is expected to invite students and student group leaders with different backgrounds to communicate and to share their vision on future community, environment and life styles. The target audience for the forum is mainly students, their advisors, related researchers and also the attendees of UV Conference in general.
          </p>
          <br>

          <div class="title">
          <p>[FORUM CONTENT]</p>
          </div>

          <p>
          The forum will include the following content:
          </p>
          <br>
          <div class="subtitle">
          <p>1. UV Research Project Report</p>
          </div>
          <div class="uv-studentForum">
          <p style="margin-left: 30px;">Student teams will be invited to present their ongoing research work relevant to various UV topics, including, smart energy, intelligent transportation, intelligent environment & communities, smart healthcare, smart food systems, innovative agriculture, new life styles enabled by IT, new energy sources, new materials, effective microorganism technology, and environment. </p>
          </div>

          <div class="subtitle">
          <p>2. Technology Review, Future Vison, and Hot-topic Discussion
          </p>
          </div>
          <p>
          <div class="uv-studentForum">
          <p style="margin-left: 30px;">Review technologies with huge impacts and great vision, discussion around several important hot topics, including the social spotlights, social trends, future vision, etc.<br>
          Hot topic: we will present all the alternative offer on the spot and attendants can choose which are your best option to discuss on that day. (For example, Smart Home System, Artificial Intelligence, City Emergency Response System etc.)</p>
          </div>

          <div class="subtitle">
          <p>3. Entrepreneurship Initiative Relevant to UV Technologies
          </p>
          </div>
          <div class="uv-studentForum">
          <p style="margin-left: 30px;">Students will be invited to share their experience of starting their own companies for UV related technologies.</p>
          </div>

          <div class="aBreakLine">
               <p>A break (talent show or groupwork games)</p>
          </div>

          <div class="subtitle">
          <p>4. UV Student Group Leadership Discussion
          </p>
          </div>
          <div class="uv-studentForum">
          <p style="margin-left: 30px;">Student organization leaders will be invited to share their activities and experience on how to promote the human-nature harmony concept in their Universities and local communities.</p>
          </div>

          <div class="subtitle">
          <p>5. Round-table Discussion on Future Development of UV Students’ Forum
          </p>
          </div>
          <div class="uv-studentForum">
          <p style="margin-left: 30px;">A future plan for the development of UV Students’ Forum, including an international alliance of university UV student organizations, a virtual UV hackathon, etc. will be explored. Moreover, many members in our group have interesting research topics to share with us, like word recognition, cancer cell recognition, tongue diagnosis etc.</p>
          </div>

          <div class="title">
          <p>[TARGET SPEAKERS]</p>
          </div>

          <p>
          The target speakers of UV Student’s Forum include UV Research Project Presenters (1), Technical Reviewers (2), Entrepreneurship Presenters (3), and Student Group Leaders (4). The speakers will be chosen from the following two resources:
          </p>
          <a>
          Recommended by UV2018 committee members </a><br>
          <a>
          Proposal from students or existing student organizations
          </a>
          <br>

          <div class="title">
          <p>[FORUM SETTING & FORUM]</p>
          </div>

          <p>
          The forum will be hosted in a room which is suitable for round-table discussion and presentation. The official forum will be held as a one day event, but students will be free to organize other informal events outside the official one as they may wish.
          </p>
          <br>

          <div class="title">
          <p>[FINANCIAL SUPPORT]</p>
          </div>

          <p>
          Students at selected worldwide universities who wish to be candidates for UV Research Project Presenters (1), Technical Reviewers (2), Entrepreneurship Presenters (3), and Student Group Leaders (4) and who wish to receive financial support should send a one-page proposal as well as their financial needs (for full support, ½ support or ¼ support) to email.
          </p>
          <br>

          <div class="title">
          <p>[JOIN US]:</p>
          </div>

          <p>
          Student Forum is a great stage provided by Universal Village for students to host, organize, and participate. We are a big family, composed of many interesting and creative people. </p>
          <p>
          If you are interested in our group, we’re here waiting for your cool advice and participation! :)
          </p>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout-content>

</template>

<script lang="js">
export default {
  name: 'student-forum',
  props: [],
  mounted () {

  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped lang="css">
.ant-layout {
  background-color: #646464 !important;
}

  @media only screen and (max-width: 960px) {

  }

  @media only screen and (min-width: 960px){
    .text-reflecth2, .text-reflecth2:before, .text-reflecth2 span {
        display: block !important;
        margin: 0;
        padding: 0;
    }

    .text-reflecth2, .text-reflecth2:before, .text-reflecth2:after {
        position: relative !important;
    }

    .text-reflecth2 {
        top: -0px;
    }

    .text-reflecth2:before {
        content: 'CALL FOR STUDENT PARTICIPANTS';
        top:  75px !important;
        transform: scale(1, -1) !important;
        backface-visibility: visible;
        z-index: 1;
    }

    .text-reflecth2:after {
        content: '';
        display: block;
        top: -8px !important;
        left: 0;
        width: 100%;
        height: 32px;
        background-image: linear-gradient(to bottom, rgba(100,100,100, .4) 0%, rgba(100, 100, 100, 1) 35%) !important;
        z-index: 2;
    }
    /*----reflection CSS for MIT----*/
    .text-reflecth3, .text-reflecth3:before, .text-reflecth3 span {
        display: block;
        margin: 0;
        padding: 0;
    }

    .text-reflecth3, .text-reflecth3:before, .text-reflecth3:after {
        position: relative;
    }

    .text-reflecth3 {
        top: -0px;
    }

    .text-reflecth3:before {
        content: 'Massachusetts of Institute, USA';
        top:  50px;
        transform: scale(1, -1);
        backface-visibility: visible;
        z-index: 1;
    }

    .text-reflecth3:after {
        content: '';
        display: block;
        top: -4px;
        left: 0;
        width: 100%;
        height: 18px;
        background-image: linear-gradient(to bottom, rgba(100,100,100, .4) 0%, rgba(100, 100, 100, 1) 35%);
        z-index: 2;
    }
    /*----reflection CSS for time----*/
    .text-reflecth4, .text-reflecth4:before, .text-reflecth4 span {
        display: block;
        margin: 0;
        padding: 0;
    }

    .text-reflecth4, .text-reflecth4:before, .text-reflecth4:after {
        position: relative;
    }

    .text-reflecth4 {
        top: -0px;
    }

    .text-reflecth4:before {
        content: 'October 23-24, 2018';
        top:  50px;
        transform: scale(1, -1);
        backface-visibility: visible;
        z-index: 1;
    }

    .text-reflecth4:after{
        content: '';
        display: block;
        top: -4px;
        left: 0;
        width: 100%;
        height: 18px;
        background-image: linear-gradient(to bottom, rgba(100,100,100, .4) 0%, rgba(100, 100, 100, 1) 35%);
        z-index: 2;
    }
  }

div.uv-studentForum h1 {
    color: #f4f4f4;
    text-align: center;
    font-size: 26px;
    padding: 0px;
}
div.uv-studentForum h2 {
    color: #fafafa;
    font-size: 32px;
    padding:0px;
}
div.uv-studentForum h3 {
    color: #dce4f4;
    font-size: 18px;
    text-align: center;
    line-height: 1.6;
    padding: 0px;
}
div.uv-studentForum h4 {
    color: #f4f4f4;
    font-size: 18px;
    padding: 0px;
}
div.uv-studentForum h5 {
    color: #dce4f4;
    font-size: 18px;
    text-align: center;
    line-height: 1.6;
    font-style: italic;
    padding: 0px;
}
div.uv-studentForum h6 {
    color: #dce4f4;
    font-size: 18px;
    text-align: center;
    padding-bottom: 0px;
}
div.uv-studentForum li{
    font-size: 18px;
}
div.uv-studentForum p {
    line-height: 1.5;
    color: #e0dcdc;
    font-size: 18px;
    padding-bottom: 0px;
}
div.uv-studentForum a {
    line-height: 1.5;
  margin-left: 30px;
    color: #e0dcdc;
    font-size: 18px;
    padding-bottom: 0px;
}
body {
    background-color: #646464;
    font-family: Arial;
}

div.text-reflecth02 h2 {
    text-align: center;
    color: #fafafa;
    font-size: 32px;
    padding:0px;
}
div.text-reflecth03 p {
    text-align: center;
    color: #fafafa;
    font-size: 20px;
    padding:0px;
    top:-10px;
}
div.text-reflecth04 p {
    text-align: center;
    color: #fafafa;
    font-size: 20px;
    padding:0px;
    top:-40px;
}
div.title p {
    color: #D3D27C;
    text-shadow: 0 0 3px #B2A968;
    font-size: 20px;
    padding:0px;
    font-family: "Comic Sans MS", cursive, sans-serif;
}
div.subtitle p {
    color: #ffe49d;
  margin-left: 30px;
    font-size: 20px;
    padding:0px;
}
div.aBreakLine p {
    color: #F2BF5F;
    text-shadow: 0 0 3px #FED847;
  margin-left: 60px;
    font-size: 22px;
    padding:0px;
}
</style>
