
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        const db = client.db('qlsinhvien');
        const collection = db.collection('students');

        console.log('\n===== 1. DANH SACH SINH VIEN CO DIEM >= 7 =====');

        const students = await collection
            .find({ diem: { $gte: 7 } })
            .sort({ diem: -1 })
            .toArray();

        console.log('Danh sach sinh vien sau khi sap xep:');
        console.table(students);

        const masv = 'SV001';
        const diemMoi = 9.5;

        console.log('\n===== 2. CAP NHAT DIEM SINH VIEN =====');

        const result = await collection.updateOne(
            { masv: masv },
            { $set: { diem: diemMoi } }
        );

        if (result.matchedCount > 0) {
            console.log('Tim thay sinh vien:', masv);

            if (result.modifiedCount > 0) {
                console.log('Cap nhat diem thanh cong!');
            } else {
                console.log('Diem sinh vien khong thay doi.');
            }
        } else {
            console.log('Khong tim thay sinh vien co ma:', masv);
        }

        console.log('\n===== 3. THONG TIN SINH VIEN SAU CAP NHAT =====');

        const studentUpdated = await collection.findOne({
            masv: masv
        });

        if (studentUpdated) {
            console.table([studentUpdated]);
        }

        console.log('\n===== HOAN THANH BAI 05 =====');

    } catch (error) {
        console.error('Loi:', error);
    } finally {
        await client.close();
    }
}

main();
