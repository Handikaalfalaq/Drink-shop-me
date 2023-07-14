const landing1 = document.querySelector('.landing1')
const cart_tengah = document.querySelector('.cart_tengah')
const keranjang = document.querySelector('.keranjang')
const container_profile = document.querySelector('.container_profile')
const kotak_profile_dropdown_pembeli = document.querySelector('.kotak_profile_dropdown_pembeli')
let total_jumlah_belanjaan = document.querySelector('.total_jumlah_belanjaan')
total_jumlah_belanjaan.innerHTML = 0

// harga dari product
let harga_awal_chocolate = 10000;
let harga_awal_cappucino = 11000;
let harga_awal_redvalvet = 12000;
let harga_awal_taro = 13000;

// harga toping
let topingatas1 = 1500
let topingatas2 = 1500
let topingatas3 = 2000
let topingatas4 = 1000
let topingbawah1 = 1500
let topingbawah2 = 1500
let topingbawah3 = 1000
let topingbawah4 = 1000

// memasukkan harga pada product di landing awal
let harga_product1 = document.querySelector('.harga_product1')
let harga_product2 = document.querySelector('.harga_product2')
let harga_product3 = document.querySelector('.harga_product3')
let harga_product4 = document.querySelector('.harga_product4')

harga_product1.innerHTML = 'Rp. ' + harga_awal_chocolate;
harga_product2.innerHTML = 'Rp. ' + harga_awal_cappucino;
harga_product3.innerHTML = 'Rp. ' + harga_awal_redvalvet;
harga_product4.innerHTML = 'Rp. ' + harga_awal_taro;















// bagian masuk dropdown login dan register
const tulisan_login = document.querySelector('.tulisan_login')
const tulisan_register = document.querySelector('.tulisan_register')
const overlayregister = document.querySelector('.overlayregister')
const containerregister = document.querySelector('.containerregister')



const overlay_akun = document.querySelector('.overlay_akun')
const container_akun = document.querySelector('.container_akun')

const pemberitahuan_login_button = document.querySelector('.pemberitahuan_login button')
const pemberitahuan_register_button = document.querySelector('.pemberitahuan_register button')

const background_hijau = document.querySelector('.background_hijau')
const container_login_putih = document.querySelector('.container_login_putih')
const container_register_hijau = document.querySelector('.container_register_hijau')

const container_register_putih = document.querySelector('.container_register_putih')
const container_login_hijau = document.querySelector('.container_login_hijau')


tulisan_login.addEventListener('click', function(){
    overlay_akun.style.display = 'unset'
    container_akun.style.display = 'flex'

    background_hijau.style.left = '470px'
    container_login_putih.style.left = '0px'
    container_register_hijau.style.right = '0px'

    
    container_register_putih.style.left = '-520px'
    container_login_hijau.style.right = '520px'
})

tulisan_register.addEventListener('click', function(){
    overlay_akun.style.display = 'unset'
    container_akun.style.display = 'flex'

    background_hijau.style.left = '0px'
   
    container_login_putih.style.left = '520px'
    container_register_hijau.style.right = '-520px'

    container_register_putih.style.left = '0px'
    container_login_hijau.style.right = '0px'
})

// close dropdown login dan register
overlay_akun.addEventListener('click', function(){
    overlay_akun.style.display = 'none'
    container_akun.style.display = 'none'

    background_hijau.style.right = '0px'
    container_login_putih.style.left = '0px'
    container_register_hijau.style.right = '0px'

    
    container_register_putih.style.left = '0px'
    container_login_hijau.style.right = '0px'
})




// pindah dari dropdown login ke register dan sebaliknya
pemberitahuan_register_button.addEventListener('click', function(){
    background_hijau.style.left = '0px'
   
    container_login_putih.style.left = '520px'
    container_register_hijau.style.right = '-520px'

    container_register_putih.style.left = '0px'
    container_login_hijau.style.right = '0px'


})




pemberitahuan_login_button.addEventListener('click', function(){
    background_hijau.style.left = '470px'
   
    container_login_putih.style.left = '0px'
    container_register_hijau.style.right = '0px'

    container_register_putih.style.left = '-520px'
    container_login_hijau.style.right = '520px'


})
























// fungsi klik login / register / admin dan berhasil masuk akun pembeli
const akun = document.querySelector('.akun')
const akun_login = document.querySelector('.akun_login')
const tombol_login = document.querySelector('.tombol_login')
const tombol_register = document.querySelector('.tombol_register')
const overlaylanding1 = document.querySelector('.overlaylanding1')
const login_akun_admin_button = document.querySelector('.login_akun_admin button')
const register_register_button = document.querySelector('.register_register button')
const akun_register = document.querySelector('.akun_register')
const akun_admin_login = document.querySelector('.akun_admin_login')
const register_akun_admin_button = document.querySelector('.register_akun_admin button')
const container_income = document.querySelector('.container_income')

tombol_login.addEventListener('click', function(){
    akun.style.display = 'none'
    overlay_akun.style.display='none'
    akun_login.style.display = 'flex'
    overlaylanding1.style.display = 'none'
    container_akun .style.display = 'none'
    jumlah_belanjaan.style.display = 'flex'
})


tombol_register.addEventListener('click', function(){
    akun.style.display = 'none'
    overlay_akun.style.display='none'
    akun_login.style.display = 'flex'
    overlaylanding1.style.display = 'none'
    container_akun .style.display = 'none'
    jumlah_belanjaan.style.display = 'flex'
})


