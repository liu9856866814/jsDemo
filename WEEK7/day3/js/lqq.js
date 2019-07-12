submit.onclick = function(){
    let name = document.getElementById("uName").value;
    let pwd = document.getElementById("pwd").value;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', './json/login.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            if(data.code===0){
                alert(data.msg);
            }
        }
    }
    let res = {
        user_name: name,
        password: pwd,
    }
    xhr.send(JSON.stringify(res));
}
