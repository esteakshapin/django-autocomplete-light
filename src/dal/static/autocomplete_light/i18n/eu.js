var dalLoadLanguage=function(e){var n;e&&e.fn&&e.fn.select2&&e.fn.select2.amd&&(n=e.fn.select2.amd),n.define("select2/i18n/eu",[],function(){return{inputTooLong:function(e){var n=e.input.length-e.maximum,t="Idatzi ";return(t+=1==n?"karaktere bat":n+" karaktere")+" gutxiago"},inputTooShort:function(e){var n=e.minimum-e.input.length,t="Idatzi ";return(t+=1==n?"karaktere bat":n+" karaktere")+" gehiago"},loadingMore:function(){return"Emaitza gehiago kargatzen…"},maximumSelected:function(e){return 1===e.maximum?"Elementu bakarra hauta dezakezu":e.maximum+" elementu hauta ditzakezu soilik"},noResults:function(){return"Ez da bat datorrenik aurkitu"},searching:function(){return"Bilatzen…"},removeAllItems:function(){return"Kendu elementu guztiak"}}}),n.define,n.require},event=new CustomEvent("dal-language-loaded",{lang:"eu"});document.dispatchEvent(event);