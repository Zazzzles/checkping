module.exports=function(e,t){var n=this,i=new RegExp("^https?://","i").test(e)?e:"https://"+e;return new Promise(function(e,o){var s=(new Date).getTime();n.request_image(i).then(function(){var n=(new Date).getTime()-s;e(n*=t||.9)}).catch(function(e){console.log("Image get issue:",e),o(e)})})};
//# sourceMappingURL=index.js.map
