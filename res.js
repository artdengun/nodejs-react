'use strict';

// jika restponya benar , maka kita akan memberikan response dalam bentuk function
exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };

    res.json(data);
    res.end();
};

// Nested Join Object
// response untu nested matakuliah 

// exports.oknested = function(values, res){
//     // kita lakukan akumulasi 
//     const hasil = values.reduce((akumulasikan, item) => {
//             // tentukan keygroup
//             if(akumulasikan[item.nama]){
//                 // buat variable group nama mahasiswa
//                 const group = akumulasikan[item.nama];
//                 // cek jika isi array adalah matakuliah
//                 if(Array.isArray(group.matakuliah)){
//                     // tambahkan value ke dalam group matakuliah
//                     group.matakuliah.push(item.matakuliah);
//                 }else{
//                     group.matakuliah = [group.matakuliah, item.matakuliah];
//                 }
//             }else {
//                 akumulasikan[item.nama] = item;
//             }
//             return akumulasikan;
//     }, {});
//     var data = {
//         'status':200,
//         'values':hasil
//     };
//     res.json(data);
//     res.end();


// Nested Join Object
// response untu nested matakuliah 
exports.okenested = function (values, res){
    const hasil = values.reduce((akumulasikan, item) => {
            if(akumulasikan[item.nama]){
                const group = akumulasikan[item.nama];
                if(Array.isArray(group.matakuliah)){
                    group.matakuliah.push(item.matakuliah);
                }else{
                    group.matakuliah = [group.matakuliah, item.matakuliah];
                }
            }else {
                akumulasikan[item.nama] = item;
            }
            return akumulasikan;
    }, {});

    var data = {
        'status':200,
        'values':values
    };

    res.json(data);
    res.end();
};