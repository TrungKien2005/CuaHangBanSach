let eyeicon = document.getElementById("eyeicon");
        let password = document.getElementById("password");
        let reeyeicon = document.getElementById("reeyeicon");
        let repassword = document.getElementById("repassword");
        eyeicon.onclick = function(){
            if(password.type == "password"){
                password.type = "text";
                eyeicon.src = "image/hethong/eye-open.png"
            }
            else{
                password.type = "password";
                eyeicon.src = "image/hethong/eye.png"
            }
        }
        reeyeicon.onclick = function(){
            if(repassword.type == "password"){
                repassword.type = "text";
                reeyeicon.src = "image/hethong/eye-open.png"
            }
            else{
                repassword.type = "password";
                reeyeicon.src = "image/hethong/eye.png"
            }
        }

document.getElementById("registerForm")
document.addEventListener("submit",function (event){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    if(password !== repassword){
        alert("Mật khẩu nhập lại không trùng");
        return;
    }

    const user = {
        email: email,
        password: password,
    };
    
    localStorage.setItem(email, JSON.stringify(user));
    alert("Đăng ký thành công! Hãy đăng nhập");
    window.location.href = "login.html";
});
        