// login_akun_admin_button.addEventListener('click', function(){
//     akun.style.display = 'none'
//     overlay_akun.style.display='none'
//     akun_admin_login.style.display = 'flex'
//     overlaylanding1.style.display = 'none'
//     container_akun .style.display = 'none'
//     container_income.style.display = 'unset'
//     landing1.style.display = 'none'
// })

// register_akun_admin_button.addEventListener('click', function(){
//     akun.style.display = 'none'
//     overlayregister.style.display='none'
//     akun_admin_login.style.display = 'flex'
//     overlaylanding1.style.display = 'none'
//     containerregister.style.display = 'none'
//     container_income.style.display = 'unset'
//     landing1.style.display = 'none'
// })



// memunculkan dropdown pembeli
const foto_profil = document.querySelector('.foto_profil')
const container_dropdown_pembeli = document.querySelector('.container_dropdown_pembeli')
const overlay_dropdown_pembeli = document.querySelector('.overlay_dropdown_pembeli')



foto_profil.addEventListener('click', function(){
    container_dropdown_pembeli.style.display = 'unset'
    overlay_dropdown_pembeli.style.display = 'unset'
})

// menyembunyikan dropdown pembeli
overlay_dropdown_pembeli.addEventListener('click', function(){
    container_dropdown_pembeli.style.display = 'none'
    overlay_dropdown_pembeli.style.display = 'none'
})









// ******************************************************************
// menampilkan product minuman yang dipilih 
// detail product1 *******************************************
const product1 = document.querySelector('.product1')
const container_detail_product1 = document.querySelector('.container_detail_product1')

product1.addEventListener('click', function(){
    landing1.style.display = 'none'
    container_detail_product1.style.display = 'unset'
})

// memakai fungsi close untuk menutup product1
const add_cart_close_product1 = document.querySelector('.add_cart_close_product1')

add_cart_close_product1.addEventListener('click', function(){
    landing1.style.display = 'unset'
    container_detail_product1.style.display = 'none'
    centang1_toping_atas_dp_product1.style.display = 'none';
    centang2_toping_atas_dp_product1.style.display = 'none';
    centang3_toping_atas_dp_product1.style.display = 'none';
    centang4_toping_atas_dp_product1.style.display = 'none';
    centang1_toping_bawah_dp_product1.style.display = 'none';
    centang2_toping_bawah_dp_product1.style.display = 'none';
    centang3_toping_bawah_dp_product1.style.display = 'none';
    centang4_toping_bawah_dp_product1.style.display = 'none';
    total_uang_product1.innerHTML = harga_awal_chocolate;
})


// detail product2*******************************************
const product2 = document.querySelector('.product2')
const container_detail_product2 = document.querySelector('.container_detail_product2')

product2.addEventListener('click', function(){
    landing1.style.display = 'none'
    container_detail_product2.style.display = 'unset'
})

// memakai fungsi close untuk menutup product2
const add_cart_close_product2 = document.querySelector('.add_cart_close_product2')

add_cart_close_product2.addEventListener('click', function(){
    landing1.style.display = 'unset'
    container_detail_product2.style.display = 'none'
    centang1_toping_atas_dp_product2.style.display = 'none';
    centang2_toping_atas_dp_product2.style.display = 'none';
    centang3_toping_atas_dp_product2.style.display = 'none';
    centang4_toping_atas_dp_product2.style.display = 'none';
    centang1_toping_bawah_dp_product2.style.display = 'none';
    centang2_toping_bawah_dp_product2.style.display = 'none';
    centang3_toping_bawah_dp_product2.style.display = 'none';
    centang4_toping_bawah_dp_product2.style.display = 'none';
    total_uang_product2.innerHTML = harga_awal_cappucino;
})


// detail product3 *******************************************
const product3 = document.querySelector('.product3')
const container_detail_product3 = document.querySelector('.container_detail_product3')

product3.addEventListener('click', function(){
    landing1.style.display = 'none'
    container_detail_product3.style.display = 'unset'
})

// memakai fungsi close untuk menutup product3
const add_cart_close_product3 = document.querySelector('.add_cart_close_product3')

add_cart_close_product3.addEventListener('click', function(){
    landing1.style.display = 'unset'
    container_detail_product3.style.display = 'none'
    centang1_toping_atas_dp_product3.style.display = 'none';
    centang2_toping_atas_dp_product3.style.display = 'none';
    centang3_toping_atas_dp_product3.style.display = 'none';
    centang4_toping_atas_dp_product3.style.display = 'none';
    centang1_toping_bawah_dp_product3.style.display = 'none';
    centang2_toping_bawah_dp_product3.style.display = 'none';
    centang3_toping_bawah_dp_product3.style.display = 'none';
    centang4_toping_bawah_dp_product3.style.display = 'none';
    total_uang_product3.innerHTML = harga_awal_redvalvet;
})


// detail product4*******************************************
const product4 = document.querySelector('.product4')
const container_detail_product4 = document.querySelector('.container_detail_product4')

product4.addEventListener('click', function(){
    landing1.style.display = 'none'
    container_detail_product4.style.display = 'unset'
})

// memakai fungsi close untuk menutup product4
const add_cart_close_product4 = document.querySelector('.add_cart_close_product4')

add_cart_close_product4.addEventListener('click', function(){
    landing1.style.display = 'unset'
    container_detail_product4.style.display = 'none'
    centang1_toping_atas_dp_product4.style.display = 'none';
    centang2_toping_atas_dp_product4.style.display = 'none';
    centang3_toping_atas_dp_product4.style.display = 'none';
    centang4_toping_atas_dp_product4.style.display = 'none';
    centang1_toping_bawah_dp_product4.style.display = 'none';
    centang2_toping_bawah_dp_product4.style.display = 'none';
    centang3_toping_bawah_dp_product4.style.display = 'none';
    centang4_toping_bawah_dp_product4.style.display = 'none';
    total_uang_product4.innerHTML = harga_awal_taro;
})

