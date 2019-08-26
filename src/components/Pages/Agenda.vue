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
          |<a href="#" class="uv-nav" @click="viewProgramBook()">[Program Book]</a>
          <hr>

          <div class="uv-day">
            <a name="uv-day"></a>
            <h1>UV Day</h1>
            <h2>Chair(s): Jun Wan, Zejun Zhang</h2>
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
            <h2>Time: 10 am - 5 pm</h2>
            <h2>Location: W20-491</h2>

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

            <span class="workshop-topic">Title: Innovative Sustainable Technologies</span>
            <span>Anumakonda Jagadeesh</span><br>
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

            <h3>October 23rd: Opening Session</h3>
            <strong>Host: Lin Zhang</strong><br>
            <strong>Location: W16 Kresge Auditorium</strong><br>

            <h3>Greetings</h3>
            <strong>Xiaoman Duan and Yajun Fang</strong><br>
            <strong>Ichiro Masaki</strong><br>

            <h3>Berthold K. P. Horn</h3>
            <strong>Professor, MIT, General Chair of UV2018</strong><br>
            <span>Title: Bilateral cruise control: smooth traffic from simple local interactions</span><br>

            <h3>Anant Agarwal</h3>
            <strong>Professor, MIT, Former Director of CSAIL, Founder and CEO of edX</strong><br>
            <span>Title: The Future of Work and Education</span><br>

            <h3>Lin Zhang</h3>
            <strong>Professor, Beihang University, Conference Chair of UV2018</strong><br>
            <span>Title: Cloud manufacturing: a new paradigm of intelligent manufacturing</span><br>

            <h3>Tea Break</h3>

            <h3>October 23rd: Session II</h3>
            <strong>Host: Lin Zhang</strong><br>
            <strong>Location: W16 Kresge Auditorium</strong><br>

            <h3>Gang Luo</h3>
            <strong>Associate Professor, Ophthalmology, Harvard Medical School</strong><br>
            <span>Title: Driving assisted by low resolution vision</span><br>

            <h3>Hirofumi Aoki</h3>
            <strong>Vice Research Leader, Nagoya COI, Institute of Innovation for Future Society, Nagoya University</strong><br>
            <span>Title: Driver's mental workload estimation from eye and brain</span><br>

            <h3>Haibo Wang</h3>
            <strong>Senior Scientist & Project Leader, Philips Research North America</strong><br>
            <span>Title: Contactless Patient Monitoring in Hospitals</span><br>

            <h3>Graham G. Rong</h3>
            <strong>Director of Corporate Relations, MIT Industrial Liaison Program</strong><br>
            <span>Title: MIT's Innovation and Entrepreneurship Ecosystem</span><br>

