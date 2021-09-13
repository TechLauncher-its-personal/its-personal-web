<template>
<header>
   <nav id="navbar">
     <h1 class="logo"><a href="index.html">ISS</a></h1>
     <ul>
       <li><a href="index.html">Home</a></li>
       <li><a href="about.html">About</a></li>
       <li><a href="signin.html">Sign in</a></li>
     </ul>
   </nav>

   <div id="showcase">
     <div class="container">
       <div class="showcase-content">
         <h1><span class="text-primary">Seeking customize news with</span> </h1>
         <h2>The Open Virtual Assistant</h2>
         <p class="lead">you can achieve news that you interested in and dig out more details through
         communicating with open virtual assistant we design.</p>
         <a class="btn" href="chatbot.html">Try Now</a>
         <a class="btn" href="signup.html">Sign Up</a>

       </div>
     </div>

   </div>
 </header>
 
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
 <div class="clr"></div>


 <footer id="main-footer">
   <p>Its Personal &copy; 2021, All Rights Reserved</p>

 </footer>


 
</template>

<script>
export default{
  data(){

  }
}


</script>

<style>
/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* Main styling */
html,body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.7em;

}

a {
    color:#333;
    text-decoration: none;
}

h1,h2,h3 {
    padding-bottom: 20px;
}
p{
    margin: 10px 0;
}

/*Utility*/
.container{
    margin:auto;
    max-width: 1100px;
    overflow: auto;
    padding: 0 20px; 

}
.text-primary{
    color:#eca072;
}
.lead{
    font-size: 20px;
}

.btn{
    display: inline-block;
    font-size: 18px;
    color: #fff;
    background: #003366;
    padding: 13px 20px;
    margin-right: 50px;
    border: none;
}
.btn:hover{
    background: #eca072;
    color: #003366;

}
.bg-primary{
    background: #eca072;
    color: #fff;
}
.bg-light{
    background:#2f9fe3;
    color:#fff;
}
.clr{
    clear: both;
}

/* Navbar */
#navbar {
    background:#2f9fe3;
    color:#fff;
    overflow: auto;

}
#navbar a{
    color:#fff;


}
#navbar h1{
    float:left;
    padding-top: 20px;
    padding-left: 20px;

}

#navbar ul{
    list-style: none;
    float: right;

}
#navbar ul li{
    float: left;

}
#navbar ul li a{
    display: block;
    padding: 20px;
    text-align: center;
}

#navbar ul li a:hover{
    background:#45a9e6;
    color:#eca072;
}

body{
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 10px;
    background-color: #ebebeb;
}

/* Showcase */
#showcase {
    background: url('../../assets/showcase.jpg') no-repeat center center/cover;
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

/* Footer */
#main-footer {
    text-align: center;
    background: #003366;
    color: #fff;
    padding: 20px;

}

</style>
