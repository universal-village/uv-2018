<template lang="html">

  <a-layout-content class="main-content">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content class="page-content">
        <h1>Camera Ready Paper Publication Guide</h1>
        <strong style="font-size: 1.23em;">The conference proceeding of UV 2018 will be published by IEEE Computer Society (CS) press, included into IEEE Xplore, and indexed by EI Compendex. UV2018 Conference Policy requires that all accepted papers must be checked for IEEE formatting. All authors of accepted papers must transfer copyright to IEEE by utilizing the electronic IEEE Copyright Form(eCF).</strong><br>
        <strong style="font-size: 1.23em;">The following are useful tools and specific instructions:</strong><br>
        <br>
          <a href="#paper-update" class="uv-nav">[Update Submission]</a>
          |<a href="#tool-copyright" class="uv-nav">[Copyright Transfer]</a>
          |<a href="#tool-formatting" class="uv-nav">[Formatting Tool]</a>
        <hr>
        <div class="paper-update">
            <a name="paper-update"></a>
            <h2>Final Submission</h2>
            <a @click="openInNewTab(submissionSource)">[Download Detailed Guidebook with Step-by-Step Pictorial Instruction]</a><br><br>
            <p>Log into <a href="/">https://uv2018.universal-village.org/#/</a> and click "My UV" on the navigator bar on the top of the page. Click "My Submissions" and then "Papers" to access the list of paper submissions made by the account. Click "Edit" in the panel containing the desired paper to access the paper dashboard.</p>
            <p>Click "Edit" in the dashboard to access the paper details page.</p>
            <p>Click "Upload" and select the file to upload. Then click "Save" to save the file. </p>
            
        </div>
        <hr>
        <div class="tool-copyright">
            <a name="tool-copyright"></a>
            <h2>eCF - Electronic Copyright Transfer</h2>
            <a @click="openInNewTab(eCFSource)">[Download Detailed Guidebook with Step-by-Step Pictorial Instruction]</a><br><br>
            <h3>Step 1: Accessing the eCF system</h3>
            <p>Log into <a href="/">https://uv2018.universal-village.org/#/</a> and click "My UV" on the navigator bar on the top of the page. Click "My Submissions" and then "Papers" to access the list of paper submissions made by the account. Click "Edit" in the panel containing the desired paper to access the paper dashboard. Scroll down to the bottom and click on the "Copyright Submission" button to access the eCF copyright transfer system.</p>

            <h3>Step 2: Transferring the Copyright</h3>
            <p>On the page, click "Start" to commence the copyright transfer procedure.
 
            <p>Verify the article information displayed on the screen; select "Yes, this is my article" and click "Continue" to proceed to the next step.</p>
               
            <p>Edit your article details as needed by clicking the "Edit" button in the top panel; once everything is in order, click "Continue" to proceed to the next page.</p>
               
            <p>Confirm your acceptance of IEEE policies by checking the checkbox, then click "Continue" to proceed to the next page.</p>
               
            <p>If you are authorized to sign the publication agreement, select "Yes, I am authorized to sign the publication agreement"; otherwise, select "No, I am not authorized to sign the publication agreement" and fill in the information of the person with such authority. Afterwards, click "Continue" to proceed to the next page.</p>
               
            <p>Select your preference regarding granting IEEE permission to make and distribute audio/video materials of your conference presentation and comments, then click "Continue" to proceed to the next page.</p>
               
            <p>Select your employment status; copyright of publications by employees of a Crown Government, the European Union, or the United States Government may remain with the authors' respective employers. Once it is completed, click "Continue" to proceed to the next page.</p>
               
            <p>Read the publication agreement; once finished, sign in the textbox and click "Continue" to proceed to the next page.</p>
               
            <p>Download the agreement in PDF form and click "Done".</p>
        </div>
        <hr>
        <div class="tool-formatting">
            <a name="tool-formatting"></a>
            <h2>IEEE PDF eXpress</h2>
            <a @click="openInNewTab(eXpressSource)">[Download Detailed Guidebook with Step-by-Step Pictorial Instruction]</a><br><br>
            <h3>Step 1: Accessing the IEEE PDF eXpress System</h3>
            <p>The IEEE PDF eXpress system can be accessed by visiting IEEE PDF eXpress login page <a @click="openInNewTab(eXpressHome)">https://www.pdf-express.org</a>.</p>
            <ul style="list-style-type: circle;">
              <li>First-time users should create a new account as instructed in Step 2.</li>
              <li>Previous users of PDF eXpress can log in with your account and go directly to Step 3.</li>
            </ul>

            <h3>Step 2: Creating an Account</h3>
            <p>Click "New Users – Click Here" to enter account creation.</p>
             
            <p>Enter the conference ID "43900x" (without quotes), your email address, and choose a password. Then click "Submit" to advance to the next page.</p>
             
            <p>Enter your information such as name, telephone number, institution, and address, then click "Submit" to advance to the next page.</p>
             
            <p>Click "Continue."</p>
             
            <p>An online confirmation will be displayed and an email confirmation will be sent verifying your account setup.</p>

            <h3>Step 3: Uploading Manuscript for format checks</h3>
            <p>Click "Create New Title" to enter title submission stage.</p>
             
            <p>Enter the title information and click "Submit File for Checking or Converting".</p>
             
            <p>Click "Choose file" and select the file you wish to upload. Then click "Upload File" to upload the file.</p>
             
            <p>Click "Continue".</p>
             
            <p>This page displays the status of your file. You pay click "Try again" to re-upload your file after rectifying the formatting problems in your manuscript. For the ease of management, please rename the format-compliant PDF file according to the following format: [compliant]LastName.FirstName_Title.Separated.By.Dots.pdf</p>
             

            <p>For more instructions on how to use IEEE PDF eXpress, please visit <a @click="openInNewTab(eXpressMore)">http://www.pdf-express.org/frhelpnologin.asp</a>.</p>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout-content>

</template>

<script lang="js">
export default {
  name: 'submission-guide',
  props: [],
  mounted () {

  },
  data () {
    return {
      submissionSource: 'https://s3.amazonaws.com/uv2018/guides/UV2018-Submission-Update.pdf',
      eCFSource: 'https://s3.amazonaws.com/uv2018/guides/UV2018-IEEE-eCopyright-Transfer.pdf',
      eXpressSource: 'https://s3.amazonaws.com/uv2018/guides/UV2018-IEEE-PDF-eXpress.pdf',
      eXpressHome: 'https://www.pdf-express.org',
      eXpressMore: 'http://www.pdf-express.org/frhelpnologin.asp'
    }
  },
  methods: {
    openInNewTab: function (url) {
      window.open(url, '_blank')
    }
  },
  computed: {

  }
}
</script>

<style scoped>
  h1 {
    color: green;
  }
  h2 {
    color: green;
    padding-top: 5px;
  }
  h3 {
    color:green;
  }
  h4 {
    color: green;
    font-size: 16px;
  }
  li{
    font-size: 16px;
  }
  a:link {
    text-decoration: underline;
  }

  .ant-layout-content p {
    font-size: 1.2em;
    font-weight: bold;
    font-family: "Times New Roman", Times, serif;
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

<style type="text/css">
  .page-content p {
    font-size: 1.2em;
    font-weight: bold;
    font-family: "Times New Roman", Times, serif;
  }

  .page-content h1 {
    font-weight: bolder;
  }

  .page-content h2 {
    font-weight: bolder;
  }

  .page-content h3 {
    font-weight: bolder;
  }

  .page-content li {
    font-weight: bolder;
  }
</style>
