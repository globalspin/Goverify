var d,gvd,gvs;
d = document;
function goverify( response )
{
  /* preparsing */ 
  if ( !response || response.length<1 ){ return false; }
  if ( !response.verified || response.verified != true ){ return false; }
   /* /preparsing */
  
  /* preparing DOM */
   gvd = d.createElement('div');
   gvd.setAttribute('id', 'goverify_container');
  /* /preparing DOM */

  /* adjusting variables */
  gvs = ["  <div class=\"close\">X</div>",
"  <div class=\"title\">",
"    <h1>",
"      Goverify",
"      <p>",
"        Goverment Social-Media Verification.",
"      </p>",
"    </h1>",
"  </div> <!-- /title -->",
"  <div class=\"content\">",
"  <p>",
"  <span>"+response.display_name+"</span> belongs to <a href=\""+response.info_url+"\">"+response.organization+"</a>, an organization of "+response.agencies[0].agency_name+". To find out more, click <a href=\"http://registry.usa.gov"+response.details_url+"\"> here</a>.",
"  </p>",
"  <p>",
"  This listing was updated on "+response.updated_at+" by "+response.updated_by+".",
"  </div> <!-- /content -->"].join('\n');
  gvd.innerHTML = gvs;
  /* adjusting variables */

  /* launching */
  console.log("test");
  d.body.appendChild(gvd);
  return true;
 /* God Bless America */
}