// saat mengklik add cart product ----------------------------------------------
let jumlah_belanjaan = document.querySelector('.jumlah_belanjaan')
let total_belanjaan = 0








// ***************************************************************************************************************
// yang terjadi di dalam detail product1
let total_uang_product1 = document.querySelector('.total_uang_product1')
let harga_dp_product1 = document.querySelector('.harga_dp_product1')
let harga_chocolate = harga_awal_chocolate

harga_dp_product1.innerHTML = harga_chocolate
total_uang_product1.innerHTML = harga_chocolate

// memanggil class toping
const toping1_atas_dp_product1 = document.querySelector('.toping1_atas_dp_product1');
const toping2_atas_dp_product1 = document.querySelector('.toping2_atas_dp_product1');
const toping3_atas_dp_product1 = document.querySelector('.toping3_atas_dp_product1');
const toping4_atas_dp_product1 = document.querySelector('.toping4_atas_dp_product1');
const toping1_bawah_dp_product1 = document.querySelector('.toping1_bawah_dp_product1');
const toping2_bawah_dp_product1 = document.querySelector('.toping2_bawah_dp_product1');
const toping3_bawah_dp_product1 = document.querySelector('.toping3_bawah_dp_product1');
const toping4_bawah_dp_product1 = document.querySelector('.toping4_bawah_dp_product1');


// memanggil class centang
const centang1_toping_atas_dp_product1 = document.querySelector('.centang1_toping_atas_dp_product1');
const centang2_toping_atas_dp_product1 = document.querySelector('.centang2_toping_atas_dp_product1');
const centang3_toping_atas_dp_product1 = document.querySelector('.centang3_toping_atas_dp_product1');
const centang4_toping_atas_dp_product1 = document.querySelector('.centang4_toping_atas_dp_product1');
const centang1_toping_bawah_dp_product1 = document.querySelector('.centang1_toping_bawah_dp_product1');
const centang2_toping_bawah_dp_product1 = document.querySelector('.centang2_toping_bawah_dp_product1');
const centang3_toping_bawah_dp_product1 = document.querySelector('.centang3_toping_bawah_dp_product1');
const centang4_toping_bawah_dp_product1 = document.querySelector('.centang4_toping_bawah_dp_product1');



// bagian penambahan toping pada product1
// penambahan toping atas 1
toping1_atas_dp_product1.addEventListener('click', function(){
    if (centang1_toping_atas_dp_product1.style.display == 'unset'){
        centang1_toping_atas_dp_product1.style.display = 'none';
        harga_chocolate -= topingatas1
    } else {
        centang1_toping_atas_dp_product1.style.display = 'unset';
        harga_chocolate += topingatas1
    }
    total_uang_product1.innerHTML = harga_chocolate
})

// penambahan toping atas 2
toping2_atas_dp_product1.addEventListener('click', function(){
    if (centang2_toping_atas_dp_product1.style.display == 'unset'){
        centang2_toping_atas_dp_product1.style.display = 'none';
        harga_chocolate -= topingatas2
    } else {
        centang2_toping_atas_dp_product1.style.display = 'unset';
        harga_chocolate += topingatas2
    }
    total_uang_product1.innerHTML = harga_chocolate
})

// penambahan toping atas 3
toping3_atas_dp_product1.addEventListener('click', function(){
    if (centang3_toping_atas_dp_product1.style.display == 'unset'){
        centang3_toping_atas_dp_product1.style.display = 'none';
        harga_chocolate -= topingatas3
    } else {
        centang3_toping_atas_dp_product1.style.display = 'unset';
        harga_chocolate += topingatas3
    }
    total_uang_product1.innerHTML = harga_chocolate
})

// penambahan toping atas 4
toping4_atas_dp_product1.addEventListener('click', function(){
    if (centang4_toping_atas_dp_product1.style.display == 'unset'){
        centang4_toping_atas_dp_product1.style.display = 'none';
        harga_chocolate -= topingatas4
    } else {
        centang4_toping_atas_dp_product1.style.display = 'unset';
        harga_chocolate += topingatas4
    }
    total_uang_product1.innerHTML = harga_chocolate
})

// -----------

// penambahan toping bawah 1
toping1_bawah_dp_product1.addEventListener('click', function(){
    if (centang1_toping_bawah_dp_product1.style.display == 'unset'){
        centang1_toping_bawah_dp_product1.style.display = 'none';
        harga_chocolate -= topingbawah1
    } else {
        centang1_toping_bawah_dp_product1.style.display = 'unset';
        harga_chocolate += topingbawah1
    }
    total_uang_product1.innerHTML = harga_chocolate
})

// penambahan toping bawah 2
toping2_bawah_dp_product1.addEventListener('click', function(){
    if (centang2_toping_bawah_dp_product1.style.display == 'unset'){
        centang2_toping_bawah_dp_product1.style.display = 'none';
        harga_chocolate -= topingbawah2
    } else {
        centang2_toping_bawah_dp_product1.style.display = 'unset';
        harga_chocolate += topingbawah2
    }
    total_uang_product1.innerHTML = harga_chocolate
})

