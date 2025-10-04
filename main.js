function sendMail(body){
    if(body!=""){
    const params = new URLSearchParams();
    params.append("name", "yirty2@gmail.com");
    params.append("text", body);
    params.append("subject", "websiteからの自動送信");
    params.append("mail", "yirty2@gmail.com");
    fetch("https://script.google.com/macros/s/AKfycbzs6sjZHYo5WmE0aJ2UF7pqy59hg-v1pK-2SoQMupylkh3_L7ZPD6SkHsBj4Qqo5I4ErQ/exec", {method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:params});

    const btn=document.getElementById("btn");
    btn.innerHTML="送信済み";
    }
}

