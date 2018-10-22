<template lang="html">

  <a-layout-content class="main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content class="page-content">
        <div class="agenda">
          <h1 style="font-weight: bolder;">IEEE UV2018 Agenda</h1>
          <br>
          <a href="#uv-day" class="uv-nav">[UV DAY]</a>
          |<a href="#uv-workshop" class="uv-nav">[UV WORKSHOP]</a>
          |<a href="#keynote" class="uv-nav">[KEYNOTE SPEAKERS]</a>
          |<a href="#technical-sessions" class="uv-nav">[TECHNICAL SESSIONS]</a>
          |<a href="#uv-poster" class="uv-nav">[UV POSTER]</a>
          <hr>
          
          <div class="uv-day">
            <a name="uv-day"></a>
            <h1>UV Day</h1>
            <h2>Date: Oct. 21st</h2>
            <h2>Time: 1 pm - 5 pm</h2>
            <h2>Location: Little Theatre</h2>

            <h3>Fantastic exhibition</h3>
            <ul>
              <li>promoting the vision and the various aspects of Universal Village to visitors of all ages</li>
            </ul>
            <h3>Great Design</h3>
            <ul>
              <li>showcasting the essentials of the UV aspiration: why, when, where, who, how</li>
            </ul>
            <h3>Fun games</h3>
            <ul>
              <li>encouraging young children to learn through family-friendly, instructive computer games</li>
            </ul>
            <h3>Interesting experiments</h3>
            <ul>
              <li>giving prospective scientists a chance to apply their skills in real-life scenarios</li>
            </ul>
            <br>
          </div>
          
          <div id="uv-workshop">
            <a name="uv-workshop"></a>
            <h1>UV Workshop</h1>
            <h2>Date: Oct. 22nd</h2>
            <h2>Time: 10 am - 6 pm</h2>
            <h2>Location: W20-491</h2>
            <h3><span>* Information will be continuously updated</span></h3>

            <span class="workshop-topic">Title: Innovative Sustainable Technologies</span>
            <span>Anumakonda Jagadeesh</span><br>
            <br>

            <span class="workshop-topic">Title: Democratizing Intelligent Vehicle Technologies</span>
            <span>Kazuya Takeda</span><br>
            <span>Nagoya Univ., Japan, Professor, Presidential Adviser</span><br>
            <br>

            <span class="workshop-topic">Title: Bioconversion of Solar Energy for UV Sustainable Enhancement</span>
            <span>Pengcheng Fu</span><br>
            <span>Hainan Univ.</span><br>
            <br>

            <span class="workshop-topic">Title: Design Culture on Healthy Life under the View of Ecological Civilization</span>
            <span>Shengsheng Cao</span><br>
            <span>Tsinghua Univ.</span><br>
            <br>

            <span class="workshop-topic">Title: Blue Energy</span>
            <span>Edgar Fu</span><br>
            <span>University of Pittsburgh</span><br>
            <br>

            <span class="workshop-topic">Panel Discussion: New Energy</span>
            <span>Tingying Zeng, Runtao Wen, Xiaoman Duan</span><br>
            <span>MIT</span><br>
            <br>

            <br>
            <span class="workshop-topic">Title: A new generation multi-media artist living in Boston</span>
            <span>Wen Yu</span><br>
            <span>Art Director, Build-It-Yourself </span><br>
            <br>

          </div>
          <br>
          
          <div id="keynote">
            <a name="keynote"></a>
            <h1>Keynote Speakers</h1>
            <h2>Date: Oct. 23rd</h2>
            <h2>Time: 8 am - 6 pm</h2>
            <h2>Location: W16 Kresge Auditorium & Little Theatre</h2>
            <h3 id="info-change"><strong>* Information will be continuously updated</strong></h3>

            <h3>Berthold K. P. Horn</h3>
            <strong>Professor, MIT, General Chair of UV2018</strong><br>
            <span>Title: Bilateral cruise control: smooth traffic from simple local interactions</span><br>

            <h3>Anant Agarwal</h3>
            <strong>Professor, MIT, Former Director of CSAIL, Founder and CEO of edX</strong><br>
            <span>Title: The Future of Work and Education</span><br>

            <h3>Lin Zhang</h3>
            <strong>Professor, Beihang University, Conference Chair of UV2018</strong><br>
            <span>Title: Cloud manufacturing: a new paradigm of intelligent manufacturing</span><br>

            <h3>Gang Luo</h3>
            <strong>Associate Professor, Ophthalmology, Harvard Medical School</strong><br>
            <span>Title: Driving assisted by low resolution vision</span><br>

            <h3>Hirofumi Aoki</h3>
            <strong>Vice Research Leader, Nagoya COI, Institute of Innovation for Future Society, Nagoya University</strong><br>
            <span>Title: Driver's mental workload estimation from eye and brain</span><br>

            <h3>Graham G. Rong</h3>
            <strong>Director of Corporate Relations, MIT Industrial Liaison Program</strong><br>
            <span>Title: Technology, Innovation, and Entrepreneurship at MIT</span><br>

            <h3>Ichiro Masaki</h3>
            <strong>Principal Research Scientist, MIT</strong><br>
            <span>Title: Universal Village</span><br>

            <h3>Rita Tse</h3>
            <strong>Director of School of Public Administration, Macao Polytechnic Institute</strong><br>
            <span>Title: Environmental Sensing - can people be trusted as sensors in the domain for air pollution quality?</span><br>

            <h3>Qingyang Du and Juejun Hu</h3>
            <strong>Department of Materials Science and Engineering, MIT</strong><br>
            <span>Title: Optics and Photonics: Manipulating Light for the Future</span><br>

            <h3>Ming Ching Chang</h3>
            <strong>Assistant Professor, University at Albany</strong><br>

            <h3>Haibo Wang</h3>
            <strong>Senior Scientist & Project Leader, Philips Research North America</strong><br>
            <span>Title: Contactless Patient Monitoring in Hospitals</span><br>


            <h3>Patrick Shen-Pei Wang</h3>
            <strong>Professor(emeritus), Northeastern University</strong><br>
            <span>Title: Science, Technology and Humanity - Some concerns</span><br>


            <h3>Zhishun Wang</h3>
            <strong>Research Scientist, Columbia University & NYSPI</strong><br>
            <span>Title: Deep Learning and Medical Imaging Processing</span><br>

            <h3>Gene R. H. Fry</h3>
            <strong>Ph.D, Consultant of Energy Efficiency & Global Warming</strong><br>
            <span>Title: The Path to 5&#8451; Warmer, When Earth Last Had This Much CO<sub>2</sub> in the Air</span>

            <h3>Y. Fang</h3>
            <strong>Research Scientist, MIT CSAIL</strong><br>
            <span>Title: Universal Village and Innovative Life Styles</span>

          </div>
          <br><br>
          
          <div id="technical-sessions">
            <a name="technical-sessions"></a>
            <h1>Technical Sessions</h1>
            <h2>Date: Oct. 24th</h2>
            <h2>Time: 8 am - 6 pm</h2>
            <h2>Location: W16 Little Theatre, W20-306, W20-307, CSAIL Stata Center Bld.32</h2>

            <table class="minimalistBlack">
            <thead>
            <tr>
            <th>CATEGORY</th>
            <th>SESSION NAME</th>
            <th>LOCATION</th>
            <th>TIME</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>1</td><td class="even">Intelligent Transportation and Urban Planning</td><td>32-D463</td><td class="even">AM</td></tr>
            <tr>
            <td>2</td><td class="even">Healthcare and Well-being</td><td>32-G449</td><td class="even">AM</td></tr>
            <tr>
            <td rowspan="3">3</td><td class="even">Intelligent Communities</td><td rowspan="3">W20-306</td><td class="even">AM</td></tr>
            <tr>
            <td class="even">New Lifestyles Enabled by Big Data</td><td class="even">AM</td></tr>
            <tr>
            <td class="even">Smart Solutions with AI</td><td class="even">PM</td></tr>
            <tr>
            <td>4</td><td class="even">Data Management</td><td>32-262</td><td class="even">AM</td></tr>
            <tr>
            <td>5</td><td class="even">Green Energy and Materials</td><td>32-262</td><td class="even">AM</td></tr>
            <tr>
            <td rowspan="3">8</td><td class="even">Special Session: Intelligent Modeling and Simulation</td><td rowspan="2">Little Theatre</td><td class="even">AM</td></tr>
            <tr>
            <td class="even">Special Session: Future Intelligent Manufacturing</td><td class="even">PM</td></tr>
            <tr>
            <td class="even">Special Session: Effective Microorganisms Technology</td><td>32-370</td><td class="even">PM</td></tr>
            <tr>
            <td rowspan="3">9</td><td class="even">UV City Forum & UV City Evaluation</td><td rowspan="3">W20-307</td><td class="even" rowspan="3">Whole Day</td></tr>
            <tr>
            <td class="even">UV Student Forum</td></tr>
            <tr>
            <td class="even">UV Industry & Entrepreneurship Forum</td></tr>
            </tbody>
            </tr>
            </table>
          </div>

          <br>
          
          <div id="uv-poster">
            <a name="uv-poster"></a>
            <h1>UV Poster Session & UV Exhibition</h1>
            <h2>Date: Oct. 23rd</h2>
            <h2>Time: 8 am - 6 pm</h2>
            <h2>Location: Main Kresge Lobby</h2>

            <br>
            <h2>Date: Oct. 24th</h2>
            <h2>Time: 8 am - 6 pm</h2>
            <h2>Location: W20-306, W20-307</h2>
          </div>
          
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout-content>

