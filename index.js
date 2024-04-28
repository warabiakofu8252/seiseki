function login() {
    var password = document.getElementById("password").value;
    // パスワード設定の場所
    if (password === "sasachin") {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("protected-content").style.display = "block";
        document.getElementById("protected-content2").style.display="none";
        document.getElementById("protected-content3").style.display="none";
    } else {
        document.getElementById("message").textContent = "パスワードが正しくありません。";
    }
}
function forget(){
    document.getElementById("login-form").style.display="none";
    document.getElementById("protected-content").style.display="none";
    document.getElementById("protected-content2").style.display="block";
    document.getElementById("protected-content3").style.display="none";
}
function why(){
    document.getElementById("login-form").style.display="none";
    document.getElementById("protected-content").style.display="none";
    document.getElementById("protected-content2").style.display="none";
    document.getElementById("protected-content3").style.display="block";
}
function back() {
    location.reload();
}