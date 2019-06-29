// 获取元素
let fileBox = document.getElementById('fileBox');
let fileList = document.getElementById('fileList');
let fileLi = fileList.getElementsByTagName('li');

fileBox.ondragover = function (e) {
    e.preventDefault();
};
fileBox.ondrop = function (e) {
    let fileObj = e.dataTransfer.files;
    fileList.innerText = '';
    for (let i = 0; i < fileObj.length; i++) {
        if(fileObj.length === 1){
            fileList.innerHTML = `<li>${fileObj[i].name}</li>`;
        }else{
            fileList.innerHTML += `<li>${fileObj[i].name}</li>`;
        }
    }
  e.preventDefault();
};