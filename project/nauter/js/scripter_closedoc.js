var custom_announcements = false;
var custom_snoo = false;
var custom_logo = false;
var custom_color = false;
var custom_readers = false;

var backgrounds_div = "";

  /** ******************************************* **/
  /** Hotfix: Announcements Offset                **/
  /** ******************************************* **/

var offset = 75;

setInterval(function() {

  if(custom_announcements == true){
    offset = 96;
  } else {
    offset = 75
  }

}, 100);


  /** ******************************************* **/
  /** Swap Enable / Disable                       **/
  /** ******************************************* **/

var addnow = "Add it now.";
var removenow = "Remove";

var classesenable = "item-button";
var classesdisable = "item-button remove";

function swapAnnouncementsOption(){
  if(custom_announcements == true){
    custom_announcements = false;
        document.getElementById("customannouncementsbutton").innerHTML = addnow + "";
        document.getElementById("customannouncementsbutton").className = classesenable + "";
  } else {
    custom_announcements = true;
        document.getElementById("customannouncementsbutton").innerHTML = removenow + "";
        document.getElementById("customannouncementsbutton").className = classesdisable + "";
  }
}

/** ************** **/

function swapReaderOption(){
  if(custom_readers == true){
    custom_readers = false;
        document.getElementById("customreaderbutton").innerHTML = addnow + "";
        document.getElementById("customreaderbutton").className = classesenable + "";
  } else {
    custom_readers = true;
        document.getElementById("customreaderbutton").innerHTML = removenow + "";
        document.getElementById("customreaderbutton").className = classesdisable + "";
  }
}

/** ************** **/

function swapSnooOption(){
	if(custom_snoo == true){
		custom_snoo = false;
  			document.getElementById("customsnoobutton").innerHTML = addnow + "";
  			document.getElementById("customsnoobutton").className = classesenable + "";
	} else {
		custom_snoo = true;
        document.getElementById("customsnoobutton").innerHTML = removenow + "";
  			document.getElementById("customsnoobutton").className = classesdisable + "";
	}
}

/** ************** **/

function swapLogoOption(){
	if(custom_logo == true){
		custom_logo = false;
  			document.getElementById("customlogobutton").innerHTML = addnow + "";
  			document.getElementById("customlogobutton").className = classesenable + "";
	} else {
		custom_logo = true;
        document.getElementById("customlogobutton").innerHTML = removenow + "";
  			document.getElementById("customlogobutton").className = classesdisable + "";
	}
}

/** ************** **/

function swapColorOption(){
  if(custom_color == true){
    custom_color = false;
        document.getElementById("customcolorbutton").innerHTML = addnow + "";
        document.getElementById("customcolorbutton").className = classesenable + "";
  } else {
    custom_color = true;
        document.getElementById("customcolorbutton").innerHTML = removenow + "";
        document.getElementById("customcolorbutton").className = classesdisable + "";
  }
}


  /** ******************************************* **/
  /** Draw Rounded Rectangles                    **/
  /** ******************************************* **/

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == "undefined" ) {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
    ctx.stroke();
  }
  if (fill) {
    ctx.fill();
  }        
}


  /** ******************************************* **/
  /** Redraw Sub Reddit Preview                   **/
  /** ******************************************* **/


function draw() {
  	var canvas = document.getElementById("subredditpreview");
	var ctx = canvas.getContext("2d");

// Draw Background

	ctx.fillStyle = "#eeeeee";
	ctx.fillRect(0,0,500,300);
	
// Draw Header

	if(custom_color == true){

		ctx.fillStyle = "#" + backgrounds_div.value;
		ctx.fillRect(0,0,500,70);

	} else {

		ctx.fillStyle = "#222d45";
		ctx.fillRect(0,0,500,70);

	}

// Draw Menu

	ctx.fillStyle = "#000000";
	ctx.globalAlpha=0.1;
    ctx.fillRect(0,50,500,20);

// Draw Subreddit Info

	ctx.globalAlpha=1;
	ctx.fillStyle = "#dadada";
	roundRect(ctx, 378, 42, 116, 64, 2, true, 0);

// Draw Search Info

	ctx.fillStyle = "#ffffff";
	roundRect(ctx, 378, 113, 116, 18, 2, true, 0);

// Draw Sidebar

	ctx.fillStyle = "#ffffff";
	roundRect(ctx, 378, 137, 116, 163, 2, true, 0);

// Draw Announcements

	ctx.fillStyle = "#dadada";
	roundRect(ctx, 6, 75, 367, 15, 2, true, 0);

// Draw Content

	ctx.fillStyle = "#ffffff";
	roundRect(ctx, 6, offset, 367, 300, 2, true, 0);

// Draw Options

	if(custom_snoo == true){
  	
    ctx.fillStyle = "#eeeeee";
    ctx.fillRect(15,32,21,21);

  }

  if(custom_logo == true){
  	
    ctx.fillStyle = "#eeeeee";
    ctx.fillRect(39,35,34,11);

  }

  if(custom_readers == true){
    
    ctx.fillStyle = "#eeeeee";
    roundRect(ctx, 382, 85, 80, 18, 2, true, false);

  }

}

  /** ******************************************* **/
  /** Constantly Change Background Colour         **/
  /** ******************************************* **/

