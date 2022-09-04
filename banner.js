images = [
  
    "./img3/9.jpg",
    "./img3/8.jpg",
    "./img3/7.jpg",
    "./img3/6.jpg",
    "./img3/5.jpg",
    "./img3/4.jpg",
    "./img3/3.jpg",
    "./img3/4.jpg",
    "./img3/1.jpg",
  ];
  let index = 0;
  
  let banner = document.getElementById("image");
  banner.src = images[0];
  
  function show_image(initial) {
    if (initial == "left") {
      index--;
    } else {
      index++;
      index %= images.length - 1;
    }
  
    if (index < 0) {
      index = images.length - 1;
    }
  
    banner.src = images[index];
  }
  
  setInterval(show_image, 3000);
  

//   new arrivals//////////////////
  
  
let arr = [
    {
      img: "./img1/alpargata rs 3.jpg",
      Brand: "Toms",
      name: "ALPARGATA RECYCLED COTTON CANVAS ‘MAASTRICHTNAVY’",
      price: "₹3,999",
    },
    {
      img: "./img1/canvas natural rs 4,999.jpg",
      Brand: "Toms",
      name: "ALPARGATA HERITAGE CANVAS ‘NATURAL / PEACH’",
      price: "₹4,999",
    },
    {
      img: "./img1/cotton canvas rose red rs 3,999.jpg",
      Brand: "Toms",
      name: "ALPARGATA RECYCLED COTTON CANVAS 'ROSE RED'",
      price: "₹3,999",
    },
    {
      img: "./img1/espandrille alparag navy mariya rs 5,499.jpg",
      Brand: "Toms",
      name: "ESPADRILLE ALPARGATA ‘NAVY MARINA’",
      price: "₹5,499",
    },
    {
      img: "./img1/espandrille bkack rs 4.jpg",
      Brand: "Toms",
      name: "ESPADRILLE ALPARGATA ‘BLACK SLUBBY’",
      price: "₹4,999",
    },
    {
      img: "./img1/forum.jpg",
      Brand: "Adidas",
      name: "FORUM LUXE LOW ‘CWHITE / CRAOCH’",
      price: "₹11,999",
    },
    {
      img: "./img1/nitebal.jpg",
      Brand: "Adidas Original",
      name: "NITEBALL ‘CORE BLACK / CLOUD WHITE’",
      price: "₹11,999",
    },
    {
      img: "./img1/jordan.jpg",
      Brand: "Nike",
      name: "JORDAN 5 ‘DARK CONCORD’",
      price: "₹18,395",
    },
    {
      img: "./img1/air.jpg",
      Brand: "Nike",
      name: "AIR JORDAN 14 ‘LIGHT GINGER’",
      price: "₹18,395",
    },
  ];
  
  let container = document.querySelector(".images_container");
  let prebtn = document.querySelector(".pre");
  let nextbtn = document.querySelector(".next");
  
  
  let flag = 0;
  function previous() {
    container.innerHTML =null;
    if (flag ==4) {
      flag=1
    }
  
    for (let i = flag +4; i > flag; i--) {
      let html = ` <div id="images">
              <img id="image1" src="${arr[i].img}">
              <div class="div1">
              <small class"brand">${arr[i].Brand}</small>
              </div>
              <div class="div2">
              <small class"name" >${arr[i].name}</small>
              </div>
              <div class="div3">
              <small class"price" >${arr[i].price}<small>
            </div>
            </div>`;
      container.innerHTML += html;
      console.log(html);
    }
    flag++;
  }
  prebtn.addEventListener("click", previous);
  
  function next() {
    container.innerHTML = null;
    if (flag ==arr.length-1){
      flag = 1;
    }
  
    for (let i = flag; i < flag +arr.length-1; i++) {
      let html = ` <div id="images">
              <img id="image1" src="${arr[i].img}">
              <div class="div1">
              <small class"brand">${arr[i].Brand}</small>
              </div>
              <div class="div2">
              <small class"name" >${arr[i].name}</small>
              </div>
              <div class="div3">
              <small class"price" >${arr[i].price}<small>
            </div>
            </div>`;
      
      container.innerHTML += html;
      console.log(html);
    }
    flag++;
  }
  
  nextbtn.addEventListener("click", next);
  
  next();
  previous();
  
  
  
  
  
  
  
  
  