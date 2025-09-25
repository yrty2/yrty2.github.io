function sendMail(body){
    if(body!=""){
    const params = new URLSearchParams();
    params.append("name", "yirty2@gmail.com");
    params.append("text", body);
    params.append("subject", "websiteからの自動送信");
    params.append("mail", "yirty2@gmail.com");
    fetch("https://script.google.com/macros/s/AKfycbz6MjB_8evRiJij1UMvdt9Lr3EPaI0bqsM722S1dtg3tBdI-CT275RlUJ742uJupRSNLw/exec", {method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:params});

    const btn=document.getElementById("btn");
    btn.innerHTML="送信済み";
    }
}