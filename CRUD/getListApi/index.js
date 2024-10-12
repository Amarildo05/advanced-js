const dummyList = document.getElementById("dummy-list");
function getDummyList() {
  fetch("https://dummyjson.com/products").then((res) => {
    res.json().then((data) => {
      console.log(data);
      let products = data.products;
      showProducts(products);
    });
  });
}

getDummyList();

function showProducts(products) {
  for (let i = 0; i < products.length; i++) {
    const apiList = document.createElement("li");

    let cont = `
    <span onClick="deleteProduct(this)" id=${products[i].id}>X</span>
           <h2> ${products[i].title}</h2>
           <p> ${products[i].description}</p>
           <img src=${products[i].images} />
           <div id="product-info"> <span>Category:</span> ${products[i].category}</div>
           <div id="product-info"> <span>Price:</span> ${products[i].price} $</div>
           <div id="product-info"> <span>Rate:</span> ${products[i].rating} *</div>
           <div id="product-info"> <span>Status:</span> ${products[i].availabilityStatus}</div>
          `;
    apiList.innerHTML = cont;
    dummyList.appendChild(apiList);
  }
}

function searchByTitle() {
  const searchedTitle = document.getElementById("searchInput");
  console.log(searchedTitle);

  let value = searchedTitle.value;
  console.log(value);

  fetch(`https://dummyjson.com/products/search?q=${value}`).then((res) => {
    res.json().then((data) => {
      console.log(data);
      let products = data.products;
      dummyList.innerHTML = "";
      showProducts(products);
    });
  });
}

function createProductItem() {
  // Fetch values from form
  const productName = document.getElementById("productName").value;
  const productPrice = parseFloat(
    document.getElementById("productPrice").value
  );
  const productDescription =
    document.getElementById("productDescription").value;
  const productCategory = document.getElementById("productCategory").value;

  // Create JSON object
  const productItem = {
    name: productName,
    price: productPrice,
    description: productDescription,
    category: productCategory,
  };

  // Log JSON object to console (for demonstration)
  console.log("Product Item JSON:", productItem);

  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productItem),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log("sucess");
    });
}

function deleteProduct(x) {
  console.log(x);
  let id = x.getAttribute("id");
  console.log(id);
  console.log("deleting prodctu with id:", id);
  fetch(`https://dummyjson.com/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      dummyList.innerHTML = "";
      getDummyList();
    });
}