// penambahan toping bawah 3
toping3_bawah_dp_product1.addEventListener('click', function(){
    if (centang3_toping_bawah_dp_product1.style.display == 'unset'){
        centang3_toping_bawah_dp_product1.style.display = 'none';
        harga_chocolate -= topingbawah3
    } else {
        centang3_toping_bawah_dp_product1.style.display = 'unset';
        harga_chocolate += topingbawah3
    }
    total_uang_product1.innerHTML = harga_chocolate
})

// penambahan toping bawah 4
toping4_bawah_dp_product1.addEventListener('click', function(){
    if (centang4_toping_bawah_dp_product1.style.display == 'unset'){
        centang4_toping_bawah_dp_product1.style.display = 'none';
        harga_chocolate -= topingbawah4
    } else {
        centang4_toping_bawah_dp_product1.style.display = 'unset';
        harga_chocolate += topingbawah4
    }
    total_uang_product1.innerHTML = harga_chocolate
})

// saat mengklik add cart product1----------------------------------------------
const tulisan_add_cart_product1 = document.querySelector('.tulisan_add_cart_product1')

tulisan_add_cart_product1.addEventListener('click', function(){
    landing1.style.display = 'unset';
    container_detail_product1.style.display = 'none';
    jumlah_belanjaan.style.display = 'flex';
    total_belanjaan += 1;
    total_jumlah_belanjaan.innerHTML = total_belanjaan;
    centang1_toping_atas_dp_product1.style.display = 'none';
    centang2_toping_atas_dp_product1.style.display = 'none';
    centang3_toping_atas_dp_product1.style.display = 'none';
    centang4_toping_atas_dp_product1.style.display = 'none';
    centang1_toping_bawah_dp_product1.style.display = 'none';
    centang2_toping_bawah_dp_product1.style.display = 'none';
    centang3_toping_bawah_dp_product1.style.display = 'none';
    centang4_toping_bawah_dp_product1.style.display = 'none';
    total_uang_product1.innerHTML = harga_awal_chocolate;
})
















// ***************************************************************************************************************
// yang terjadi di dalam detail product2
let total_uang_product2 = document.querySelector('.total_uang_product2')
let harga_dp_product2 = document.querySelector('.harga_dp_product2')
let harga_cappucino = harga_awal_cappucino

harga_dp_product2.innerHTML = harga_cappucino
total_uang_product2.innerHTML = harga_cappucino

// memanggil class toping
const toping1_atas_dp_product2 = document.querySelector('.toping1_atas_dp_product2');
const toping2_atas_dp_product2 = document.querySelector('.toping2_atas_dp_product2');
const toping3_atas_dp_product2 = document.querySelector('.toping3_atas_dp_product2');
const toping4_atas_dp_product2 = document.querySelector('.toping4_atas_dp_product2');
const toping1_bawah_dp_product2 = document.querySelector('.toping1_bawah_dp_product2');
const toping2_bawah_dp_product2 = document.querySelector('.toping2_bawah_dp_product2');
const toping3_bawah_dp_product2 = document.querySelector('.toping3_bawah_dp_product2');
const toping4_bawah_dp_product2 = document.querySelector('.toping4_bawah_dp_product2');


// memanggil class centang
const centang1_toping_atas_dp_product2 = document.querySelector('.centang1_toping_atas_dp_product2');
const centang2_toping_atas_dp_product2 = document.querySelector('.centang2_toping_atas_dp_product2');
const centang3_toping_atas_dp_product2 = document.querySelector('.centang3_toping_atas_dp_product2');
const centang4_toping_atas_dp_product2 = document.querySelector('.centang4_toping_atas_dp_product2');
const centang1_toping_bawah_dp_product2 = document.querySelector('.centang1_toping_bawah_dp_product2');
const centang2_toping_bawah_dp_product2 = document.querySelector('.centang2_toping_bawah_dp_product2');
const centang3_toping_bawah_dp_product2 = document.querySelector('.centang3_toping_bawah_dp_product2');
const centang4_toping_bawah_dp_product2 = document.querySelector('.centang4_toping_bawah_dp_product2');



// bagian penambahan toping pada product2
// penambahan toping atas 1
toping1_atas_dp_product2.addEventListener('click', function(){
    if (centang1_toping_atas_dp_product2.style.display == 'unset'){
        centang1_toping_atas_dp_product2.style.display = 'none';
        harga_cappucino -= topingatas1
    } else {
        centang1_toping_atas_dp_product2.style.display = 'unset';
        harga_cappucino += topingatas1
    }
    total_uang_product2.innerHTML = harga_cappucino
})

// penambahan toping atas 2
toping2_atas_dp_product2.addEventListener('click', function(){
    if (centang2_toping_atas_dp_product2.style.display == 'unset'){
        centang2_toping_atas_dp_product2.style.display = 'none';
        harga_cappucino -= topingatas2
    } else {
        centang2_toping_atas_dp_product2.style.display = 'unset';
        harga_cappucino += topingatas2
    }
    total_uang_product2.innerHTML = harga_cappucino
})

// penambahan toping atas 3
toping3_atas_dp_product2.addEventListener('click', function(){
    if (centang3_toping_atas_dp_product2.style.display == 'unset'){
        centang3_toping_atas_dp_product2.style.display = 'none';
        harga_cappucino -= topingatas3
    } else {
        centang3_toping_atas_dp_product2.style.display = 'unset';
        harga_cappucino += topingatas3
    }
    total_uang_product2.innerHTML = harga_cappucino
})

