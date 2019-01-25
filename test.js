const assert = require('assert');
const Cart = require('./cart');

const cart = {
    items : {
        "Baju" : {
            qty: 2
        },
        "Sepatu": {
            qty: 5
        }
    },
    totalQty : 7
}

it('Mengecek jumlah 0 saat tidak ada item di dalam keranjang', ()=>{
    const keranjang = new Cart({});
    assert.equal( keranjang.totalQty, 0);
})

it('Mengecek jumlah item di dalam keranjang', ()=>{
    const keranjang = new Cart(cart);
    assert.equal( keranjang.totalQty, 7)
})

it('Menambahkan item baru di keranjang', ()=>{
    const keranjang = new Cart(cart);
    keranjang.tambahProduk("Komputer", 5);
    assert.equal(keranjang.items.hasOwnProperty("Komputer"), true);
    assert.equal( keranjang.items["Komputer"].qty, 5 );
})

it('Menambahkan jumlah item di keranjang', ()=>{
    const keranjang = new Cart(cart);
    keranjang.tambahProduk("Sepatu", 3);
    assert.equal( keranjang.items["Sepatu"].qty, 8 );
})

it('Menghapus item di keranjang', ()=>{
    const keranjang = new Cart(cart);
    keranjang.hapusProduk("Sepatu");
    assert.equal(keranjang.items.hasOwnProperty("Sepatu"), false);
})

it('Menampilkan isi keranjang', ()=>{
    const keranjang = new Cart(cart);
    assert.equal(keranjang.tampilkanCart(), 'Baju (2)\nKomputer (5)\n')
})