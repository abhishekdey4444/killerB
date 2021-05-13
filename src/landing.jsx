import React from "react";
import "./style.css";
import Abhishekimg from "./imgs/concept.png";
import Reactimg from "./imgs/react.png";
import Htmlimg from "./imgs/html.png";
import Cssimg from "./imgs/css.png";
import Jsimg from "./imgs/js.png";
import Arrowimg from "./imgs/arrow.png";
import Dpsimg from "./imgs/dps.png";
import Iemimg from "./imgs/iem.png";
import Logoimg from "./imgs/logo.png";
import Waveimg from "./imgs/wave.png";
import Wave1img from "./imgs/wave1.png";
import Wave2img from "./imgs/wave2.png";
import Upperimg from "./imgs/upperwave.png";
import Upper1img from "./imgs/upperwave1.png";
import Upper2img from "./imgs/upperwave2.png";
import Htmlpimg from "./imgs/htmlp.png";
import Csspimg from "./imgs/cssp.png";
import Jspimg from "./imgs/jsp.png";
import Reactpimg from "./imgs/reactp.png";
import Hackerrankimg from "./imgs/hackerrank.png";
import Codechefimg from "./imgs/codechef.png";
import Googleimg from "./imgs/google.png";
import Microsoftimg from "./imgs/microsoft.png";
import Hacktoberimg from "./imgs/hacktober.png";
import Pankhimg from "./imgs/pankh.png";
import Starimg from "./imgs/star.png";
import Spsimg from "./imgs/sps.png";
import Tttimg from "./imgs/tictactoe.png";
import Waimg from "./imgs/wa.png";
import Twimg from "./imgs/twitter.png";
import Lnimg from "./imgs/linkedin.png";
import Fbimg from "./imgs/fb.png";
import Gitimg from "./imgs/github.png";
import Resumeimg from "./imgs/resume.png";
import Cv from "./data/Abhishek Kumar Dey CV.pdf";