// penambahan toping atas 4
toping4_atas_dp_product2.addEventListener('click', function(){
    if (centang4_toping_atas_dp_product2.style.display == 'unset'){
        centang4_toping_atas_dp_product2.style.display = 'none';
        harga_cappucino -= topingatas4
    } else {
        centang4_toping_atas_dp_product2.style.display = 'unset';
        harga_cappucino += topingatas4
    }
    total_uang_product2.innerHTML = harga_cappucino
})

// -----------
// penambahan toping bawah 1
toping1_bawah_dp_product2.addEventListener('click', function(){
    if (centang1_toping_bawah_dp_product2.style.display == 'unset'){
        centang1_toping_bawah_dp_product2.style.display = 'none';
        harga_cappucino -= topingbawah1
    } else {
        centang1_toping_bawah_dp_product2.style.display = 'unset';
        harga_cappucino += topingbawah1
    }
    total_uang_product2.innerHTML = harga_cappucino
})

// penambahan toping bawah 2
toping2_bawah_dp_product2.addEventListener('click', function(){
    if (centang2_toping_bawah_dp_product2.style.display == 'unset'){
        centang2_toping_bawah_dp_product2.style.display = 'none';
        harga_cappucino -= topingbawah2
    } else {
        centang2_toping_bawah_dp_product2.style.display = 'unset';
        harga_cappucino += topingbawah2
    }
    total_uang_product2.innerHTML = harga_cappucino
})

// penambahan toping bawah 3
toping3_bawah_dp_product2.addEventListener('click', function(){
    if (centang3_toping_bawah_dp_product2.style.display == 'unset'){
        centang3_toping_bawah_dp_product2.style.display = 'none';
        harga_cappucino -= topingbawah3
    } else {
        centang3_toping_bawah_dp_product2.style.display = 'unset';
        harga_cappucino += topingbawah3
    }
    total_uang_product2.innerHTML = harga_cappucino
})

// penambahan toping bawah 4
toping4_bawah_dp_product2.addEventListener('click', function(){
    if (centang4_toping_bawah_dp_product2.style.display == 'unset'){
        centang4_toping_bawah_dp_product2.style.display = 'none';
        harga_cappucino -= topingbawah4
    } else {
        centang4_toping_bawah_dp_product2.style.display = 'unset';
        harga_cappucino += topingbawah4
    }
    total_uang_product2.innerHTML = harga_cappucino
})

// saat mengklik add cart product2----------------------------------------------
const tulisan_add_cart_product2 = document.querySelector('.tulisan_add_cart_product2')

tulisan_add_cart_product2.addEventListener('click', function(){
    landing1.style.display = 'unset';
    container_detail_product2.style.display = 'none';
    jumlah_belanjaan.style.display = 'flex';
    total_belanjaan += 1;
    total_jumlah_belanjaan.innerHTML = total_belanjaan;
    centang1_toping_atas_dp_product2.style.display = 'none';
    centang2_toping_atas_dp_product2.style.display = 'none';
    centang3_toping_atas_dp_product2.style.display = 'none';
    centang4_toping_atas_dp_product2.style.display = 'none';
    centang1_toping_bawah_dp_product2.style.display = 'none';
    centang2_toping_bawah_dp_product2.style.display = 'none';
    centang3_toping_bawah_dp_product2.style.display = 'none';
    centang4_toping_bawah_dp_product2.style.display = 'none';
    total_uang_product2.innerHTML = harga_awal_cappucino;
})














// yang terjadi di dalam detail product3
let total_uang_product3 = document.querySelector('.total_uang_product3')
let harga_dp_product3 = document.querySelector('.harga_dp_product3')
let harga_redvalvet = harga_awal_redvalvet

harga_dp_product3.innerHTML = harga_redvalvet
total_uang_product3.innerHTML = harga_redvalvet

// memanggil class toping
const toping1_atas_dp_product3 = document.querySelector('.toping1_atas_dp_product3');
const toping2_atas_dp_product3 = document.querySelector('.toping2_atas_dp_product3');
const toping3_atas_dp_product3 = document.querySelector('.toping3_atas_dp_product3');
const toping4_atas_dp_product3 = document.querySelector('.toping4_atas_dp_product3');
const toping1_bawah_dp_product3 = document.querySelector('.toping1_bawah_dp_product3');
const toping2_bawah_dp_product3 = document.querySelector('.toping2_bawah_dp_product3');
const toping3_bawah_dp_product3 = document.querySelector('.toping3_bawah_dp_product3');
const toping4_bawah_dp_product3 = document.querySelector('.toping4_bawah_dp_product3');


// memanggil class centang
const centang1_toping_atas_dp_product3 = document.querySelector('.centang1_toping_atas_dp_product3');
const centang2_toping_atas_dp_product3 = document.querySelector('.centang2_toping_atas_dp_product3');
const centang3_toping_atas_dp_product3 = document.querySelector('.centang3_toping_atas_dp_product3');
const centang4_toping_atas_dp_product3 = document.querySelector('.centang4_toping_atas_dp_product3');
const centang1_toping_bawah_dp_product3 = document.querySelector('.centang1_toping_bawah_dp_product3');
const centang2_toping_bawah_dp_product3 = document.querySelector('.centang2_toping_bawah_dp_product3');
const centang3_toping_bawah_dp_product3 = document.querySelector('.centang3_toping_bawah_dp_product3');
const centang4_toping_bawah_dp_product3 = document.querySelector('.centang4_toping_bawah_dp_product3');



