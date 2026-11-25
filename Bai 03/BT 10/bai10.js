
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();

        console.log('Ket noi MongoDB thanh cong!');

        const db = client.db('qlsinhvien');

        await db.collection('departments').drop().catch(() => {});

        await db.collection('departments').insertMany([
            { makhoa: 'CNTT', tenkhoa: 'Cong nghe thong tin' },
            { makhoa: 'QTKD', tenkhoa: 'Quan tri kinh doanh' },
            { makhoa: 'DTVT', tenkhoa: 'Dien tu vien thong' }
        ]);

        await db.collection('students_join').drop().catch(() => {});

        await db.collection('students_join').insertMany([
            {
                masv: 'CNTT001',
                hoten: 'Nguyen Van Tien',
                makhoa: 'CNTT'
            },
            {
                masv: 'CNTT002',
                hoten: 'Tran Thi Ngoc',
                makhoa: 'CNTT'
            },
            {
                masv: 'QTKD001',
                hoten: 'Le Minh Anh',
                makhoa: 'QTKD'
            },
            {
                masv: 'DTVT001',
                hoten: 'Pham Quoc Bao',
                makhoa: 'DTVT'
            }
        ]);

        console.log('Da tao du lieu khoa va sinh vien!');

        const result = await db.collection('students_join').aggregate([
            {
                $lookup: {
                    from: 'departments',
                    localField: 'makhoa',
                    foreignField: 'makhoa',
                    as: 'thongtinkhoa'
                }
            },
            {
                $unwind: '$thongtinkhoa'
            },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: '$thongtinkhoa.tenkhoa'
                }
            }
        ]).toArray();

        console.log('\n===== DANH SACH SINH VIEN =====');
        console.table(result);

    } catch (error) {
        console.log('Loi:', error);
    } finally {
        await client.close();
    }
}

main();
