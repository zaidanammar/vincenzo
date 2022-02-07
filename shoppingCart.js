class Cart {
  constructor(kodeProduk, kuantitas) {
    this.cart = [];
    this.kodeProduk = kodeProduk;
    this.kuantitas = kuantitas;
  }

  tambahProduk(kodeProduk, kuantitas) {
    const findIndex = [...this.cart].findIndex(
      (item) => item.kodeProduk === kodeProduk
    );
    if (findIndex > 0) {
      this.cart[findIndex].kuantitas += kuantitas;
    } else {
      this.cart.push({ kodeProduk, kuantitas });
    }
  }

  hapusProduk(kodeProduk) {
    this.cart = [...this.cart].filter((item) => item.kodeProduk != kodeProduk);
  }

  tampilkanCart() {
    this.cart.map((item) =>
      console.log(`${item.kodeProduk} (${item.kuantitas})`)
    );
  }
}
const keranjang = new Cart();
keranjang.tambahProduk("Pisang Hijau", 2);
keranjang.tambahProduk("Semangka Kuning", 3);
keranjang.tambahProduk("Apel Merah", 1);
keranjang.tambahProduk("Apel Merah", 4);
keranjang.tambahProduk("Apel Merah", 2);
keranjang.hapusProduk("Semangka Kuning");
keranjang.hapusProduk("Semangka Merah");
keranjang.tampilkanCart();