// bagian penambahan toping pada product3
// penambahan toping atas 1
toping1_atas_dp_product3.addEventListener('click', function(){
    if (centang1_toping_atas_dp_product3.style.display == 'unset'){
        centang1_toping_atas_dp_product3.style.display = 'none';
        harga_redvalvet -= topingatas1
    } else {
        centang1_toping_atas_dp_product3.style.display = 'unset';
        harga_redvalvet += topingatas1
    }
    total_uang_product3.innerHTML = harga_redvalvet
})

// penambahan toping atas 2
toping2_atas_dp_product3.addEventListener('click', function(){
    if (centang2_toping_atas_dp_product3.style.display == 'unset'){
        centang2_toping_atas_dp_product3.style.display = 'none';
        harga_redvalvet -= topingatas2
    } else {
        centang2_toping_atas_dp_product3.style.display = 'unset';
        harga_redvalvet += topingatas2
    }
    total_uang_product3.innerHTML = harga_redvalvet
})

// penambahan toping atas 3
toping3_atas_dp_product3.addEventListener('click', function(){
    if (centang3_toping_atas_dp_product3.style.display == 'unset'){
        centang3_toping_atas_dp_product3.style.display = 'none';
        harga_redvalvet -= topingatas3
    } else {
        centang3_toping_atas_dp_product3.style.display = 'unset';
        harga_redvalvet += topingatas3
    }
    total_uang_product3.innerHTML = harga_redvalvet
})

// penambahan toping atas 4
toping4_atas_dp_product3.addEventListener('click', function(){
    if (centang4_toping_atas_dp_product3.style.display == 'unset'){
        centang4_toping_atas_dp_product3.style.display = 'none';
        harga_redvalvet -= topingatas4
    } else {
        centang4_toping_atas_dp_product3.style.display = 'unset';
        harga_redvalvet += topingatas4
    }
    total_uang_product3.innerHTML = harga_redvalvet
})

// -----------

// penambahan toping bawah 1
toping1_bawah_dp_product3.addEventListener('click', function(){
    if (centang1_toping_bawah_dp_product3.style.display == 'unset'){
        centang1_toping_bawah_dp_product3.style.display = 'none';
        harga_redvalvet -= topingbawah1
    } else {
        centang1_toping_bawah_dp_product3.style.display = 'unset';
        harga_redvalvet += topingbawah1
    }
    total_uang_product3.innerHTML = harga_redvalvet
})

// penambahan toping bawah 2
toping2_bawah_dp_product3.addEventListener('click', function(){
    if (centang2_toping_bawah_dp_product3.style.display == 'unset'){
        centang2_toping_bawah_dp_product3.style.display = 'none';
        harga_redvalvet -= topingbawah2
    } else {
        centang2_toping_bawah_dp_product3.style.display = 'unset';
        harga_redvalvet += topingbawah2
    }
    total_uang_product3.innerHTML = harga_redvalvet
})

// penambahan toping bawah 3
toping3_bawah_dp_product3.addEventListener('click', function(){
    if (centang3_toping_bawah_dp_product3.style.display == 'unset'){
        centang3_toping_bawah_dp_product3.style.display = 'none';
        harga_redvalvet -= topingbawah3
    } else {
        centang3_toping_bawah_dp_product3.style.display = 'unset';
        harga_redvalvet += topingbawah3
    }
    total_uang_product3.innerHTML = harga_redvalvet
})

// penambahan toping bawah 4
toping4_bawah_dp_product3.addEventListener('click', function(){
    if (centang4_toping_bawah_dp_product3.style.display == 'unset'){
        centang4_toping_bawah_dp_product3.style.display = 'none';
        harga_redvalvet -= topingbawah4
    } else {
        centang4_toping_bawah_dp_product3.style.display = 'unset';
        harga_redvalvet += topingbawah4
    }
    total_uang_product3.innerHTML = harga_redvalvet
})

// saat mengklik add cart product3----------------------------------------------
const tulisan_add_cart_product3 = document.querySelector('.tulisan_add_cart_product3')

tulisan_add_cart_product3.addEventListener('click', function(){
    landing1.style.display = 'unset';
    container_detail_product3.style.display = 'none';
    jumlah_belanjaan.style.display = 'flex';
    total_belanjaan += 1;
    total_jumlah_belanjaan.innerHTML = total_belanjaan;
    centang1_toping_atas_dp_product3.style.display = 'none';
    centang2_toping_atas_dp_product3.style.display = 'none';
    centang3_toping_atas_dp_product3.style.display = 'none';
    centang4_toping_atas_dp_product3.style.display = 'none';
    centang1_toping_bawah_dp_product3.style.display = 'none';
    centang2_toping_bawah_dp_product3.style.display = 'none';
    centang3_toping_bawah_dp_product3.style.display = 'none';
    centang4_toping_bawah_dp_product3.style.display = 'none';
    total_uang_product3.innerHTML = harga_awal_redvalvet
})
















// ***************************************************************************************************************
// yang terjadi di dalam detail product4
let total_uang_product4 = document.querySelector('.total_uang_product4')
let harga_dp_product4 = document.querySelector('.harga_dp_product4')
let harga_taro = harga_awal_taro

harga_dp_product4.innerHTML = harga_taro
total_uang_product4.innerHTML = harga_taro

// memanggil class toping
const toping1_atas_dp_product4 = document.querySelector('.toping1_atas_dp_product4');
const toping2_atas_dp_product4 = document.querySelector('.toping2_atas_dp_product4');
const toping3_atas_dp_product4 = document.querySelector('.toping3_atas_dp_product4');
const toping4_atas_dp_product4 = document.querySelector('.toping4_atas_dp_product4');
const toping1_bawah_dp_product4 = document.querySelector('.toping1_bawah_dp_product4');
const toping2_bawah_dp_product4 = document.querySelector('.toping2_bawah_dp_product4');
const toping3_bawah_dp_product4 = document.querySelector('.toping3_bawah_dp_product4');
const toping4_bawah_dp_product4 = document.querySelector('.toping4_bawah_dp_product4');


