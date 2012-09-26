var usasmr = "http://registry.usa.gov/accounts/verify.json?" +
         "service_url=" + window.location.href;

var DOM = {
  insert: function( strElement, strData, strId )
  {
    objElement = document.createElement(strElement);
    if( strId ){ objElement.setAttribute('id', strId); }
    objElement.innerHTML = strData;
    document.body.appendChild(objElement);
  },
  update: function( strId, strData )
  {
    objId = document.getElementById(strId);
    objId.innerHTML = strData;
  },
  destroy: function( strID )
  {
    return (elem=document.getElementById(strID)).parentNode.removeChild(elem); 
  }
}

var Goverify = {
  template: '<div class="goverify_addon_chrome"><div class="close" onclick="this.parentNode.style.display=\'none\'">close</div><div class="goverify_content_chrome">Goverify<div id="goverify_addon_chrome_results"></div><hr \></div></div>',
  init: function( data ) {
    data = JSON.parse(data);
    if ( !data || data.length<1 ) return;
    if ( !data.verified ) return;

	results = '<p>This page belongs to ' +
	          data.agencies[0].agency_name +
			  ' an organization of the ' + 
			  data.organization +
	          '.</p><p>Updated ' +
			  data.updated_at +
			  ' by ' +
			  data.updated_by +
			  '</p><p><a href="' +
			  data.details_url +
			  ' \>More</a>';
			  
	DOM.insert("div", Goverify.template, 'klhh9867');
	DOM.update('goverify_addon_chrome_results', results);

    return;
  }
}

/* General Functions */
var Request = function( url )
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
var main = new Request(usasmr);
main.callback = Goverify.init;
main.get();
