function sendMail(body){
    if(body!=""){
    const params = new URLSearchParams();
    params.append("name", "yirty2@gmail.com");
    params.append("text", body);
    params.append("subject", "websiteからの自動送信");
    params.append("mail", "yirty2@gmail.com");
    fetch("https://script.google.com/macros/s/AKfycbyF-SFr4a7XJq7_nMUo5hGR7_6jUj_MfpPBYvUzYUtGHvstIcZ68GOhaHPgMccSo93xdA/exec", {method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:params});

    const btn=document.getElementById("btn");
    btn.innerHTML="送信済み";
    }
}
