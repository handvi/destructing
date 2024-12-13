// 1. Destructuring Array (Daftar Produk)
const produkList = [
    { id: 1, nama: 'Laptop', harga: 10000000, stok: 30 },
    { id: 2, nama: 'Smartphone', harga: 5000000, stok: 50 },
    { id: 3, nama: 'Headphone', harga: 200000, stok: 100 }
  ];
  
  // Destructuring array dan objek di dalamnya
  const [produk1, produk2] = produkList;
  console.log('Destructuring Array (Daftar Produk):');
  console.log(produk1);  
  console.log(produk2);  
  console.log('---');
  
  // 2. Destructuring Object (Informasi Pembeli)
  const pembeli = {
    id: 101,
    nama: 'Faisal Hanafi',
    umur: 30,
    alamat: 'Jakarta, Indonesia',
    produkDibeli: ['Laptop', 'Smartphone']
  };
  
  // Destructuring objek
  const { nama, umur, alamat, produkDibeli } = pembeli;
  console.log('Destructuring Object (Informasi Pembeli):');
  console.log(`Nama: ${nama}`);       
  console.log(`Umur: ${umur}`);       
  console.log(`Alamat: ${alamat}`);   
  console.log(`Produk Dibeli: ${produkDibeli.join(', ')}`); 
  console.log('---');
  
  // 3. Destructuring Function Parameters (Menerima Informasi Pembeli)
  function tampilkanDetailPembeli({ nama, umur, alamat, produkDibeli }) {
    console.log('Destructuring Function Parameters (Pembeli):');
    console.log(`Nama Pembeli: ${nama}`);
    console.log(`Umur: ${umur}`);
    console.log(`Alamat: ${alamat}`);
    console.log(`Produk Dibeli: ${produkDibeli.join(', ')}`);
  }
  
  const pembeliDetail = {
    nama: 'Aulia',
    umur: 25,
    alamat: 'Bandung, Indonesia',
    produkDibeli: ['Smartphone', 'Headphone']
  };
  
  tampilkanDetailPembeli(pembeliDetail);
  console.log('---');
  
  // 4. Destructuring with Alias (Mengubah Nama Variabel)
  const pembeli2 = {
    id: 123,
    namaDepan: 'Faisal',
    namaBelakang: 'Hanafi',
    usia: 30
  };
  
  // Menggunakan alias untuk mengganti nama variabel
  const { namaDepan: firstName, namaBelakang: lastName, usia: age } = pembeli2;
  console.log('Destructuring with Alias (Pembeli):');
  console.log(`Nama Lengkap: ${firstName} ${lastName}`);
  console.log(`Usia: ${age}`);
  console.log('---');
  
  // 5. Destructuring with Default Value (Nilai Default untuk Properti yang Tidak Ada)
  const produk4 = {
    nama: 'Tablet',
    harga: 3000000
  };
  
  // Destructuring dengan nilai default
  const { nama: namaProduk, harga: hargaProduk, stok = 0 } = produk4;
  
  console.log('Destructuring with Default Value (Produk):');
  console.log(`Nama Produk: ${namaProduk}`); 
  console.log(`Harga: ${hargaProduk}`);     
  console.log(`Stok: ${stok}`);            
  console.log('---');
  
  // 6. Destructuring Nested Object (Obyek yang Bersarang)
  const pembeliDetailNested = {
    id: 1,
    informasi: {
      nama: 'Faisal Hanafi',
      usia: 30,
      alamat: 'Jakarta, Indonesia'
    }
  };
  
  const { informasi: { nama: namaPembeli, usia: usiaPembeli, alamat: alamatPembeli } } = pembeliDetailNested;
  console.log('Destructuring Nested Object (Pembeli):');
  console.log(`Nama: ${namaPembeli}`);
  console.log(`Usia: ${usiaPembeli}`);
  console.log(`Alamat: ${alamatPembeli}`);
  console.log('---');
  
  // 7. Destructuring Array in Function Parameters (Daftar Produk)
  function tampilkanProduk([produk1, produk2]) {
    console.log('Destructuring Array in Function Parameters (Produk):');
    console.log(`Produk 1: ${produk1.nama} - Harga: ${produk1.harga}`);
    console.log(`Produk 2: ${produk2.nama} - Harga: ${produk2.harga}`);
  }
  
  const produkArray = [
    { nama: 'Laptop', harga: 10000000 },
    { nama: 'Smartphone', harga: 5000000 }
  ];
  
  tampilkanProduk(produkArray);
  