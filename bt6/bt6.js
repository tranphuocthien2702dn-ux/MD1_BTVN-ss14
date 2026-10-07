let booklist=[
    {ID: 1,
     name: "Truyện Kiều",
     author: "Nguyễn Du",
     year: 1820
    },
    {ID:2, 
     name: "Dế Mèn Phiêu Lưu Ký",
     author: "Tô Hoài",
     year: 1941   
    },
    {
     ID:3,
     name: "Lão Hạc",
     author: "Nam Cao",
     year: 1943
    }
]
// tạo ra menu và đưa ra các lựa chọn cho người dùng
let menu = "1. Hiển thị danh sách sách\n2. Thêm sách vào danh sách\n3. Tìm kiếm sách theo tên\n4. Xóa sách theo ID\n5. Thoát";
console.log(menu);
while(true){
    let choice=Number(prompt("Nhập lựa chọn của bạn:"));
// hiển thị ds sách
if (choice === 1) {
    console.log(`ーーーーーーーーーーーー`);
    for (let i=0; i<booklist.length;i++){
        console.log(`${i+1}-${booklist[i].name}-${booklist[i].author}-${booklist[i].year}`);
    }
}
// thêm sách vào ds
else if (choice === 2) {
let newID=Number(prompt("Nhập ID sách:"));
let newName=prompt("Nhập tên sách:");
let newAuthor=prompt("Nhập tên tác giả:");
let newYear=Number(prompt("Nhập năm xuất bản:"));
let newBook={ID: newID, name: newName, author: newAuthor, year: newYear};
booklist.push(newBook);
console.log(`ーーーーーーーーーーーー`);
console.log("Đã thêm sách thành công!");
console.log(`Danh sách sách hiện tại:`);
for (let i=0; i<booklist.length;i++){
    console.log(`${i+1}-${booklist[i].name}-${booklist[i].author}-${booklist[i].year}`);
}
}
// tìm kiếm sách theo tên
else if (choice === 3) {
    let searchName=prompt("Nhập tên sách cần tìm kiếm:");
    let i=booklist.findIndex(function(el,i){
        return el.name === searchName;
    });
    console.log(`ーーーーーーーーーーーー`);
    if (i !== -1) {
        console.log(`Sách cần tìm kiếm là: ${booklist[i].name}-${booklist[i].author}-${booklist[i].year}`);
    } else {
        console.log("Không tìm thấy sách!");
    }
}
// xóa sách theo ID
else if (choice === 4) {
    let deleteid=Number(prompt("Nhập ID sách cần xóa:"));
    let i=booklist.findIndex(function(el,i){
        return el.ID === deleteid;
    });
    console.log(`ーーーーーーーーーーーー`);
    if (i !== -1) {
        booklist.splice(i,1);
        console.log(`Đã xóa sách có ID ${deleteid} thành công!`);
        console.log(`Danh sách sách hiện tại:`);
        for (let i=0; i<booklist.length;i++){
            console.log(`${i+1}-${booklist[i].name}-${booklist[i].author}-${booklist[i].year}`);
        }
    } else {
        console.log("Không tìm thấy sách cần xóa!");
    }
}
// thoát chương trình
else if (choice === 5) {
    console.log(`ーーーーーーーーーーーー`);
    console.log(`cảm ơn bạn đã sử dụng chương trình`);
    break;
}
// không hợp lệ
else {
    console.log(`ーーーーーーーーーーーー`);
    console.log("không hợp lệ");
}

}