// memanggil class centang
const centang1_toping_atas_dp_product4 = document.querySelector('.centang1_toping_atas_dp_product4');
const centang2_toping_atas_dp_product4 = document.querySelector('.centang2_toping_atas_dp_product4');
const centang3_toping_atas_dp_product4 = document.querySelector('.centang3_toping_atas_dp_product4');
const centang4_toping_atas_dp_product4 = document.querySelector('.centang4_toping_atas_dp_product4');
const centang1_toping_bawah_dp_product4 = document.querySelector('.centang1_toping_bawah_dp_product4');
const centang2_toping_bawah_dp_product4 = document.querySelector('.centang2_toping_bawah_dp_product4');
const centang3_toping_bawah_dp_product4 = document.querySelector('.centang3_toping_bawah_dp_product4');
const centang4_toping_bawah_dp_product4 = document.querySelector('.centang4_toping_bawah_dp_product4');



// bagian penambahan toping pada product1
// penambahan toping atas 1
toping1_atas_dp_product4.addEventListener('click', function(){
    if (centang1_toping_atas_dp_product4.style.display == 'unset'){
        centang1_toping_atas_dp_product4.style.display = 'none';
        harga_taro -= topingatas1
    } else {
        centang1_toping_atas_dp_product4.style.display = 'unset';
        harga_taro += topingatas1
    }
    total_uang_product4.innerHTML = harga_taro
})

// penambahan toping atas 2
toping2_atas_dp_product4.addEventListener('click', function(){
    if (centang2_toping_atas_dp_product4.style.display == 'unset'){
        centang2_toping_atas_dp_product4.style.display = 'none';
        harga_taro -= topingatas2
    } else {
        centang2_toping_atas_dp_product4.style.display = 'unset';
        harga_taro += topingatas2
    }
    total_uang_product4.innerHTML = harga_taro
})

// penambahan toping atas 3
toping3_atas_dp_product4.addEventListener('click', function(){
    if (centang3_toping_atas_dp_product4.style.display == 'unset'){
        centang3_toping_atas_dp_product4.style.display = 'none';
        harga_taro -= topingatas3
    } else {
        centang3_toping_atas_dp_product4.style.display = 'unset';
        harga_taro += topingatas3
    }
    total_uang_product4.innerHTML = harga_taro
})

// penambahan toping atas 4
toping4_atas_dp_product4.addEventListener('click', function(){
    if (centang4_toping_atas_dp_product4.style.display == 'unset'){
        centang4_toping_atas_dp_product4.style.display = 'none';
        harga_taro -= topingatas4
    } else {
        centang4_toping_atas_dp_product4.style.display = 'unset';
        harga_taro += topingatas4
    }
    total_uang_product4.innerHTML = harga_taro
})

// -----------

// penambahan toping bawah 1
toping1_bawah_dp_product4.addEventListener('click', function(){
    if (centang1_toping_bawah_dp_product4.style.display == 'unset'){
        centang1_toping_bawah_dp_product4.style.display = 'none';
        harga_taro -= topingbawah1
    } else {
        centang1_toping_bawah_dp_product4.style.display = 'unset';
        harga_taro += topingbawah1
    }
    total_uang_product4.innerHTML = harga_taro
})

// penambahan toping bawah 2
toping2_bawah_dp_product4.addEventListener('click', function(){
    if (centang2_toping_bawah_dp_product4.style.display == 'unset'){
        centang2_toping_bawah_dp_product4.style.display = 'none';
        harga_taro -= topingbawah2
    } else {
        centang2_toping_bawah_dp_product4.style.display = 'unset';
        harga_taro += topingbawah2
    }
    total_uang_product4.innerHTML = harga_taro
})

// penambahan toping bawah 3
toping3_bawah_dp_product4.addEventListener('click', function(){
    if (centang3_toping_bawah_dp_product4.style.display == 'unset'){
        centang3_toping_bawah_dp_product4.style.display = 'none';
        harga_taro -= topingbawah3
    } else {
        centang3_toping_bawah_dp_product4.style.display = 'unset';
        harga_taro += topingbawah3
    }
    total_uang_product4.innerHTML = harga_taro
})

// penambahan toping bawah 4
toping4_bawah_dp_product4.addEventListener('click', function(){
    if (centang4_toping_bawah_dp_product4.style.display == 'unset'){
        centang4_toping_bawah_dp_product4.style.display = 'none';
        harga_taro -= topingbawah4
    } else {
        centang4_toping_bawah_dp_product4.style.display = 'unset';
        harga_taro += topingbawah4
    }
    total_uang_product4.innerHTML = harga_taro
})

// saat mengklik add cart product4----------------------------------------------
const tulisan_add_cart_product4 = document.querySelector('.tulisan_add_cart_product4')

tulisan_add_cart_product4.addEventListener('click', function(){
    landing1.style.display = 'unset';
    container_detail_product4.style.display = 'none';
    jumlah_belanjaan.style.display = 'flex';
    total_belanjaan += 1;
    total_jumlah_belanjaan.innerHTML = total_belanjaan;
    centang1_toping_atas_dp_product4.style.display = 'none';
    centang2_toping_atas_dp_product4.style.display = 'none';
    centang3_toping_atas_dp_product4.style.display = 'none';
    centang4_toping_atas_dp_product4.style.display = 'none';
    centang1_toping_bawah_dp_product4.style.display = 'none';
    centang2_toping_bawah_dp_product4.style.display = 'none';
    centang3_toping_bawah_dp_product4.style.display = 'none';
    centang4_toping_bawah_dp_product4.style.display = 'none';
    total_uang_product4.innerHTML = harga_awal_taro
})









