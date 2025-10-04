function sendMail(body){
    if(body!=""){
    const params = new URLSearchParams();
    params.append("name", "yirty2@gmail.com");
    params.append("text", body);
    params.append("subject", "websiteからの自動送信");
    params.append("mail", "yirty2@gmail.com");
    fetch("https://script.google.com/macros/s/AKfycbz-lFD9fmGyHFvZbIugKKCV8Q1JfwThKGo3M0iqEARXyeJi6kv7-8X8yZdMJrsPRvsI1g/exec", {method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:params});

    const btn=document.getElementById("btn");
    btn.innerHTML="送信済み";
    }
}

