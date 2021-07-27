function noStyles(){
  document.styleSheets[0].disabled = true
  document.styleSheets[1].disabled = true
  document.styleSheets[2].disabled = true
  document.styleSheets[3].disabled = true
}
function reStyle(n){
  
  document.styleSheets[0].disabled = true
  document.styleSheets[1].disabled = true
  document.styleSheets[2].disabled = true
  document.styleSheets[3].disabled = true
  document.styleSheets[4].disabled = true
  
}
function closeBlackdiv() {
  var blackdiv, stylediv
  blackdiv = document.getElementById("blackdiv")
  blackdiv.parentNode.removeChild(blackdiv)
  stylediv = document.getElementById("stylediv")
  stylediv.parentNode.removeChild(stylediv)
}
function showStyle(n){
  var div, text, blackdiv
  blackdiv = document.createElement("DIV")
  blackdiv.setAttribute("style", "background-color:#000000; position:absolute;width: 100%; height: 100%; top: 0; opacity: 0.5; margin-left: -1.25rem;")
  blackdiv.setAttribute("id", "blackdiv")
  blackdiv.setAttribute("onclick", "closeBlackdiv()");
  document.body.appendChild(blackdiv)
  div = document.createElement("DIV")
  div.setAttribute("id", "stylediv")
  div.setAttribute("style", "background-color: #ffffff; padding-left: 5px; poisition: absolute; width: auto; height: auto; top: 100px; bottom: 50px; left: 200px; right: 200px; overflow: AuthenticatorAssertionResponse; font-famiily: monospace; white-space: pre; line-height: 16px;")
  div.appendChild(text)
  document.body.appendChild(div)
  //alert(document.getelementsByTagName("STYLE")[n].innerHTML)  
}
reStyle(0)