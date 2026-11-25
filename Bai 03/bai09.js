
const { MongoClient } = require('mongodb');

const diaChiMongo = 'mongodb://127.0.0.1:27017';
const ketNoi = new MongoClient(diaChiMongo);

async function xuLySinhVien() {
    try {
        await ketNoi.connect();
        console.log('Da ket noi thanh cong den MongoDB!');

        const duLieu = ketNoi.db('qlsinhvien');
        const bangSinhVien = duLieu.collection('students_test');

        const danhSachMoi = [
            {
                masv: 'SV101',
                hoten: 'Nguyen Hoang Hai',
                tuoi: 20,
                diem: 8.2
            },
            {
                masv: 'SV102',
                hoten: 'Tran Quoc Huy',
                tuoi: 19,
                diem: 9.1
            },
            {
                masv: 'SV103',
                hoten: 'Vo Kim Truc',
                tuoi: 21,
                diem: 4.2
            },
            {
                masv: 'SV104',
                hoten: 'Le Hoang Anh Tien',
                tuoi: 20,
                diem: 7.8
            },
            {
                masv: 'SV105',
                hoten: 'Vo Thanh Phuc',
                tuoi: 22,
                diem: 3.6
            },
            {
                masv: 'SV106',
                hoten: 'Vo Duy Anh',
                tuoi: 19,
                diem: 6.5
            }
        ];

        const themDuLieu = await bangSinhVien.insertMany(danhSachMoi);
        console.log('\nDa them:', themDuLieu.insertedCount, 'sinh vien');

        console.log('\n===== THUC HIEN DELETEONE =====');

        const xoaMot = await bangSinhVien.deleteOne({
            masv: 'SV102'
        });

        console.log('So sinh vien da xoa:', xoaMot.deletedCount);

        console.log('\n===== THUC HIEN DELETEMANY =====');

        const xoaNhieu = await bangSinhVien.deleteMany({
            diem: { $lt: 5 }
        });

        console.log('So sinh vien co diem duoi 5 da xoa:', xoaNhieu.deletedCount);

        console.log('\n===== DANH SACH SINH VIEN CON LAI =====');

        const ketQua = await bangSinhVien.find({}).toArray();

        if (ketQua.length > 0) {
            ketQua.forEach((sv, viTri) => {
                console.log(`\nSinh vien thu ${viTri + 1}:`);
                console.log('Ma sinh vien:', sv.masv);
                console.log('Ho ten:', sv.hoten);
                console.log('Tuoi:', sv.tuoi);
                console.log('Diem:', sv.diem);
            });
        } else {
            console.log('Khong con sinh vien nao trong danh sach!');
        }

        console.log('\nTong so sinh vien con lai:', ketQua.length);

    } catch (loi) {
        console.log('Co loi xay ra:', loi.message);
    } finally {
        await ketNoi.close();
        console.log('\nDa ngat ket noi MongoDB!');
    }
}

xuLySinhVien();
