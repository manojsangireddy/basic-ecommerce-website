async function fetchData() {
  try {
    let fetchRequest = await fetch("https://fakestoreapi.com/products?limit=4");
    let data = await fetchRequest.json();
    // console.log(data);

    let newarrivals = document.querySelector(".new-arrivals");
    data.map(function (element, index) {
      let rowcontainer = document.createElement("div");
      rowcontainer.setAttribute("class", "rowcontainer");

      let imgcontainer = document.createElement("div");
      imgcontainer.setAttribute("class", "imgcontainer");

      let img = document.createElement("img");
      img.setAttribute("class", "fetchedImage");
      img.setAttribute("src", element.image);

      imgcontainer.append(img);

      let name = document.createElement("h5");
      name.setAttribute("class", "name");
      name.innerText = element.title;

      let price = document.createElement("h5");
      price.setAttribute("class", "price");
      price.innerText = element.price;

      //   let rating = document.createElement("h5");
      //   rating.setAttribute("class", "rating");
      //   rating.innerText = element.rating.rate;

      rowcontainer.append(imgcontainer, name, price);
      newarrivals.append(rowcontainer);
    });
  } catch (e) {
    console.log(e);
  }
}

fetchData();