// ****************************************************
// klik keranjang dan memunculkan my cart
const container_my_cart = document.querySelector('.container_my_cart')


keranjang.addEventListener('click', function(){
    if (container_my_cart.style.display == 'flex') {
        container_my_cart.style.display = 'none';
        landing1.style.display = 'unset'
    } else {
        container_my_cart.style.display = 'flex';
        landing1.style.display = 'none'
        container_detail_product1.style.display = 'none'
        container_detail_product2.style.display = 'none'
        container_detail_product3.style.display = 'none'
        container_detail_product4.style.display = 'none'
        container_profile.style.display = 'none';
    }
})

// klik profile dan memunculkan my profile
kotak_profile_dropdown_pembeli.addEventListener('click', function(){
    container_profile.style.display = 'unset';
    landing1.style.display = 'none'
    container_detail_product1.style.display = 'none'
    container_detail_product2.style.display = 'none'
    container_detail_product3.style.display = 'none'
    container_detail_product4.style.display = 'none'
    container_dropdown_pembeli.style.display = 'none'
    overlay_dropdown_pembeli.style.display = 'none'
    container_my_cart.style.display = 'none';
})

// menutup my ptofile
const close_kotak_profile = document.querySelector('.close_kotak_profile')

close_kotak_profile.addEventListener('click', function(){
    container_profile.style.display = 'none';
    landing1.style.display = 'unset'
})







// bagian admin ******************************************
// memunculkan dropdown admin
const container_dropdown_admin = document.querySelector('.container_dropdown_admin')
const overlay_dropdown_admin = document.querySelector('.overlay_dropdown_admin')

akun_admin_login.addEventListener('click', function(){
    container_dropdown_admin.style.display = "unset"
    overlay_dropdown_admin.style.display = "unset"
})


// menyembunyikan dropdown admin
overlay_dropdown_admin.addEventListener('click', function(){
    container_dropdown_admin.style.display = 'none'
    overlay_dropdown_admin.style.display = 'none'
})




// memunculkan add product baru oleh admin
const kotak_product_masuk = document.querySelector('.kotak_product_masuk')
const kotak1_dropdown_admin = document.querySelector('.kotak1_dropdown_admin')

kotak1_dropdown_admin.addEventListener('click', function(){
    kotak_product_masuk.style.display = 'flex';
    kotak_toping_masuk.style.display = 'none';
    landing1.style.display = 'none';
    container_dropdown_admin.style.display = 'none'
    overlay_dropdown_admin.style.display = 'none'
    container_income.style.display = 'none'
})

// menutup add product admin
const close_product_masuk = document.querySelector('.close_product_masuk ')

close_product_masuk.addEventListener('click', function(){
    kotak_product_masuk.style.display = 'none'
    container_income.style.display = 'unset'
})






// memunculkan add toping baru oleh admin
const kotak_toping_masuk = document.querySelector('.kotak_toping_masuk')
const kotak2_dropdown_admin = document.querySelector('.kotak2_dropdown_admin')

kotak2_dropdown_admin.addEventListener('click', function(){
    kotak_toping_masuk.style.display = 'flex'
    kotak_product_masuk.style.display = 'none';
    landing1.style.display = 'none'
    container_dropdown_admin.style.display = 'none'
    overlay_dropdown_admin.style.display = 'none'
    container_income.style.display = 'none'
})

// menutup add toping admin
const close_toping_masuk = document.querySelector('.close_toping_masuk ')

close_toping_masuk.addEventListener('click', function(){
    kotak_toping_masuk.style.display = 'none'
    container_income.style.display = 'unset'
})



pemberitahuan_register









// logout akun pembeli--------------------
const kotak_logout_dropdown_pembeli = document.querySelector('.kotak_logout_dropdown_pembeli')

kotak_logout_dropdown_pembeli.addEventListener('click', function(){
    akun.style.display = 'flex'
    akun_login.style.display = 'none'
    overlay_dropdown_pembeli.style.display = 'none'
    container_dropdown_pembeli.style.display = 'none'
    landing1.style.display = 'unset'
    overlaylanding1.style.display = 'unset'
    container_profile.style.display = 'none'
    container_my_cart.style.display = 'none'
    container_detail_product1.style.display = 'none'
    container_detail_product2.style.display = 'none'
    container_detail_product3.style.display = 'none'
    container_detail_product4.style.display = 'none'
    total_jumlah_belanjaan.innerHTML = 0
    total_belanjaan = 0

})



// logout akun admin--------------------
const kotak_logout_dropdown_admin = document.querySelector('.kotak_logout_dropdown_admin')

kotak_logout_dropdown_admin.addEventListener('click', function(){
    akun.style.display = 'flex'
    akun_admin_login.style.display = 'none'
    overlay_dropdown_admin.style.display = 'none'
    container_dropdown_admin.style.display = 'none'
    landing1.style.display = 'unset'
    overlaylanding1.style.display = 'unset'
    total_jumlah_belanjaan.innerHTML = 0
    kotak_product_masuk.style.display = 'none'
    kotak_toping_masuk.style.display = 'none'
    container_income.style.display = 'none'
})




















