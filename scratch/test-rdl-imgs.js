const https = require("https");

const rdlUrls = [
  "https://researchdesignlab.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/i/lifi-nano.jpg",
  "https://researchdesignlab.com/media/catalog/product/lifi-nano-v2.jpg",
  "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/thumbnails/thumbnail-ab3ab29b-1027-406e-80a1-0234578e0b99.png",
  "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/rs%3Dw_600%2Ccg_true-fee0e50.png",
  "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/HMI.png",
  "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/5-2bf31c7.jpg",
  "https://img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/MAKE_IN_INDIA.jpg"
];

rdlUrls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${res.statusCode} -> ${url}`);
  });
});
