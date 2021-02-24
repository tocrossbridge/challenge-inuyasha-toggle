# Inuyasha Toggle Switch

<b>Made with:</b><br/>
HTML, CSS & JS
<br/><br/>
<b>What is this?</b><br/>
A cool Inuyasha toggle :)
<br/><br/>
<b>Description:</b><br/>
It's a toggle switch, that shows Inuyasha with black when it's off and Inuyasha with white hair when it's on.
<br/><br/>
# Quick links &#128150;
<div>
  
[PROJECT SETUP](#Project-setup) &diams; [PREVIEW](#Preview) &diams; [STATUS OF THE PROJECT](#How-is-the-development-of-the-project-right-now) &diams; [CREDITS](#Credits) &diams; [BACK TO TOP](#Inuyasha-Toggle-Switch)

<div>

# Project setup
```
Open the index.html on your favorite browser :)
```

<b>Thank you for your support!</b>

# Preview

<div class="codepen" data-height="302" data-theme-id="dark" data-default-tab="js,result" data-user="wolfhaltz" data-slug-hash="eYBEQOg" data-prefill='{"title":"Inuyasha Toggle Switch","tags":[],"scripts":[],"stylesheets":[]}'>
  <pre data-lang="html">&lt;label class="switch">
  &lt;input type="checkbox" id="checkInuyasha" onchange="showInuyasha()">
  &lt;span class="slider round">&lt;/span>
&lt;/label>

&lt;div class="inuyasha--night" id="isDay">&lt;/div></pre>
  <pre data-lang="css">.switch{
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input{
  opacity: 0;
  width: 0;
  height: 0;
}

.slider{
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, #fff 20%, transparent 22%),#000;
  background-size: 10px 10px;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before{
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 4px;
  bottom: 4px;
  background-color: #fff;
  border: 3px solid lightgrey;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider{
  background: #2196F3;
}
input:checked + .slider:before{
  background: yellow;
  border: 3px solid orange;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before{
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round{
  border-radius: 34px;
}
.slider.round:before{
  border-radius: 50%;
}


/* INUYASHA */
.inuyasha--day{
  height: 100px;
  width: 100px;
  background-size: contain;
  backgroud-repeat: no-repeat;
  background-image: url('http://3.bp.blogspot.com/-LDLUwe87e_8/TbHYN3u6EzI/AAAAAAAAACU/zjVZAo2ycZI/s1600/inuyasha%255B1%255D.jpg');
}

.inuyasha--night{
  height: 100px;
  width: 100px;
  background-size: cover;
  backgroud-repeat: no-repeat;
  background-image: url('https://i.pinimg.com/originals/1c/0a/03/1c0a03f6b50cb5d0f993ee7635390802.png');
}

.inuyasha--day:hover, .inuyasha--night:hover{
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}</pre>
  <pre data-lang="js">function showInuyasha(){
  var checkbox = document.getElementById('checkInuyasha');

var imageInuyasha = document.getElementById('isDay');
  
  if(checkbox.checked === false){
  imageInuyasha.classList.remove("inuyasha--day");
    imageInuyasha.classList.add("inuyasha--night");
  }else{
  imageInuyasha.classList.remove("inuyasha--night");
    imageInuyasha.classList.add("inuyasha--day");
  }
}
</pre></div>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="wolfhaltz" data-slug-hash="eYBEQOg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Inuyasha Toggle Switch">
  <span>See the Pen <a href="https://codepen.io/wolfhaltz/pen/eYBEQOg">
  Inuyasha Toggle Switch</a> by Beatriz Rodrigues (<a href="https://codepen.io/wolfhaltz">@wolfhaltz</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


# How is the development of the project right now?
<b>Last update:</b> 24/02/2021

First version uploaded.

<br/>

# Credits

Google imgs


<div>
  
[PROJECT SETUP](#Project-setup) &diams; [PREVIEW](#Preview) &diams; [STATUS OF THE PROJECT](#How-is-the-development-of-the-project-right-now) &diams; [CREDITS](#Credits) &diams; [BACK TO TOP](#Inuyasha-Toggle-Switch)

<div>
