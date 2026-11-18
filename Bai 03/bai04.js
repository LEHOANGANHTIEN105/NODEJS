const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        const db = client.db('qlsinhvien');
        const collection = db.collection('students');

        const students = [
            {
                masv: 'SV001',
                hoten: 'Nguyen Hoang Hai',
                tuoi: 20,
                diem: 8.5
            },
            {
                masv: 'SV002',
                hoten: 'Tran Quoc Huy',
                tuoi: 20,
                diem: 9.0
            },
            {
                masv: 'SV003',
                hoten: 'Le Hoang Anh Tien',
                tuoi: 20,
                diem: 7.5
            }
        ];

        for (const student of students) {
            await collection.updateOne(
                { masv: student.masv },
                { $set: student },
                { upsert: true }
            );
        }

        console.log('\nThem va cap nhat sinh vien thanh cong!');

        console.log('\nDANH SACH SINH VIEN:');

        const danhSach = await collection
            .find({})
            .sort({ masv: 1 })
            .toArray();

        console.log(danhSach);

        console.log('\nTong so sinh vien:', danhSach.length);

    } catch (error) {
        console.log('Loi:', error);
    } finally {
        await client.close();
        console.log('\nDa dong ket noi MongoDB!');
    }
}

main();