</template>

<script lang="js">
export default {
  name: 'agenda',
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
a.uv-nav {
  font-size: 1.2em;
  padding: 10px;
}
#keynote h3 {
  margin-top: 30px;
  font-weight: bolder;
  font-size: 1.4em;
}
#keynote h3#info-change {
  margin-top: 0;
  font-size: 1.17em;
  font-weight: bold;
}
#keynote span {
  margin-top: -10px;
  display: block;
  font-size: 1.4em;
}
table.minimalistBlack {
  font-family: "Courier New", Courier, monospace;
  border: 3px solid #000000;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}
table.minimalistBlack td, table.minimalistBlack th {
  border: 0.5px solid #000000;
  padding: 5px 4px;
}
table.minimalistBlack tbody td {
  font-size: 14px;
}
table.minimalistBlack td.even {
  background: #D0E4F5;
}
table.minimalistBlack thead {
  background: #E0E0E0;
  background: -moz-linear-gradient(top, #e8e8e8 0%, #e3e3e3 66%, #E0E0E0 100%);
  background: -webkit-linear-gradient(top, #e8e8e8 0%, #e3e3e3 66%, #E0E0E0 100%);
  background: linear-gradient(to bottom, #e8e8e8 0%, #e3e3e3 66%, #E0E0E0 100%);
  border-bottom: 3px solid #000000;
}
table.minimalistBlack thead th {
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  text-align: center;
}
table.minimalistBlack tfoot td {
  font-size: 14px;
}
strong {
  display: block;
  margin-top: -10px;
  margin-bottom: -10px;
}
span.workshop-topic {
  display: block;
  font-weight: bolder;
  font-size: 1.4em;
  margin-top: 10px;
  margin-bottom: 5px;
}
  @media only screen and (max-width: 960px) {
      .ant-layout-content {
      padding: 0 20px;
    }
  }
  @media only screen and (min-width: 960px){
      .ant-layout-content.main-content {
        padding: 0 10%;
    }
      .ant-layout {
        padding: 0 24px 24px;
    }
      /* .ant-collapse-item  {
        font-size: 1.5em !important;
        font-weight: bolder;
      } */
  }
</style>
