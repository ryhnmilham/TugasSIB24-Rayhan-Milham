// CREATE
fetch("https://crudcrud.com/api/9830d3a9c3cf49ba82b1b68502494753", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    name: "Nike Dunk Low Black grey",
    price: "Rp 2.224.964,000",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// READ
function fetchDetail(sepatuNike) {
  fetch("https://crudcrud.com/api/9830d3a9c3cf49ba82b1b68502494753")
    .then((response) => response.json())
    .then((data) => {
      const product = data.find((item) => item.name === sepatuNike);
      if (product) {
        alert(`Detail Produk:\nNama: ${product.name}\nHarga: ${product.price}`);
      } else {
        alert("Produk tidak ditemukan");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat memuat detail produk");
    });
}
// UPDATE
fetch("https://crudcrud.com/api/9830d3a9c3cf49ba82b1b68502494753", {
  method: "PUT",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    name: "Nike Dunk Low Black Yellow",
    price: "Rp 2.224.964,000",
  }),
}).then((response) => console.log(response));

// DELETE
fetch("https://crudcrud.com/api/9830d3a9c3cf49ba82b1b68502494753", {
  method: "DELETE",
}).then((response) => console.log(response));
