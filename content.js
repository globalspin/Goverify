/*
  Goverify - Social Media Verification
    Christopher Woodall
    woodall.christopher@gmail.com
    http://www.christopherwoodall.com
*/
'use strict';
var d,usasmr,Request,Goverify;

// Variables
d = document;
usasmr = "http://registry.usa.gov/accounts/verify.json?" +
         "service_url=" + window.location.href;  /* USA.gov Social Media
                                                    Registry API
                                                */

function Goverify( data )
{
  data = JSON.parse(data);
  if ( !data || data.length<1 ) return;
  if ( !data.verified ) return;
  //append my css file.. tracking? 
  document.getElementsByTagName("body")[0].innerHTML += [
"<link rel=\"stylesheet\" href=\"//christopherwoodall.com/goverify/css/foundation.css\">",
"<div class=\"alert-box alert\" style=\"position: fixed;top: 0;left: 0;z-index: 9999;width: 100%;\">",

"  <div class=\"row\">",
"    <div class=\"twelve columns\">",
"      <div class=\"three columns\">",
"        <h2>Goverify</h2>",

"        <p>Government Verification</p>",
"      </div>",
"      <div class=\"six columns\">		<!-- Content -->",
"        <div class=\"row\">",

"          <div class=\"twelve columns\" style=\"padding-top:24px;color:#000;\">",
"	    WATCH ON YOUTUBE belongs to the "+data.agencies[0].agency_name+", an organization of the "+data.organization+".",
"	  </div>",
"	</div>",
"	<div class=\"row\">",
"	  <div class=\"twelve columns\" style=\"padding-top:6px;padding-bottom:6px;\">",
"	    <span class=\"radius secondary label\">",
"	      <a href=\"http://registry.usa.gov"+data.details_url+"\">More</a>",
"	    </span>",
"	  </div>",
"        </div>",
"	<div class=\"row\">",
"	  <div class=\"twelve columns\" style=\"color:#000\">",
"            Updated "+data.updated_at+" by "+data.updated_by,
"          </div>",
"	</div>",
"      </div>",
"      <div class=\"three columns\">",
"        <iframe src=\"http://rcm.amazon.com/e/cm?t=myfaonats-20&o=1&p=6&l=bn1&mode=pc-hardware&browse=13900871&fc1=000000&lt1=_blank&lc1=3366FF&bg1=FFFFFF&f=ifr\" marginwidth=\"0\" marginheight=\"0\" width=\"120\" height=\"150\" border=\"0\" frameborder=\"0\" style=\"border:none;\" scrolling=\"no\"></iframe>",
"      </div>",
"      <a href=\"\" class=\"close\">",
"        <span class=\"has-tip\" title=\"Close\">&times;</span>",
"      </a>",
"    </div>",
"  </div>		<!-- Content -->",
"</div>			<!-- /Master View -->",].join('\n');
  /*document.write();*/
  return;
}

/* General Functions */
Request = function( url )
{
  this.url = url;
  this.callback = console.log; //default
}

Request.prototype.get = function()
{
  var xhr, pong;
  pong = this.callback;
  xhr = new XMLHttpRequest();
  xhr.open( 'GET', this.url, true );
  xhr.onload = function()
  {
    pong(xhr.response);
  };
  xhr.onerror = function()
  {
    return 0;
  };
  xhr.send();
}

/* Launcher */
var a = new Request(usasmr);
a.callback = Goverify;
a.get();
