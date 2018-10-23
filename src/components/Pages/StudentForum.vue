<template lang="html">
  <a-layout-content class="student-forum--mainpage-content">
    <a-layout style="padding: 0 24px 24px; background: transparent">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content class="student-forum--page-content">
        <nav class="fto">
          <h1 class="fto-r1">UV2018 Students' Forum</h1>
          <h1 class="fto-r2">at</h1>
          <h1 class="fto-r3">The Fourth International Conference on Universal Village (UV2018)</h1>
        </nav>

        <article class="content">
          <section class="special-section" id="introduction">
            <h2>Expand our horizon</h2>
            <p>UV for regions at different developing phases, and for people at different ages, with various technology &
              culture background</p>
          </section>

          <section class="special-section" id="call-heading">
            <h2>CALL FOR STUDENT PARTICIPANTS</h2>
            <h3>Massachusetts of Institute, USA</h3>
            <h3>October 23-24, 2018</h3>
          </section>

          <section id="basic-information">
            <h1>Basic Information</h1>
            <p>Date: 23-24th October 2018 (Wednesday)</p>
            <p>Venue: Massachusetts of Institute, USA</p>
            <p>Language: English</p>
            <p>Expected Participants: Students, student advisors, related researchers, and attendees of UV-2018 Conference
              in general</p>
            <p>Application Procedure: E-mail to: <a href="mailto:student_uv2018@sina.com">student_uv2018@sina.com</a></p>
            <p>Application Deadline:</p>
            <p>Website: <a href="https://uv2018.universal-village.org/">https://uv2018.universal-village.org/</a>
            </p>
          </section>

          <section id="aims-and-scope">
            <h1>Aims and Scope</h1>
            <p>The UV2018 Students’ Forum will be organized as one of the events of The Fourth International Conference on
              Universal Village (UV2018) to be held from 23th – 24th October 2018 at Massachusetts of Institute, USA
              (https://uv2018.universal-village.org/#/). The UV 2018 students’ Forum aims to establish a platform for
              international students to exchange their research experience and vision with peers, to get constructive
              feedback from senior researchers, and collaborate beyond the boundaries of individual research fields. The
              forum is expected to invite students and student group leaders with different backgrounds to communicate and
              to share their vision on future community, environment and life styles. The target audience for the forum is
              mainly students, their advisors, related researchers and also the attendees of UV Conference in
              general. </p>
          </section>

          <section id="forum-content">
            <h1>Forum Content</h1>
            <p>
              The forum will include the following content:
            </p>
            <ul style="list-style: none">
              <li>
                <h2>1. UV Research Project Report</h2>
                <p>Student teams will be invited to present their ongoing research work relevant to various UV topics,
                  including, smart energy, intelligent transportation, intelligent environment & communities, smart
                  healthcare, smart food systems, innovative agriculture, new life styles enabled by IT, new energy
                  sources, new materials, effective microorganism technology, and environment. </p>
              </li>

              <li>
                <h2>2. Technology Review, Future Vison, and Hot-topic Discussion</h2>
                <p>Review technologies with huge impacts and great vision, discussion around several important hot
                  topics, including the social spotlights, social trends, future vision, etc.</p>
                <p>Hot topic: we will present all the alternative offer on the spot and attendants can choose which are
                  your best option to discuss on that day. (For example, Smart Home System, Artificial Intelligence,
                  City Emergency Response System etc.)</p>
              </li>

              <li>
                <h2>3. Entrepreneurship Initiative Relevant to UV Technologies</h2>
                <p>Students will be invited to share their experience of starting their own companies for UV related
                  technologies.</p>
              </li>

              <div class="hr">
                <span>A break (talent show or groupwork games)</span>
              </div>

              <li>
                <h2>4. UV Student Group Leadership Discussion</h2>
                <p>Student organization leaders will be invited to share their activities and experience on how to
                  promote the human-nature harmony concept in their Universities and local communities.</p>
              </li>

              <li>
                <h2>5. Round-table Discussion on Future Development of UV Students’ Forum</h2>
                <p>
                  A future plan for the development of UV Students’ Forum, including an international alliance of
                  university UV student organizations, a virtual UV hackathon, etc. will be explored. Moreover, many
                  members in our group have interesting research topics to share with us, like word recognition,
                  cancer cell recognition, tongue diagnosis etc.
                </p>
              </li>
            </ul>
          </section>

          <section id="target-speakers">
            <h1>Target Speakers</h1>
            <p>The target speakers of UV Student’s Forum include UV Research Project Presenters (1), Technical Reviewers
              (2), Entrepreneurship Presenters (3), and Student Group Leaders (4). The speakers will be chosen from the
              following two resources: </p>
            <ul>
              <li>Recommended by UV2018 committee members</li>
              <li>Proposal from students or existing student organizations</li>
            </ul>
          </section>

          <section id="forum-setting">
            <h1>Forum Setting & Forum</h1>
            <p>The forum will be hosted in a room which is suitable for round-table discussion and presentation. The
              official forum will be held as a one day event, but students will be free to organize other informal events
              outside the official one as they may wish.</p>
          </section>

          <section id="outro">
            <h1>Join Us</h1>
            <p>Student Forum is a great stage provided by Universal Village for students to host, organize, and participate.
              We are a big family, composed of many interesting and creative people.</p>
            <p>If you are interested in our group, we’re here waiting for your cool advice and participation!
              <code>:)</code></p>
          </section>
        </article>
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

