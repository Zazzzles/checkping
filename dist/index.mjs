export default function(e,t){var n=this,i=new RegExp("^https?://","i").test(e)?e:"https://"+e;return new Promise(function(e,a){var o=(new Date).getTime();n.request_image(i).then(function(){var n=(new Date).getTime()-o;e(n*=t||.9)}).catch(function(e){console.log("Image get issue:",e),a(e)})})}
//# sourceMappingURL=index.mjs.map
