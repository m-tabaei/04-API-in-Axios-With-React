let html = "";
let fetchProducts = () => {
  try {
    axios.get("http://localhost:3004/products").then((res) => {
      res.data.forEach((element) => {
        html += `<div class="product">
                <h1>${element.title}</h1>
                <h2>Price:${element.price}</h2>
                <img src="${element.image}" alt="${element.title}">
                ${
                  element.publish === true
                    ? `<span>available</span>`
                    : `<span class='bgRed'>unAvailable</span>`
                }
            </div>`;
        document.querySelector("div.products").innerHTML = html;
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};
fetchProducts();











// let fetchProducts = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let xml = new XMLHttpRequest();
//       xml.open("get", "http://localhost:3004/products");
//       xml.responseType = "json";
//       xml.onload = () => {
//         resolve(xml.response);
//       };
//       xml.onerror = () => {
//         reject("error");
//       };
//       xml.send(null);
//     }, 1000);
//   });
// };
// let html = "";
// let showData = () => {
//   fetchProducts()
//     .then((res) => {
//       res.forEach((element) => {
//         html += `<div class="product">
//         <h1>${element.title}</h1>
//         <h2>Price:${element.price}</h2>
//         <img src="${element.image}" alt="${element.title}">
//         ${element.publish===true?`<span>available</span>`:`<span class='bgRed'>unAvailable</span>`}
//     </div>`;
//       });
//       document.querySelector('div.products').innerHTML=html
//     })
//     .catch((err) => console.log(err));
// };
// document.addEventListener("DOMContentLoaded", showData);
