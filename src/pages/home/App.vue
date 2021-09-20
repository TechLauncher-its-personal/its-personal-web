<template>
    <Header/>

    <div id="showcase">
      <div class="container">
        <div class="showcase-content">
          <h1><span class="text-primary">Seeking customize news with</span> </h1>
          <h2>The Open Virtual Assistant</h2>
          <p class="lead">you can achieve news that you interested in and dig out more details through
          communicating with open virtual assistant we design.</p>
          <a class="btn" href="#realchatbox">Try Now</a>
          <a class="btn" v-on:click="almondLogin()">Sign Up</a>
        </div>
      </div>
    </div>

    <div id="realchatbox">
      <ChatBox/>
    </div>
 
    <section id="feature">
      <div class="box bg-light">
        <i class="fas fa-envelope-open-text fa-3x"></i>
        <h3>Contact us</h3>
        <p>Give your precious feedback</p>
      </div>
      <div class="box bg-primary">
        <i class="fas fa-book-reader fa-3x"></i>
        <h3>Check Documents</h3>
        <p>Find more resources about virtual personal assistant</p>
      </div>
      <div class="box bg-light">
        <i class="fas fa-tools fa-3x"></i>
        <h3>Enabled Skills</h3>
        <p>The skills we used</p>
      </div>
    </section>

    <div class="clr"/>
    <Footer/>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import ChatBox from '../../components/ChatBox.vue'

//const axios = require('axios');

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ChatBox
  },
  methods: {
    almondLogin: function() {
      console.log("Login using Almond");
      const url = "https://almond.stanford.edu/me/api/oauth2/authorize?"
                    + "response_type=code"
                    + "&client_id=f79d32042f46485a"
                    + "&redirect_uri=https://its-personal-web.herokuapp.com/almond_auth"
                    + "&scope=profile user-read user-read-results user-exec-command developer-read";
      location.href = url;
    }
  }

//  created() {
//    axios.get('https://almond.stanford.edu/me/api/oauth2/authorize', {
//      params: {
//        response_type: "code",
//        client_id: "f79d32042f46485a",
//        redirect_uri: "https://its-personal-web.herokuapp.com/almond_auth",
//        scope: "profile user-read user-read-results user-exec-command developer-read"
//      }
//    }).then(response =>
//      console.log(response)
//    ).catch(error => {
//      this.errorMessage = error.message;
//      console.error("There was an error!", error);
//    })
//  }
}
</script>

<style>
/* Showcase */
#showcase {
    background: url('../../assets/background.png') no-repeat center center/cover;
    height: 800px;
}

#showcase .showcase-content {
    color: #003366;
    text-align: center;
    padding-top: 170px;
}    

#showcase .showcase-content h1,h2{
    font-size: 60px;
    line-height: 1.2em;
}

#showcase .showcase-content p{
    padding-bottom: 20px;
    line-height: 1.7em;
}

.showcase::before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255 ,255, 0);
}

.showcase *{
    z-index: 10;
}

/* Features */
.box{
    float: left;
    width: 33.3%;
    padding: 50px;
    text-align: center;
}

.box i{
    margin-bottom: 10px;
}

.box bg-light a:hover{
    background:#45a9e6;
    color:#eca072;
}
</style>