setInterval(function() {

  var buttons_div = document.getElementById('buttons');
  buttons_div.style.backgroundColor = buttons_div.value;

  var links_div = document.getElementById('links');
  links_div.style.backgroundColor = links_div.value;
 
  backgrounds_div = document.getElementById('backgrounds');
  backgrounds_div.style.backgroundColor = backgrounds_div.value;
  
	draw();

}, 100);

  /** ******************************************* **/
  /** Remove Non-HTML Colours                     **/
  /** ******************************************* **/

document.getElementById("buttons").onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("ABCDEFabcdef0123456789".indexOf(chr) < 0)
        return false;
};

document.getElementById("links").onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("ABCDEFabcdef0123456789".indexOf(chr) < 0)
        return false;
};

document.getElementById("backgrounds").onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("ABCDEFabcdef0123456789".indexOf(chr) < 0)
        return false;
};

  /** ******************************************* **/
  /** Generate a Modal & Information              **/
  /** ******************************************* **/

var modal = document.getElementById('generated_modal');
var btn = document.getElementById("generate");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {


  if(custom_announcements != true && custom_snoo != true && custom_logo != true && custom_color != true && custom_readers != true){
    alert("You haven't selected any options.");
  }else{

    modal.style.display = "block";

  var generated_content = "";

    if(custom_announcements == true) {

    var generated_content = generated_content + "/\* \-\-\- Add-on\: Floating Announcement \-\-\- \*/\n\nbody.listing-page \> .content, body.comments-page \> .content \{margin-top\: 66px\;\}\n\n.listing-page .side .titlebox .md h5, .comments-page .side .titlebox .md h5 \{\ndisplay\: block\;\nmin-width\:550px\;\noverflow\: hidden\;\ntext-overflow\: hidden\;\nposition\: absolute\;\ntop\: 202px\;\nleft\: 16px\;\nborder-radius\: 2px\;\npadding\: 0px 15px\;\nbackground\: #f8f8f8\;\nbox-shadow\:0 1px 4px 0 rgba(0,0,0,0.14)\;\nright\: 352px\;\nfont-size\: 13px\;\nheight\: 35px\; line-height\: 35px\;\ntext-decoration\: none\;\nanimation-name\: fadein\;\nanimation-duration\: .75s\;\nanimation-iteration-count\: 1\;\n-webkit-animation-name\: fadein\;\n-webkit-animation-duration\: .75s\;\n-webkit-animation-iteration-count\: 1\;\n\}\n\n.md, .md h5 \{font-weight\: 400\;\}\n.md h5 \{border\: 0\;color\: #000 !important;\}\nh5 \{font-size\: 100%\;\}\n\n/\* \-\-\- End Add-on \-\-\- \*/\n";
  }

  if(custom_snoo == true) {

    var generated_content = generated_content + "/\* \-\-\- Addon\: Replace Snoo with your own \-\-\- \*/\n\n\#header-img.default-header, \#header-img {background\: url(\%\%snoo\%\%) no-repeat 0px 0px\;}\n\#header-img.default-header\:hover, \#header-img\:hover {background-position\: 0px 0px\;}\n\n/\* \-\-\- End Addon \-\-\- \*/\n\n";

  }

  if(custom_logo == true){

    var generated_content = generated_content + "/\* \-\-\- Addon\: Subreddit Name to Image \-\-\- \*/\n\n/\* This is the one in the header \*/\n\#header .pagename a \{\nheight: 42px\;\nwidth: 320px\;\nbackground-image: url(%%title%%)\;\nbackground-repeat: no-repeat\;\nbackground-size: auto 42px\;\ntext-indent: -9999px\;\n\}\n\n/\* This is the one in the sidebar \*/\n.side .titlebox h1.redditname a \{\ndisplay: block\;\nheight: 22px\;\nwidth: 176px\;\nbackground-image: url(%%title%%)\;\nbackground-repeat: no-repeat\;\nbackground-size: auto 100%\;\ntext-indent: -9999px\;\n\}\n\n/\* \-\-\- End Addon \-\-\- \*/\n\n";

  }

  if(custom_color == true){

    var generated_content = generated_content + "/* \-\-\- Addon: Change Subreddit's colors --- */\n\n/* Buttons */\n.morelink, .side .titlebox .md h3 a, .drop-choices a.choice:hover, .submit-page #newlink.submit.content ul.tabmenu.formtab,\n.submit_text.enabled.roundfield, body .btn, body button, .content .infobar {background-color: #" + document.getElementById("buttons").value + ";}\n\n.morelink:hover, .side .titlebox .md h3 a:hover, .btn:hover, body button:hover {background-color: #" + document.getElementById("buttons").value + ";}\n.morelink:active , .side .titlebox .md h3 a:active , .btn:active , body button:active {background-color: #" + document.getElementById("buttons").value + ";}\n\n/* Links */\n.thing .title.loggedin.click, .thing .title.click, .thing .title.loggedin, .thing .title, .link .entry .buttons li a.comments,\n.link .entry .buttons li a.flairselectbtn, .link .entry .buttons li a:hover, .titlebox .tagline a.flairselectbtn, .md a,\n.side .titlebox .md h4 a, .wiki-page .wiki-page-content .md.wiki h4, .sidebox.create .morelink a, a, .side:after, .usertext .bottom-area a.reddiquette,\n.wiki-page .pageactions .wikiaction-current, .tagline .submitter, .combined-search-page .search-result .search-result-header .search-title,\n.combined-search-page .search-result a, .combined-search-page .search-result a>mark, .combined-search-page .search-result .search-comments,\n.flairselector h2, .linefield .title, body .content .sitetable .link .title a:hover, .link .entry .tagline a:hover, .comment .author:hover {color: #" + document.getElementById("buttons").value + ";}\n\n/\* \-\-\- End Addon \-\-\- \*/\n";

  }

  if(custom_readers == true){

    var generated_content = generated_content + "/\* \-\-\- Addon\: Custom Subscribers & User Here  \-\-\- \*/\n\ndiv.titlebox span.number\:after \{\ncontent\:\" " + document.getElementById("subscribers_text").value + "\"\n\}\n\n.titlebox .users-online .number\:after \{\ncontent\:\" " + document.getElementById("here_text").value + "\"\n\}\n\n/\* \-\-\- End Addon \-\-\- \*/\n";

  }

  document.getElementById("generated_zxvc").value = generated_content + "";
    
  }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

  /** ******************************************* **/
  /** Generate 'stylesheet.css'                   **/
  /** ******************************************* **/

function download() {

  var generated_content = "";

    if(custom_announcements == true) {

    var generated_content = generated_content + "/\* \-\-\- Add-on\: Floating Announcement \-\-\- \*/\n\nbody.listing-page \> .content, body.comments-page \> .content \{margin-top\: 66px\;\}\n\n.listing-page .side .titlebox .md h5, .comments-page .side .titlebox .md h5 \{\ndisplay\: block\;\nmin-width\:550px\;\noverflow\: hidden\;\ntext-overflow\: hidden\;\nposition\: absolute\;\ntop\: 202px\;\nleft\: 16px\;\nborder-radius\: 2px\;\npadding\: 0px 15px\;\nbackground\: #f8f8f8\;\nbox-shadow\:0 1px 4px 0 rgba(0,0,0,0.14)\;\nright\: 352px\;\nfont-size\: 13px\;\nheight\: 35px\; line-height\: 35px\;\ntext-decoration\: none\;\nanimation-name\: fadein\;\nanimation-duration\: .75s\;\nanimation-iteration-count\: 1\;\n-webkit-animation-name\: fadein\;\n-webkit-animation-duration\: .75s\;\n-webkit-animation-iteration-count\: 1\;\n\}\n\n.md, .md h5 \{font-weight\: 400\;\}\n.md h5 \{border\: 0\;color\: #000 !important;\}\nh5 \{font-size\: 100%\;\}\n\n/\* \-\-\- End Add-on \-\-\- \*/\n";
  }

  if(custom_snoo == true) {

    var generated_content = generated_content + "/\* \-\-\- Addon\: Replace Snoo with your own \-\-\- \*/\n\n\#header-img.default-header, \#header-img {background\: url(\%\%snoo\%\%) no-repeat 0px 0px\;}\n\#header-img.default-header\:hover, \#header-img\:hover {background-position\: 0px 0px\;}\n\n/\* \-\-\- End Addon \-\-\- \*/\n\n";

  }

  if(custom_logo == true){

    var generated_content = generated_content + "/\* \-\-\- Addon\: Subreddit Name to Image \-\-\- \*/\n\n/\* This is the one in the header \*/\n\#header .pagename a \{\nheight: 42px\;\nwidth: 320px\;\nbackground-image: url(%%title%%)\;\nbackground-repeat: no-repeat\;\nbackground-size: auto 42px\;\ntext-indent: -9999px\;\n\}\n\n/\* This is the one in the sidebar \*/\n.side .titlebox h1.redditname a \{\ndisplay: block\;\nheight: 22px\;\nwidth: 176px\;\nbackground-image: url(%%title%%)\;\nbackground-repeat: no-repeat\;\nbackground-size: auto 100%\;\ntext-indent: -9999px\;\n\}\n\n/\* \-\-\- End Addon \-\-\- \*/\n\n";

  }

  if(custom_color == true){

    var generated_content = generated_content + "/* \-\-\- Addon: Change Subreddit's colors --- */\n\n/* Buttons */\n.morelink, .side .titlebox .md h3 a, .drop-choices a.choice:hover, .submit-page #newlink.submit.content ul.tabmenu.formtab,\n.submit_text.enabled.roundfield, body .btn, body button, .content .infobar {background-color: #" + document.getElementById("buttons").value + ";}\n\n.morelink:hover, .side .titlebox .md h3 a:hover, .btn:hover, body button:hover {background-color: #" + document.getElementById("buttons").value + ";}\n.morelink:active , .side .titlebox .md h3 a:active , .btn:active , body button:active {background-color: #" + document.getElementById("buttons").value + ";}\n\n/* Links */\n.thing .title.loggedin.click, .thing .title.click, .thing .title.loggedin, .thing .title, .link .entry .buttons li a.comments,\n.link .entry .buttons li a.flairselectbtn, .link .entry .buttons li a:hover, .titlebox .tagline a.flairselectbtn, .md a,\n.side .titlebox .md h4 a, .wiki-page .wiki-page-content .md.wiki h4, .sidebox.create .morelink a, a, .side:after, .usertext .bottom-area a.reddiquette,\n.wiki-page .pageactions .wikiaction-current, .tagline .submitter, .combined-search-page .search-result .search-result-header .search-title,\n.combined-search-page .search-result a, .combined-search-page .search-result a>mark, .combined-search-page .search-result .search-comments,\n.flairselector h2, .linefield .title, body .content .sitetable .link .title a:hover, .link .entry .tagline a:hover, .comment .author:hover {color: #" + document.getElementById("buttons").value + ";}\n\n/\* \-\-\- End Addon \-\-\- \*/\n";

  }

  if(custom_readers == true){

    var generated_content = generated_content + "/\* \-\-\- Addon\: Custom Subscribers & User Here  \-\-\- \*/\n\ndiv.titlebox span.number\:after \{\ncontent\:\" " + document.getElementById("subscribers_text").value + "\"\n\}\n\n.titlebox .users-online .number\:after \{\ncontent\:\" " + document.getElementById("here_text").value + "\"\n\}\n\n/\* \-\-\- End Addon \-\-\- \*/\n";

  }


var hiddenElement = document.createElement('a');

hiddenElement.href = 'data:attachment/text,' + encodeURI(generated_content);
hiddenElement.target = '_blank';
hiddenElement.download = 'stylesheet.css';
hiddenElement.click();

}