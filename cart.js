class Cart {
    constructor (oldCart){
        this.items = oldCart.items || {}
        this.totalQty = oldCart.totalQty || 0
    }
    
    tambahProduk(id, qty) {
        let storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = {qty: 0};
        }
        storedItem.qty += qty;
        this.totalQty += qty;
        console.log(`${id} bertambah ${qty} menjadi ${storedItem.qty}!`)
    };
    
    hapusProduk(id) {
        this.totalQty -= this.items[id].qty;
        delete this.items[id];
        console.log(`${id} berhasil dihapus!`)
    };

    tampilkanCart() {
        let cartView = ''
        for (let item in this.items){
            cartView += `${item} (${this.items[item].qty})\n`
        }
        console.log(cartView)
        return cartView
    }
};

module.exports = Cart;