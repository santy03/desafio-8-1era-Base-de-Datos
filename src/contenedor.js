class Contenedor {
    constructor(route) {
      this.route = route;
      this.products = [];
    }
  
    getAll() {
      return this.products;
    }
    save(obj) {
      obj.id = !this.products.length ? 1 : parseInt(this.products[this.products.length - 1].id) + 1;
      this.products.push(obj);
      return obj
    }
  
    getById(id) {
      return this.products.find((product) => product.id == id);
    }
  
    updateProduct(id, obj) {
      const productIndex = this.products.findIndex(product => product.id == id);
      
      if (productIndex != -1) {
        this.products[productIndex].title = obj.title || this.products[productIndex].title;
        this.products[productIndex].price = obj.price || this.products[productIndex].price;
        this.products[productIndex].thumbnail = obj.thumbnail || this.products[productIndex].thumbnail;
        return this.products[productIndex];
      }
      return false;
    }
  
    deleteById(id) {
      const index = this.products.findIndex(prod=>prod.id == id)
      if(index != -1){
        this.products = this.products.filter((product) => (product.id != id));
        return true
      }
      return false
    }
  }
  const products = new Contenedor('./src/products.txt');

  products.save({
    title: "PlayStation 3",
    price: 60000,
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_930365-MLA32732578056_112019-O.webp",
  });

  products.save({
    title: "PlayStation 4",
    price: 120000,
    thumbnail:
    "https://http2.mlstatic.com/D_NQ_NP_690761-MLA49613056842_042022-O.webp",
  });

  products.save({
    title: "PlayStation 5",
    price: 250000,
    thumbnail:
    "https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp",
  });
  
  
  module.exports = products;