let eyeicon = document.getElementById("eyeicon");
        let password = document.getElementById("password");
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

document
    .getElementById("loginForm")
    .addEventListener("submit",function(event) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        var user = localStorage.getItem(email);

        if(user){
            var parsedUser = JSON.parse(user);
            if(parsedUser.password === password){
                localStorage.setItem("user",JSON.stringify(parsedUser));
                window.location.href = "index.html";
            }
            else{
                alert("Mật khẩu không chính xác");
            }
        }
        else{
            alert("Email không chính xác");
        }

    });
