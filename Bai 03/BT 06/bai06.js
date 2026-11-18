const { tinhDiemTB, xepLoai } = require('./xulyDiem');

const sinhVien = [
    {
        hoTen: "Nguyen Hoang Hai",
        toan: 9,
        ly: 8,
        hoa: 9
    },
    {
        hoTen: "Tran Quoc Huy",
        toan: 7,
        ly: 6,
        hoa: 7
    },
    {
        hoTen: "Le Hoang Anh Tien",
        toan: 4,
        ly: 5,
        hoa: 4
    }
];

console.log("===== KET QUA HOC TAP =====");

sinhVien.forEach((sv, index) => {
    const diemTB = tinhDiemTB(sv.toan, sv.ly, sv.hoa);
    const loai = xepLoai(diemTB);

    console.log("----------------------------");
    console.log("Sinh vien:", index + 1);
    console.log("Ho ten:", sv.hoTen);
    console.log("Diem trung binh:", diemTB.toFixed(2));
    console.log("Xep loai:", loai);
});