<!--             <h3>Ichiro Masaki</h3>
<strong>Principal Research Scientist, MIT</strong><br>
<span>Title: Universal Village</span><br> -->

            <h3>Lunch Break</h3>
            <strong>Time: 12:30 pm - 1:30 pm</strong><br>

            <h3>October 23rd: Session III</h3>
            <strong>Host: Hirofumi Aoki</strong><br>
            <strong>Location: W16 Kresge Auditorium</strong><br>

            <h3>Jesus Maria Sousa</h3>
            <strong>Professor, University of Madeira, Portugal</strong><br>
            <span>Title: (Re)thinking Education out of the box</span><br>

            <h3>Rita Tse</h3>
            <strong>Director of School of Public Administration, Macao Polytechnic Institute</strong><br>
            <span>Title: Environmental Sensing - can people be trusted as sensors in the domain for air pollution quality?</span><br>

            <h3>Qingyang Du and Juejun Hu</h3>
            <strong>Department of Materials Science and Engineering, MIT</strong><br>
            <span>Title: Optics and Photonics: Manipulating Light for the Future</span><br>

            <h3>Tea Break</h3>

            <h3>October 23rd: Session IV</h3>
            <strong>Host: Tingying Zeng</strong><br>
            <strong>Location: Little Theatre</strong><br>
            <h3>Ming Ching Chang</h3>
            <strong>Assistant Professor, University at Albany</strong><br>
            <span>Title: AI Visual Intelligence Technologies for Building a Smarter World</span><br>

            <h3>Patrick Shen-Pei Wang</h3>
            <strong>Professor(emeritus), Northeastern University</strong><br>
            <span>Title: Science, Technology and Humanity - Some concerns</span><br>


            <h3>Zhishun Wang</h3>
            <strong>Associate Professor, Columbia University</strong><br>
            <span>Title: Brain Networks, Brain Imaging and Deep Learning: Background and Applications</span><br>

            <h3>Gene R. H. Fry</h3>
            <strong>Ph.D, Consultant of Energy Efficiency & Global Warming</strong><br>
            <span>Title: The Path to 5&#8451; Warmer, When Earth Last Had This Much CO<sub>2</sub> in the Air</span>

            <h3>Qiang Wang</h3>
            <strong>Professor, Worcester Polytechnic Institute</strong><br>
            <span>Title: Chemical Sources of Electric Power: Current Status and Future Perspective</span>

            <h3>Sunny Wang</h3>
            <strong>CEO, BROAD USA</strong><br>
            <span>Title: What Changes can UM bring to UV? (Ultimate Marerial & Universal Village)</span>

            <h3>Y. Fang</h3>
            <strong>Research Scientist, MIT CSAIL</strong><br>
            <span>Title: Universal Village and Innovative Life Styles</span>

            <h3>Highlight from Category Chairs</h3>
            <strong>Time: 6:15pm-6:30pm</strong><br>

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
            <td>1</td><td class="even"><a href="#session1">Intelligent Transportation and Urban Planning</a></td><td>32-D463</td><td class="even">AM</td></tr>
            <tr>
            <td>2</td><td class="even"><a href="#session2">Healthcare and Well-being</a></td><td>32-G449</td><td class="even">AM</td></tr>
            <tr>
            <td rowspan="3">3</td><td class="even"><a href="#session3a">Intelligent Communities</a></td><td rowspan="3">W20-306</td><td class="even">AM</td></tr>
            <tr>
            <td class="even"><a href="#session3b">New Lifestyles Enabled by Big Data</a></td><td class="even">AM</td></tr>
            <tr>
            <td class="even"><a href="#session3c">Smart Solutions with AI</a></td><td class="even">PM</td></tr>
            <tr>
            <td>4</td><td class="even"><a href="#session4">Data Management</a></td><td>32-262</td><td class="even">AM</td></tr>
            <tr>
            <td>5</td><td class="even"><a href="#session5">Green Energy and Materials</a></td><td>32-262</td><td class="even">AM</td></tr>
            <tr>
            <td rowspan="3">8</td><td class="even"><a href="#session8a">Special Session: Intelligent Modeling and Simulation</a></td><td rowspan="2">Little Theatre</td><td class="even">AM</td></tr>
            <tr>
            <td class="even"><a href="#session8b">Special Session: Future Intelligent Manufacturing</a></td><td class="even">PM</td></tr>
            <tr>
            <td class="even"><a href="#session8c">Special Session: Effective Microorganisms Technology</a></td><td>32-370</td><td class="even">PM</td></tr>
            <tr>
            <td rowspan="3">9</td><td class="even"><a href="#session9a">UV City Forum & UV City Evaluation</a></td><td rowspan="3">W20-307</td><td class="even" rowspan="3">Whole Day</td></tr>
            <tr>
            <td class="even"><a href="#session9b">UV Student Forum</a></td></tr>
            <tr>
            <td class="even"><a href="#session9a">UV Industry & Entrepreneurship Forum</a></td></tr>
            </tbody>
            </tr>
            </table>
            <br>
            
            <div class="session">
              <a name="session1"></a>
              <h2>Session 1: Intelligent Transportation and Urban Planning</h2>
              <h3>Location: 32-D463</h3>
              <h3>Time: 8:00am-12:25pm, October 24th</h3>
              <h3>Chair(s): Hao Sheng</h3>
              
              <h3 class="paper-title">Why Do We Need "Bilateral Control"? - In View Of Energy Consumption</h3>
              <h4 class="paper-authors">Author(s): Taiyi Wang, Yajun Fang, Berthold K.P. Horn</h4>

              <h3 class="paper-title">A Bottom-Up Design Model for Improving Efficiency of Transit System</h3>
              <h4 class="paper-authors">Author(s): Jiayang Li, Ruzhang Zhao,Yanfeng Ouyang,Meng Li</h4>

              <h3 class="paper-title">Analysis of Sparse Roadway Trajectories</h3>
              <h4 class="paper-authors">Author(s): Sudarshan S. Chawathe</h4>

              <h3 class="paper-title">An object tracking algorithm for static camera</h3>
              <h4 class="paper-authors">Author(s): Lianfeng Shi, Guanghua Chen, Yang Liu, Yajun Fang, Berthold K. P. Horn </h4>

              <h3 class="paper-title">Adaptive Spatio-temporal Model Based Multiple Object Tracking in Video Sequences Considering a Moving Camera</h3>
              <h4 class="paper-authors">Author(s): Yi Tao, Jiahui Chen, Yajun Fang, Ichiro Masaki, Berthold K.P. Horn</h4>

              <h3 class="paper-title">A Method to Extract Overall Trajectory Information from Frame Sequence of Fixed Background without Object Tracking</h3>
              <h4 class="paper-authors">Author(s): Hongkai Chen, Tianhong Shen, Yajun Fang, Guanghua Cheng, Yang Liu, Berthold K.P Horn</h4>

              <h3 class="paper-title">Real-time Vehicle Status Perception Without Frame-based Segmentation for Smart Camera Network</h3>
              <h4 class="paper-authors">Author(s): Jiahui Chen, Yajun Fang, Hao Sheng, Ichiro Masaki, Berthold Horn, Zhang Xiong</h4>

              <h3 class="paper-title">Autonomous Mobility and Energy Service Management in Future Smart Cities: An Overview</h3>
              <h4 class="paper-authors">Author(s): Xiaoqi Tan, Alberto Leon-Garcia</h4>

              <h3 class="paper-title">Designing Intelligent Spaces as if They Were Human: A "Space Agent" Framework</h3>
              <h4 class="paper-authors">Author(s): Yixiao Wang,Keith Evan Green,Rod Grupen,Johnell Brooks,Ian D. Walker</h4>

              <h3 class="paper-title">A Study of Correlation and Visual Data Analysis with Applications to Communication Network Services</h3>
              <h4 class="paper-authors">Author(s): Bingqing Liu, Hongyan Cui, Xue Qiu, Tao Yu, Haiyong Xu, Yan Huang, Meng Xu</h4>

            </div>

            <div class="session">
              <a name="session2"></a>
              <h2>Session 2: Healthcare and Well-being</h2>
              <h3>Location: 32-G449</h3>
              <h3>Time: 8:00am-11:10am, October 24th</h3>
              <h3>Chair(s): Hongyan Cui</h3>

              <h3 class="paper-title">A Survey on the Status of Smart Healthcare from the Universal Village Perspective</h3>
              <h4 class="paper-authors">Author(s): Guoxin Huang, Yajun Fang, Xiushi Wang, Yu Pei, Berthold K.P. Horn</h4>

              <h3 class="paper-title">Analysis of Information Exchange: How Does It Affect Patient-Hospital Relationship?</h3>
              <h4 class="paper-authors">Author(s): Xiao Yang</h4>

              <h3 class="paper-title">Recognizing Activities of Daily Living Using Binary Sensors</h3>
              <h4 class="paper-authors">Author(s): Sudarshan S. Chawathe</h4>

              <h3 class="paper-title">Machine Learning on Cataracts Classification Using SqueezeNet</h3>
              <h4 class="paper-authors">Author(s): Xingzhi Qian, Evan W. Patton, Justin Swaney, Qian Xing, Tingying(Helen) Zeng</h4>

              <h3 class="paper-title">A Study on Multidimensional Medical Data Processing Based on Random Forest</h3>
              <h4 class="paper-authors">Author(s): Lifeng Zhang, Hongyan Cui, Roy E.Welsch</h4>

              <h3 class="paper-title">Plant Disease Identification Using Convolutional Neural Networks</h3>
              <h4 class="paper-authors">Author(s): Kevin Zeng Qi, Justin Mark Swaney, Evan W. Patton</h4>

              <h3 class="paper-title">First-Aid system design</h3>
              <h4 class="paper-authors">Author(s): Haoran Ma, Yang Liu, Yajun Fang, Berthold K.P.Horn</h4>

            </div>

            <div class="session">
              <a name="session3a"></a>
              <h2>Session 3a: Intelligent Communities</h2>
              <h3>Location: W20-306</h3>
              <h3>Time: 8:00am-10:30am, October 24th</h3>
              <h3>Chair(s): Gilly Leshed</h3>

              <h3 class="paper-title">UniWifi, A Smart Network System</h3>
              <h4 class="paper-authors">Author(s): Harry Zhou and Bruce Wang</h4>

              <h3 class="paper-title">CoDAS, a Method for Envisioning Larger-Scaled Computational Artifacts Connecting Communities</h3>
              <h4 class="paper-authors">Author(s): Carlos Araujo de Aguiar, Gilly Leshed, Alexander Bernard, John McKenzie, Camille Andrews and Keith Evan Green</h4>

              <h3 class="paper-title">A Survey of Multi-controllers Consistency on SDN</h3>
              <h4 class="paper-authors">Author(s): Tao Yu, Hong yang, Hongyan Cui and Hongxiang Jiang</h4>

              <h3 class="paper-title">Anonymous Network Communication Based on SDN</h3>
              <h4 class="paper-authors">Author(s): Taiyu Wong, Hongyan Cui, Yuepemg Shen, Wenqi Lin and Tao Yu</h4>

              <h3 class="paper-title">Friendly Acoustic Technology Enhance Neighborhood and Friendship</h3>
              <h4 class="paper-authors">Author(s): Xiangdong Zhang, Zheng Kuang, Jun Yang</h4>

              <h3 class="paper-title">Method of intonation conversion for facilitating English communication between native and non-native speakers</h3>
              <h4 class="paper-authors">Author(s): Tomoko Nariai, Hiroaki Kojima, Hiroyuki Obari and Shiroh Itai</h4>

            </div>

            <div class="session">
              <a name="session3b"></a>
              <h2>Session 3b: New Lifestyles Enabled by Big Data</h2>
              <h3>Location: W20-306</h3>
              <h3>Time: 12:00pm-2:05pm, October 24th</h3>
              <h3>Chair(s): Wei Ke</h3>

              <h3 class="paper-title">The Clustering for Clients in a Bank Based on Big Data</h3>
              <h4 class="paper-authors">Author(s): Jie Zheng, Hongyan Cui, Xiaoqiu Li, Lingge Meng and Tian Wang</h4>

              <h3 class="paper-title">Generating Poetry with Stem-Based LSTM Network</h3>
              <h4 class="paper-authors">Author(s): Yifan Wu, Tingying (Helen) Zeng, Evan W. Patton and Justin Swaney</h4>

              <h3 class="paper-title">Nubilum Ad Hominem: Taking smart homes steps further</h3>
              <h4 class="paper-authors">Author(s): Chuyuan Zhang, Yajun Fang and Berthold K.P. Horn</h4>

              <h3 class="paper-title">MyNeighbourhood: The Human Smart City Village</h3>
              <h4 class="paper-authors">Author(s): Álvaro Oliveira and Irani Santos</h4>

              <h3 class="paper-title">Analyzing of the relationship between life satisfaction and waste behaviors</h3>
              <h4 class="paper-authors">Author(s): Fuxin Du,Yajun Fang,Yang Liu ,Berthold K.P. Horn</h4>

            </div>

            <div class="session">
              <a name="session3c"></a>
              <h2>Session 3c: Smart Solutions with AI</h2>
              <h3>Location: W20-306</h3>
              <h3>Time: 2:05pm-4:25pm, October 24th</h3>
              <h3>Chair(s): Xiying Li</h3>

              <h3 class="paper-title">Artificial Intelligence in Accounting</h3>
              <h4 class="paper-authors">Author(s): Gerry Lu</h4>

              <h3 class="paper-title">FASTER R-CNN over ATTENTION: Shared Bike Detection in Surveillance Video</h3>
              <h4 class="paper-authors">Author(s): Xuelin Yang and Xiying Li</h4>

              <h3 class="paper-title">Seat Arrangement Strategies and Design for Arena</h3>
              <h4 class="paper-authors">Author(s): Haosen Cao, Yang Liu, Yajun Fang and Berthold K.P. Horn</h4>

              <h3 class="paper-title">A Simple Change Comparison Method for Image Sequences Based on Uncertainty Coefficient</h3>
              <h4 class="paper-authors">Author(s): Ruzhang Zhao, Yajun Fang and Berthold K.P. Horn</h4>

              <h3 class="paper-title">A Continuous Integrated Website Architecture Design</h3>
              <h4 class="paper-authors">Author(s): Yiyang Gao</h4>

            </div>

            <div class="session">
              <a name="session4"></a>
              <h2>Session 4: Data Management</h2>
              <h3>Location: 32-262</h3>
              <h3>Time: 8:00am-10:20am, October 24th</h3>
              <h3>Chair(s): Wenqiang Wang</h3>

              <h3 class="paper-title">Analysis of the Uniformity of Light in a Plant Growth Chamber</h3>
              <h4 class="paper-authors">Author(s): Yong Xu, Hanbin Wang, Walter Nsengiyumva</h4>

              <h3 class="paper-title">CovNN: A Covariance Neural Network Extended from CNN</h3>
              <h4 class="paper-authors">Author(s): Yue Shen, Tianyou Zheng, Dandan Li, Zicai Wang</h4>
              
              <h3 class="paper-title">Simplifying Component Interaction with Actors and Databases</h3>
              <h4 class="paper-authors">Author(s): Wei Ke, Lap-Man Hoi, Ka-Meng Siu</h4>

              <h3 class="paper-title">A Survey on the Status of Open Data and Its Future</h3>
              <h4 class="paper-authors">Author(s): Xiushi Wang, Yajun Fang, Yang Liu, Berthold K. P. Horn</h4>

              <h3 class="paper-title">Towards an AUV Swarm Based Mobile Underwater Sensor Network for Invasive Species Data Acquisition</h3>
              <h4 class="paper-authors">Author(s): Mark Allison, Heather Dawson, Grant Rusin</h4>

            </div>

            <div class="session">
              <a name="session5"></a>
              <h2>Session 5: Green Energy and Materials</h2>
              <h3>Location: 32-262</h3>
              <h3>Time: 10:20am-12:25pm, October 24th</h3>
              <h3>Chair(s): Tingying (Helen) Zeng, Qiang Wang</h3>

              <h3 class="paper-title">Co-channel Interference of TD-LTE Wireless Network in Smart Grid</h3>
              <h4 class="paper-authors">Author(s): Rongduo Liu, Jiadong Du，Qi Wang , Wei Xin, Delong Song, Xu Liu, Hailun Xia</h4>

              <h3 class="paper-title">Integration of Solar PV Generation with Distribution Grid: Using Decoupled Adaptive Vectorial Filter Based Control Technique</h3>
              <h4 class="paper-authors">Author(s): Nishant Kumar, Bijaya Ketan Panigrahi</h4>

              <h3 class="paper-title">Utility Grid Assisted Automated Solar PV Powered Energy-Efficient Eco-Friendly Water Pumping System With Improved Power Quality Performance</h3>
              <h4 class="paper-authors">Author(s): Shadab Murshid, Bhim Singh</h4>

              <h3 class="paper-title">Fault Ride-Through Operation of Grid Interfaced Solar PV System with Power Quality Improvement</h3>
              <h4 class="paper-authors">Author(s): Shadab Murshid, Bhim Singh</h4>

              <h3 class="paper-title">Adaptive Generalized Predictive Control Scheme for Single Phase GPV System</h3>
              <h4 class="paper-authors">Author(s): Vedantham Lakshmi Srinivas, Bhim Singh, Sukumar Mishra</h4>

              <h3 class="paper-title">What Changes can UM bring to UV? (Ultimate Marerial & Universal Village)</h3>
              <h4 class="paper-authors">Author(s): Sunny Wang</h4>

            </div>

            <div class="session">
              <a name="session8a"></a>
              <h2>Special Session 8a: Intelligent Modeling and Simulation</h2>
              <h3>Location: Little Theatre(W16)</h3>
              <h3>Time: 8:00am-10:30am, October 24th</h3>
              <h3>Chair(s): Lin Zhang</h3>

              <h3 class="paper-title">Discrete Event Modeling and Simulation Aspects to Improve Machine Learning Systems</h3>
              <h4 class="paper-authors">Author(s): Laurent Capocchi,Jean-Francois Santucci,Bernard P. Zeigler</h4>

              <h3 class="paper-title">DEVS Modeling and Simulation of Financial Leverage Effect Based on Markov Decision Process</h3>
              <h4 class="paper-authors">Author(s): E. Barbieri, L. Capocchi, J.F. Santucci</h4>

              <h3 class="paper-title">Smart-Parking: Integration and data management by modeling and simulation using connected objects according to the DEVS formalism</h3>
              <h4 class="paper-authors">Author(s): Antoine Dominici, Emmanuelle De Gentili, Laurent Capocchi, Jean-Francois Santucci</h4>

              <h3 class="paper-title">A Dynamic Data Driven Application System to Manage Urban Agricultural Ecosystems in Smart Cities</h3>
              <h4 class="paper-authors">Author(s): Adam Ghandar, Georgios Theodoropoulos, Bowen Zheng, Shijie Chen, Yue Gong, Miner Zhong</h4>

              <h3 class="paper-title">Simulation of Production Modes for Cloud Manufacturing Enterprises</h3>
              <h4 class="paper-authors">Author(s): Longfei Zhou, Lin Zhang, Lei Ren</h4>

              <h3 class="paper-title">Program Procedure Pattern Mining Model for Legacy Code</h3>
              <h4 class="paper-authors">Author(s): Jingjing Zhao, Jianbin Liu, Liwei Zheng</h4>

            </div>

            <div class="session">
              <a name="session8b"></a>
              <h2>Special Session 8b: Future Intelligent Manufacturing</h2>
              <h3>Location: Little Theatre(W16)</h3>
              <h3>Time: 12:00pm-2:30pm, October 24th</h3>
              <h3>Chair(s): Satarupa Mukherjee, Lin Zhang</h3>

              <h3 class="paper-title">Integrated optimization of supplier selection and service scheduling in cloud manufacturing environment</h3>
              <h4 class="paper-authors">Author(s): Sisi Lin, Yuanjun Laili, Yongliang Luo</h4>

              <h3 class="paper-title">Machine vision for the quality assessment of emulsions in pharmaceutical processing</h3>
              <h4 class="paper-authors">Author(s): Saritha Unnikrishnan, John Donovan, Russell Macpherson, David Tormey</h4>

              <h3 class="paper-title">A preliminary approach towards the trust issue in Cloud Manufacturing using Grounded Theory: Defining the problem domain</h3>
              <h4 class="paper-authors">Author(s): Henzel Robert, Herzwurm Georg</h4>

              <h3 class="paper-title">A Manufacturing Task Scheduling Method Based on Public Goods Game on Cloud Manufacturing Model</h3>
              <h4 class="paper-authors">Author(s): Tian Bai, Sicheng Liu, Lin Zhang</h4>

              <h3 class="paper-title">Study on Modeling and Evaluation Method of Service-agent Network in Cloud Manufacturing</h3>
              <h4 class="paper-authors">Author(s): Chun Zhao, Lin Zhang, Xiao Luo</h4>

            </div>

            <div class="session">
              <a name="session8c"></a>
              <h2>Special Session 8c: Effective Microorganisms Technology</h2>
              <h3>Location: 32-370</h3>
              <h3>Time: 12:00pm-2:55pm, October 24th</h3>
              <h3>Chair(s): Masaki Shintani</h3>

              <h3 class="paper-title">Water quality improvement and biodiversity recovery in rivers, lakes and seas using Effective Microorganisms by citizens</h3>
              <h4 class="paper-authors">Author(s): Yoshiki Ito, Teruo Higa</h4>

              <h3 class="paper-title">Use of EM Technology (EM) in water treatment: Urban sewage water treatment plant, a city slaughter house, and a natural estuary in Guayaquil, Ecuador</h3>
              <h4 class="paper-authors">Author(s): Fabian Castillo</h4>

              <h3 class="paper-title">Use of EM Technology in Intensive Shrimp Aquaculture: An Effective Research-Based Tool to Enhance Sustainability</h3>
              <h4 class="paper-authors">Author(s): Gustavo F. Pinoargote, Toru Koshoji</h4>

              <h3 class="paper-title">Use of Effective Microorganisms (EM) for Sustainable Pathogen Control in Food Safety</h3>
              <h4 class="paper-authors">Author(s): Amber Gibby, Eric Lancaster</h4>

              <h3 class="paper-title">Countermeasures against the radioactive contamination of agricultural crops by utilizing effective microorganisms (EM) for the agricultural land damaged in the Fukushima Daiichi nuclear power plant accident</h3>
              <h4 class="paper-authors">Author(s): Shuichi Okumoto, Masaki Shintani, Aleksander Nikitin, Teruo Higa</h4>

              <h3 class="paper-title">Effective Microorganisms as a Prospective Tool for Remediation Soils Contaminated with 137Cs-contaminated Soils</h3>
              <h4 class="paper-authors">Author(s): Aleksander N. Nikitin, Shuichi Okumoto, Galina Z. Gutzeva, Masaki Shintani, Galina A. Leferd,Ihar A. Cheshyk, Teruo Higa</h4>

              <h3 class="paper-title">Microorganisms open the future for mankind</h3>
              <h4 class="paper-authors">Author(s): Teruo Higa</h4>

            </div>

            <div class="session">
              <a name="session9b"></a>
              <h2>Special Session 9b: Student Forum</h2>
              <h3>Location: W20-307</h3>
              <h3>Time: 8:00am-2:40pm, October 24th</h3>
              <h3>Chair(s): Xuenan Ni, Xin Shu, Wenyang Gao, Haoran Ma</h3>
              <h3 class="paper-title">Towards an AUV Swarm Based Mobile Underwater Sensor Network for Invasive Species Data Acquisition</h3>
              <h4 class="paper-authors">Author(s): Mark Allison, Heather Dawson, Grant Rusin</h4>

              <h3 class="paper-title">Discerning the growth pattern of water hyacinth in Lake Nokoue, Benin—applying satellite earth observation technology to inform local development</h3>
              <h4 class="paper-authors">Author(s): Xuenan Ni, Ilham Ali, Danille Wood, Fohla Mouftaou</h4>

              <h3 class="paper-title">Water contamination detection via the implementation of Support Vector Machine</h3>
              <h4 class="paper-authors">Author(s): Qi Chen, Guanghua Cheng, Yiyang Gao, Yajun Fang, Yang Liu, Berthold K. P. Horn</h4>

              <h3 class="paper-title">Intelligent Garbage Bin with True-False Classification</h3>
              <h4 class="paper-authors">Author(s): Jieke Wang, Yang Liu, Yajun Fang, Berthold K.P. Horn</h4>
            
              <h3 class="paper-title">Transcribing Latin Manuscripts in Respect to Linguistics</h3>
              <h4 class="paper-authors">Author(s): Manqing Feng, Guoxin Guo, Chuyuan Zhang, Yang Liu, Yajun Fang, Berthold K. P. Horn</h4>

              <h3 class="paper-title">Early Detection of Esophageal Cancer Using Computer Vision</h3>
              <h4 class="paper-authors">Author(s): Peize Li</h4>

              <h3 class="paper-title">Video-based Fall Detection for Seniors with Human Pose Estimation</h3>
              <h4 class="paper-authors">Author(s):Zhanyuan Huang, Yang Liu, Yajun Fang, Berthold K. P. Horn</h4>

              <h3 class="paper-title">Analogical Model of Merging Process in Urban Transportation System by Application of Oblique Shockwave Theory</h3>
              <h4 class="paper-authors">Author(s): Kening Sun, Guangyang Che, Yaqi Li</h4>

              <h3 class="paper-title">An Emergency Ranking System for Intelligent Transportation Surveillance</h3>
              <h4 class="paper-authors">Author(s): Xuankai Fang, Yang Liu, Yajun Fang, Berthold K. P. Horn</h4>

              <h3 class="paper-title">A Macroscopic Traffic Simulation Model of Mingle Traditional and Self-driving Cars</h3>
              <h4 class="paper-authors">Author(s): Zihan Cao,Yang Liu,Yajun Fang,Berthold K. P. Horn</h4>

              <h3 class="paper-title">New Paradigms, practices and precursors; From the Misiones Pedagógicas (MP) of the Spanish Second Republic (SSR) to AI Democracy</h3>
              <h4 class="paper-authors">Author(s): Francisco Bozzano-Barnes</h4>

              <h3 class="paper-title">Preliminary Study on Index Construction of Medical Tourism Destination</h3>
              <h4 class="paper-authors">Author(s): Qikai Su, Yajun Fang, Yang Liu, Berthold K. P. Horn</h4>

            </div>

            <div class="session">
              <a name="session9a"></a>
              <h2>Special Session 9a&9c: City Forum & Industry</h2>
              <h3>Location: W20-307</h3>
              <h3>Time: 2:40pm-4:35pm, October 24th</h3>
              <h3>Chair(s): Tao Ma</h3>

              <h3 class="paper-title">Knowledge based Smart Environment</h3>
              <h4 class="paper-authors">Author(s): Xin Shu</h4>

              <h3 class="paper-title">Smart Cities, A Survey on Smart Safety Technologies Modeling and Simulation of Financial Leverage Effect Based on Markov Decision Process</h3>
              <h4 class="paper-authors">Author(s): Hao Qiu, Yang Liu, Yajun Fang, Berthold Horn</h4>

              <h3 class="paper-title">Evaluation of Current Waste Management System and Proposal for Future Advancement in Universal Villages</h3>
              <h4 class="paper-authors">Author(s): Shunzhi Wen, Yang Liu, Yanyan Li, Yajun Fang, Berthold K. P. Horn</h4>

              <h3 class="paper-title">Use artificial intelligence and computer vision to reform metal scrap recycling</h3>
              <h4 class="paper-authors">Author(s): Tian Tan, Zhonghe Wang</h4>

              <h3 class="paper-title">New Paradigms, practices and precursors; From the Misiones Pedagógicas (MP) of the Spanish Second Republic (SSR) to AI Democracy</h3>
              <h4 class="paper-authors">Author(s): Francisco Bozzano-Barnes</h4>

              <h3 class="paper-title">Comparative Study on Children's Cognitive Development through Piano and Language Acquisition</h3>
              <h4 class="paper-authors">Author(s): Chenchen Gong</h4>

            </div>

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
    viewProgramBook: function () {
      window.open('https://s3.amazonaws.com/uv2018/resources/IEEE%2BUV2018%2BProgram%2BBook.pdf', '_blank')
    }
  },
  computed: {

    }
  }
</script>

<style scoped lang="css">

h3.paper-title {
  margin-top: 35px;
  font-weight: bolder;
}
h4.paper-authors {

}
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
div.session {
  margin-top: 35px;
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
