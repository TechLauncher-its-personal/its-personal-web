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

</style>