<style>
  @import 'https://fonts.googleapis.com/css?family=Merriweather:500,400';

  .student-forum--mainpage-content {
    margin: 0;
    padding: 0;
    background: linear-gradient(90deg, #1370FB 20px, transparent 1%) center, linear-gradient(#1370FB 20px, transparent 1%) center, #3882E8 !important;
    background-size: 22px 22px !important;
    transition: all 225ms cubic-bezier(0.19, 1, 0.22, 1) !important;
  }

  .student-forum--page-content .content a:hover {
    text-decoration: underline;
  }

  .student-forum--page-content .fto {
    color: #212121 !important;
    background: rgba(255, 255, 255, .6) !important;
    background-size: 100% auto !important;
    text-align: center !important;
    font-family: Merriweather, serif !important;
    font-weight: 500 !important;
    line-height: 3em !important;
    padding-top: 4em !important;
    padding-bottom: 3.5em !important;
    border-radius: 1em 1em 0 0;
  }

  .student-forum--page-content .fto-r1 {
    font-size: 2em !important;
    font-weight: 300 !important;
    line-height: 1em !important;
  }

  .student-forum--page-content .fto-r2 {
    font-size: 3em !important;
    color: #d44b15 !important;
    line-height: .8em !important;
    font-weight: 500 !important;
    position: relative !important;
    display: inline-block !important;
  }

  .student-forum--page-content .fto-r2::after {
    content: '' !important;
    height: 1px !important;
    background-color: #d44b15 !important;
    width: 2em !important;
    position: absolute !important;
    top: 0.5em !important;
    left: -2.5em !important;
  }

  .student-forum--page-content .fto-r2::before {
    content: '' !important;
    height: 1px !important;
    background-color: #d44b15 !important;
    width: 2em !important;
    position: absolute !important;
    top: 0.5em !important;
    right: -2.5em !important;
  }

  .student-forum--page-content .fto-r3 {
    font-size: 1.4em !important;
    line-height: 1.4em !important;
    font-weight: 500 !important;
  }

  .student-forum--page-content .special-section, .student-forum--page-content .content {
    padding: 2em !important;
    color: #fff !important;
    font-weight: 400 !important;
    font-family: Merriweather, serif !important;
  }

  .student-forum--page-content .content section:not(.special-section) {
    padding-bottom: .5em !important;
    margin-bottom: 1em !important;
    border-bottom: 2px solid rgba(0, 0, 0, .6) !important;
  }

  .student-forum--page-content .content section:not(.special-section):last-child {
    border-bottom: none !important;
  }

  .student-forum--page-content .content section:not(.special-section) h1 {
    display: inline-block !important;
    padding: .8em 2.4em !important;
    background: rgba(0, 0, 0, .5) !important;
    width: auto !important;
    -webkit-border-radius: .5em !important;
    -moz-border-radius: .5em !important;
    border-radius: .5em !important;
    cursor: default !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
    transition: all 225ms cubic-bezier(0.19, 1, 0.22, 1) !important;
  }

  .student-forum--page-content .content section:not(.special-section) h1:hover {
    background: rgba(0, 0, 0, .3) !important;
  }

  .student-forum--page-content .content section:not(.special-section) p {
    line-height: 2 !important;
    margin-left: 1em !important;
    text-indent: 2em !important;
  }

  .student-forum--page-content .hr {
    display: flex !important;
    flex-basis: 100% !important;
    align-items: center !important;
    color: rgba(0, 0, 0, .85) !important;
    margin: 2em 0px !important;
  }

  .student-forum--page-content .hr::before {
    content: "" !important;
    flex-grow: 1 !important;
    background: rgba(255, 255, 255, 0.5) !important;
    height: 2px !important;
    font-size: 0px !important;
    line-height: 0px !important;
    margin: 0px 8px !important;
  }

  .student-forum--page-content .hr::after {
    content: "" !important;
    flex-grow: 5 !important;
    background: rgba(255, 255, 255, 0.75) !important;
    height: 2px !important;
    font-size: 0px !important;
    line-height: 0px !important;
    margin: 0px 8px !important;
  }

  .student-forum--page-content .hr > span {
    margin: 0 1em !important;
    background: rgba(255, 255, 255, .75) !important;
    border-radius: 1em !important;
    box-shadow: 0 0 0 1em rgba(255, 255, 255, .75) !important;
    transition: all 225ms cubic-bezier(0.19, 1, 0.22, 1) !important;
    cursor: default !important;
  }

  .student-forum--page-content .hr:hover > span {
    box-shadow: 0 0 0 .75em rgba(255, 255, 255, .75) !important;
  }

  .student-forum--page-content section#introduction, .student-forum--page-content section#call-heading {
    text-align: center !important;
  }

  .student-forum--page-content section#call-heading {
    margin-top: -2em !important;
    padding-bottom: 4em !important;
    margin-bottom: 1em !important;
    border-bottom: 2px solid rgba(0, 0, 0, .6) !important;
  }

  .student-forum--page-content section#introduction h2 {
    cursor: default !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
    display: inline-block !important;
    background: none !important;
    border-radius: 1em !important;
    padding: 0 2em !important;
    transition: all 475ms cubic-bezier(0.19, 1, 0.22, 1) !important;
  }

  .student-forum--page-content .content h1,
  .student-forum--page-content .content h2,
  .student-forum--page-content .content h3 {
    color: #fff !important;
  }

  .student-forum--page-content section#introduction:hover h2 {
    background: rgba(0, 0, 0, .75) !important;
    box-shadow: 0 0 0 .75em rgba(0, 0, 0, .75) !important;
  }

  .student-forum--page-content canvas {
    display: block !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    cursor: pointer !important;
    z-index: -100 !important;
  }

  .student-forum--page-content .content a {
    padding: .5em 1em !important;
    background: rgba(0, 0, 0, .25) !important;
    border-radius: 4px !important;
    color: rgba(255, 255, 255, .95) !important;
  }
</style>