function Landing() {
  return <div >
    <section id="section1" >
   <a href="#section1">
    <img src={Logoimg} className="logo"
         alt="NA"/></a>

    <div className="menu">
    <ul>
    <li><a href ="#section1" className="active">HOME</a></li>
    <li><a href ="#section2">EDUCATION</a></li>
    <li><a href ="#section3">SKILLS</a></li>
    <li><a href ="#section4">ACHIVEMENTS</a></li>
    <li><a href ="#section5">PROJECTS</a></li>
    <li><a href ="#section6">CONTACT</a></li>
    </ul>
    </div>
    <div className = "main-img" >
       <div className="icon-box">
         <div className = "icons" >
              <img className = "react img"
                 src = { Reactimg}
                 alt = "NA" / >
               <img className = "html img"
                 src = {Htmlimg}
                 alt = "NA" / >
                 <img className = "css img"
                  src = {Cssimg}
                  alt = "NA" / >
    <
                img className = "js img"
                src = {Jsimg}
                alt = "NA" / >
          </div>
          </div>
<img className = "m-img"
  src = {Abhishekimg}
  alt = "NA" / >
  <div className="heading">
   <h1 className="iam">I AM</h1>
   <h1 className="ki">Abhishek</h1>
   <div className="hrbar"></div>
   <h3 className="des">Front-end Developer</h3>
  </div>
  <a href={Cv} target="blank">
  <div className="resbtn">
  <img src={Resumeimg} className="resume"
       alt="NA"/>
  <div className="rescir"></div>
  <h1> Download Resume</h1>
  </div>
  </a>
    </div>
    <div className="arrow">
    <a href="#section2">
    <img src={Arrowimg}
         alt="NA"/>
         </a>
         </div>
    </section>





    <section id="section2">
    <div className="subhead">
    <h1>Education</h1>
    </div>
      <div className="hr">
      <div className="line1">
      <div className="dpsbox">
      <a href="http://dpsbokaro.com" target="blank"><img src={Dpsimg} className="dps"
           alt="NA"/></a>
      <h4>Delhi Public School</h4>
      <h5>Bokaro Steel City</h5>
      <p>(2004 - 2019)</p>
      <p>The school with its motto "Service before Self" has been serving the society in the field of education. </p>
      </div>
      </div>
      <div className="line2">
      <div className="iembox">
      <a href="https://iem.edu.in/" target="blank"><img src={Iemimg} className="iem"
           alt="NA"/></a>
           <h4>Institute of Engineering and Management</h4>
           <h5>Kolkata</h5>
           <p>(2019 - Present)</p>
           <p>To assist students to understand seamless nature of knowledge and to apply the acquired knowledge to practical use.</p>
           </div>
      </div>
      </div>
    <footer>
    <img src={Waveimg} className="wave"
         alt="NA"/>
         <img src={Wave1img} className="wave1"
              alt="NA"/>
              <img src={Wave2img} className="wave2"
                   alt="NA"/>
    </footer>
    </section>



    <section id="section3">
    <div className="uwave">
    <img src={Upperimg} className="upperwave"
         alt="NA"/>
         <img src={Upper1img} className="upperwave1"
              alt="NA"/>
              <img src={Upper2img} className="upperwave2"
                   alt="NA"/>
    </div>
    <div className="subhead2">
    <h1>Skills</h1>
    </div>
    <div className="progressbarimgs">



    <img src={Htmlpimg} className="htmlp"
         alt="NA"/>
         <p className="t1">HTML</p>
         <div className="bar1">
         </div>
         <div className="bar1d">
         </div>
         <p className="pr1">90%</p>



         <img src={Csspimg} className="cssp"
              alt="NA"/>
              <p className="t2">CSS</p>
              <div className="bar2">
              </div>
              <div className="bar2d">
              </div>
              <p className="pr2">80%</p>



              <img src={Jspimg} className="jsp"
                   alt="NA"/>
                   <p className="t3">JS</p>
                   <div className="bar3">
                   </div>
                   <div className="bar3d">
                   </div>
                   <p className="pr3">70%</p>


                   <img src={Reactpimg} className="reactp"
                        alt="NA"/>
                        <p className="t4">REACT</p>
                        <div className="bar4">
                        </div>
                        <div className="bar4d">
                        </div>
                        <p className="pr4">60%</p>

    </div>

    </section>
    <section id="section4">
    <div className="subhead3">
    <h1>Achievements</h1>
    </div>
    <div className="achbox">





    <div className="circlepurple">
    <img src={Hackerrankimg} className="hackerrank"
         alt="NA"/>
    <h3 className="hackerh">HackerRank</h3>
    <p className="hackerp">
    Sucessfully got the gold badge in Python i.e - 5stars.
    </p>
    </div>
    <div className="circlepurple">
    <img src={Codechefimg} className="codechef"
         alt="NA"/>
         <h3 className="codechefh">Codechef</h3>
         <p className="codechefp">
         Earned 2 stars on the competative platform.
         </p>
    </div>
    <div className="circlepurple">
    <img src={Hacktoberimg} className="hacktober"
         alt="NA"/>
         <h3 className="hacktoberh">Hacktober Fest</h3>
         <p className="hacktoberp">
         Completed the hacktober fest challenge and earned the swags.
         </p>
    </div>
    <div className="circlepurple">
    <img src={Microsoftimg} className="microsoft"
         alt="NA"/>
         <h3 className="microsofth">Microsoft Workshop</h3>
         <p className="microsoftp">
         Participated in the Cloud Tech (AZURE) workshop.
         </p>
    </div>
    <div className="circlepurple">
    <img src={Googleimg} className="google"
         alt="NA"/>
         <h3 className="googleh">Google Kickstart</h3>
         <p className="googlep">
         Got a rank of 4124 in round H 2020.
         </p>
    </div>
    <div className="circlepurple">
    <img src={Pankhimg} className="pankh"
         alt="NA"/>
         <h3 className="pankhh">Pankh Debate & Photography</h3>
         <p className="pankhp">
         Participated and won the Photography and Debate competition.
         </p>
    </div>

    </div>






    </section>




    <section id="section5">
    <div className="uwave">
    <img src={Upperimg} className="upperwave"
         alt="NA"/>
         <img src={Upper1img} className="upperwave1"
              alt="NA"/>
              <img src={Upper2img} className="upperwave2"
                   alt="NA"/>
    </div>
    <div className="subhead4">
    <h1>Projects</h1>
    </div>

    <div className="startbox">
    <img src={Starimg} className="star"
         alt="NA"/>
         <img src={Starimg} className="star"
              alt="NA"/>
    </div>

    <div className="cardbox">
    <div className="card">
    <img src={Spsimg} className="sps"
         alt="NA"/>
    <h3 className="spsh">Stone Paper Scissors</h3>
    <p className="spsp">
    It is a web app made with HTML, CSS and
JavaScript. We can play a game of stone paper
scissors with the CPU.
    </p>
    <div className="btn">
    <a href="https://abhishekdey4444.github.io/sps/" target="blank">
    Github Link</a>
    </div>
    </div>



    <div className="card">
    <img src={Tttimg} className="ttt"
         alt="NA"/>
         <h3 className="ttth">Tic-Tac-Toe Game</h3>
         <p className="tttp">
         It is a game based on python language, this allows a 2
players game and fun to play.
         </p>
         <div className="btn">
         <a href="https://github.com/abhishekdey4444/tic-tac-toe" target="blank">Github Link</a>
         </div>
         </div>


    <div className="card">
    <img src={Waimg} className="wa"
         alt="NA"/>
         <h3 className="wah">Weather App</h3>
         <p className="wap">
         This weather app is made with the help of OpenWeather
API. It shows the temperature of any city given by the
user
         </p>
         <div className="btn">
         <a href="https://github.com/abhishekdey4444/weatherApp" target="blank">Github Link</a>
         </div>
         </div>
         </div>


    </section>



  <section id="section6">
<div className="subhead5">
<h1>Contact</h1>
</div>

<a href="mailto:abhishekdey4444@gmail.com">
<div className="emailbox">
<h2 className="email">Email - abhishekdey4444@gmail.com</h2>
</div>
</a>
<div className="smhbox">


<div class="smhcard">
<a href="https://www.linkedin.com/in/abhishek-k-a62259130/" target="blank">
<img src={Lnimg} className="ln"
     alt="NA"/>
     <h3 className="lnh">Linkedin</h3>
     </a>
</div>

<div class="smhcard">
<a href="https://github.com/abhishekdey4444" target="blank">
<img src={Gitimg} className="git"
     alt="NA"/>
     <h3 className="gith">GitHub</h3>
     </a>
</div>

<div class="smhcard">
<a href="https://twitter.com/kraken_head" target="blank">
<img src={Twimg} className="tw"
     alt="NA"/>
     <h3 className="twh">Twitter</h3>
     </a>
</div>

<div class="smhcard">
<a href="https://www.facebook.com/profile.php?id=100009468276374" target="blank">
<img src={Fbimg} className="fb"
     alt="NA"/>
     <h3 className="fbh">Facebook</h3>
     </a>
</div>


</div>

<footer>
<img src={Waveimg} className="wave"
     alt="NA"/>
     <img src={Wave1img} className="wave1"
          alt="NA"/>
          <img src={Wave2img} className="wave2"
               alt="NA"/>
</footer>



  </section>
    </div>
}
export default Landing;
