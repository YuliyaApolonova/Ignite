
function getImage(url) {

   return new Promise(function (resolve, reject) {

      let xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.responseType = "blob";

      xhr.onload = () => {
         if (xhr.status === 200) {
            let img = document.createElement('img');
            img.src = window.URL.createObjectURL(xhr.response);
            resolve(img);
         }
         else {
            reject(new Error('Image load error: ' + xhr.statusText));
         }
      };

      xhr.send();

   });
};
getImage('image.jpg')
      .then((img) => {
               var example = document.getElementById('example');
               example.appendChild(img);
               console.log("img", img);
            },
            (err) => {
               console.log(err);
               alert(err);
            });