/*
# ==================================================================== #
# TITLE                                                                #
# Antimicrobial Resistance (AMR) Analysis for R                        #
#                                                                      #
# SOURCE                                                               #
# https://github.com/msberends/AMR                                     #
#                                                                      #
# LICENCE                                                              #
# (c) 2018-2021 Berends MS, Luz CF et al.                              #
# Developed at the University of Groningen, the Netherlands, in        #
# collaboration with non-profit organisations Certe Medical            #
# Diagnostics & Advice, and University Medical Center Groningen.       # 
#                                                                      #
# This R package is free software; you can freely use and distribute   #
# it for both personal and commercial purposes under the terms of the  #
# GNU General Public License version 2.0 (GNU GPL-2), as published by  #
# the Free Software Foundation.                                        #
# We created this package for both routine data analysis and academic  #
# research and it was publicly released in the hope that it will be    #
# useful, but it comes WITHOUT ANY WARRANTY OR LIABILITY.              #
#                                                                      #
# Visit our website for the full manual and a complete tutorial about  #
# how to conduct AMR analysis: https://msberends.github.io/AMR/        #
# ==================================================================== #
*/

// Add updated Font Awesome 5.8.2 library
$('head').append('<!-- Updated Font Awesome library --><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">');

$(document).ready(function() {

  // add SurveyMonkey
  // $('body').append('<script>(function(t,e,s,o){var n,a,c;t.SMCX=t.SMCX||[],e.getElementById(o)||(n=e.getElementsByTagName(s),a=n[n.length-1],c=e.createElement(s),c.type="text/javascript",c.async=!0,c.id=o,c.src=["https:"===location.protocol?"https://":"http://","widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2BrwaGaWbg59AiLjNGdPaaJiBHKqgXKIw46VauwBvZ67.js"].join(""),a.parentNode.insertBefore(c,a))})(window,document,"script","smcx-sdk");</script>');
  // add link to survey at home sidebar
  // $('.template-home #sidebar .list-unstyled:first').append('<li><strong>Please fill in our survey at</strong> <br><a href="https://www.surveymonkey.com/r/AMR_for_R" target="_blank">https://www.surveymonkey.com/r/AMR_for_R</a></li>');


  // remove version label from header
  $(".version.label").remove();

  // redirect GitLab to GitHub
  var url_old = window.location.href;
  var url_new = url_old.replace("gitlab", "github");
  if (url_old != url_new) {
    window.location.replace(url_new);
  }

  // Replace 'Value' in manual to 'Returned value'
  $(".template-reference-topic h2#value").text("Returned value");

  // PR for 'R for Data Science' on How To pages
  if ($(".template-article").length > 0) {
    $('#sidebar').prepend(
    '<div id="r4ds">' +
    '  <a target="_blank" href="https://r4ds.had.co.nz/">' +
    '    Learn R reading this great book: R for Data Science.' +
    '    <br><br>' +
    '    Click to read it online - it was published for free.' +
    '    <img src="https://github.com/msberends/AMR/raw/master/docs/cover_r4ds.png" height="100px">' +
    '  </a>     ' +
    '  <hr>' +
    '</div>');
  }

  // edit footer
  $('footer').html(
    '<div>' +
      '<p><code>AMR</code> (for R). Developed at the <a href="https://www.rug.nl">University of Groningen</a> in collaboration with non-profit organisations <a href="https://www.certe.nl">Certe Medical Diagnostics and Advice</a> and <a href="https://www.umcg.nl">University Medical Center Groningen</a>.</p>' +
            '<a href="https://www.rug.nl"><img src="https://github.com/msberends/AMR/raw/master/docs/logo_rug.png" class="footer_logo"></a>' + 
    '</div>');
  // all links should open in new tab/window
  $('footer').html($('footer').html().replace(/href/g, 'target="_blank" href'));

  // doctoral titles of authors
  function doct_tit(x) {
    if (typeof(x) != "undefined") {
      // authors
      x = x.replace(/Author, maintainer/g, "Main developer");
      x = x.replace(/Author, contributor/g, "Main contributor");
      x = x.replace(/Author, thesis advisor/g, "Doctoral advisor");
      x = x.replace("Alex", "Prof. Dr. Alex");
      x = x.replace("Bhanu", "Prof. Dr. Bhanu");
      x = x.replace("Casper", "Prof. Dr. Casper");
      x = x.replace("Corinna", "Dr. Corinna");
      // others
      x = x.replace("Bart", "Dr. Bart");
      x = x.replace("Sofia", "Dr. Sofia");
      x = x.replace("Dennis", "Dr. Dennis");
      x = x.replace("Judith", "Dr. Judith");
      x = x.replace("Gwen", "Dr. Gwen");
      x = x.replace("Anthony", "Dr. Anthony");
      x = x.replace("Rogier", "Dr. Rogier");
    }
    return(x);
  }
  $(".template-authors").html(doct_tit($(".template-authors").html()));
  $(".template-citation-authors").html(doct_tit($(".template-citation-authors").html()));
  $('.template-citation-authors h1').eq(0).text('How to cite');
  $('.template-citation-authors h1').eq(1).text('All contributors');
  $(".developers").html(doct_tit($(".developers").html()));
  $(".developers a[href='authors.html']").text("All contributors...");

  // Edit title of manual
  $('.template-reference-index h1').text('Manual');
});

$('head').append("<!-- Global site tag (gtag.js) - Google Analytics --> <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-172114740-1\"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-172114740-1'); </script><!-- Matomo --><script type='text/javascript'> var _paq = _paq || []; /* tracker methods like 'setCustomDimension' should be called before 'trackPageView' */ _paq.push(['setDomains', ['*.msberends.github.io/AMR']]); _paq.push(['enableCrossDomainLinking']); _paq.push(['trackPageView']); _paq.push(['enableLinkTracking']); (function() { var u='https://analyse.uscloud.nl/'; _paq.push(['setTrackerUrl', u+'piwik.php']); _paq.push(['setSiteId', '3']); var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);  })();</script><!-- End Matomo Code -->");
