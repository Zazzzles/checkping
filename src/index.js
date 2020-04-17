function request_image(url, timeout = 5000) {
  return new Promise((resolve, reject) => {
    let tko = setTimeout(() => {
      reject("Timed out");
    }, timeout);

    var img = new Image();
    img.onload = function () {
      clearTimeout(tko);
      resolve(img);
    };
    img.onerror = function () {
      resolve(img);
    };
    img.src =
      url +
      "?random-no-cache=" +
      Math.floor((1 + Math.random()) * 0x10000).toString(16);
  });
}

export default function (url, multiplier) {
  const re = new RegExp("^https?://", "i"),
    pingUrl = re.test(url) ? url : "https://" + url;
  return new Promise((resolve, reject) => {
    let start = new Date().getTime();
    request_image(pingUrl)
      .then(() => {
        let delta = new Date().getTime() - start;
        delta *= multiplier || 0.9;
        resolve(delta);
      })
      .catch((err) => {
        console.log("Image get issue:", err);
        reject(err);
      });
  });
}
