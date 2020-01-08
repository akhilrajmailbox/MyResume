/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Project:  cv@0.2.4 - Modern CV, Resume and Portfolio website
 * Homepage: https://github.com/akhilrajmailbox/MyResume
 * License:  MIT
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 */
function ajax(e,n,t,s,a){var o=new XMLHttpRequest;o.open(e,n),o.setRequestHeader("Accept","application/json"),o.onreadystatechange=function(){o.readyState===XMLHttpRequest.DONE&&(200===o.status?s(o.response,o.responseType):a(o.status,o.response,o.responseType))},o.send(t)}window.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("my-form"),n=document.getElementById("my-form-button"),t=document.getElementById("my-form-status");function success(){e.reset(),n.style="display: none ",t.innerHTML="Thanks!"}function error(){t.innerHTML="Oops! There was a problem. Try again...!"}e.addEventListener("submit",(function(t){t.preventDefault(),n.innerHTML="sending...",n.disabled=!0;var s=new FormData(e);ajax(e.method,e.action,s,success,error)}))}));
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Package:  cv@0.2.4
 * Build:    production-b2
 * Compiled: 2020-01-08T06:09:51 UTC
 * Commit:   7d3f7048438f130f546afac732ee556d00a1337d
 */
