
let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}


let cart = document.querySelector('.cart');
document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function() {
    var userIcon = document.getElementById("user-icon");
    userIcon.addEventListener("click", function() {
        window.location.href = "./login.html";
    });
});

var swiper = new Swiper(".new-arival", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    centeredSlides:true,
    loop: true, 
    breakpoints:{
        0:{
            slidesPerView:0,
        },
        568:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        1020:{
            slidesPerView:3,
        },
    },
});

function isValidInput(){
    let ma = document.getElementById('txtMa').value;
    let ten = document.getElementById('txtTen').value;
    
    let ngayTG = document.getElementById('ngayTG').value;
    let sdt = document.getElementById('sdt').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;
    
    let regexMa = /^TV+([0-9]{3})$/;
    let regexUsername = /^[a-zA-Z0-9_]{4,}$/; 
    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
    
    if(regexUsername.test(username) == false){
        document.getElementById('errUsername').innerHTML = "Tên đăng nhập phải chứa ít nhất 4 ký tự và chỉ bao gồm chữ, số và dấu gạch dưới"
        return false;
    }
    else
        document.getElementById('errUsername').innerHTML = "";

    if(regexPassword.test(password) == false){
        document.getElementById('errPassword').innerHTML = "Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm ít nhất một chữ cái viết thường, một chữ cái viết hoa và một số"
        return false;
    }
    else
        document.getElementById('errPassword').innerHTML = "";

    if(password !== confirm_password){
        document.getElementById('errConfirmPassword').innerHTML = "Mật khẩu nhập lại không khớp"
        return false;
    }
    else
        document.getElementById('errConfirmPassword').innerHTML = "";
    if(regexMa.test(ma) == false){
        document.getElementById('errMa').innerHTML = "Nhập sai định dạng mã. Bắt đầu là TV và theo sau là 3 chữ số."
        return false;
    }
    else
        document.getElementById('errMa').innerHTML = ""


    let regexTen  = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/    
    if(regexTen.test(ten) == false){
        document.getElementById('errTen').innerHTML = "Chỉ dùng chữ hoa đầu từ không dùng số không rỗng"
        return false;
    }
    else
        document.getElementById('errTen').innerHTML = ""

    let ngayHnay = new Date();
    let ngayThamGia = new Date(ngayTG);
    let ngayThamGiaChuan = new Date(ngayHnay.setDate(ngayHnay.getDate() + 30));
    
    if(ngayThamGia < ngayThamGiaChuan){
        document.getElementById('errNgay').innerHTML = `Ngày tham gia phải sau ngày hôm nay ít nhất 30 ngày.`
        return false;
    }
    else if(ngayTG == null){
        document.getElementById('errNgay').innerHTML = `Chưa chọn ngày.`
        return false;
    }
    else   
        document.getElementById('errNgay').innerHTML = ""

    
    let regexSdt = /^0[0-9]{3}[0-9]{3}[0-9]{3}$/
    if(regexSdt.test(sdt) == false){
        document.getElementById('errSdt').innerHTML = "Số điện thoại 0xxx-xxx-xxx đúng định dạng"
        return false;
    }
    else
        document.getElementById('errSdt').innerHTML = ""


    let regexEmail = /^[A-Za-z]+[A-Za-z0-9]{4}@gmail.com/
    if(regexEmail.test(email) == false){
        document.getElementById('errEmail').innerHTML = "Email theo mẫu xxxxx@gmail.com kí tự đầu dùng chữ, đúng định dạng"
        return false;
    }
    else
        document.getElementById('errEmail').innerHTML = ""

    return true;

}

function submit() {
    // Trích xuất thông tin từ các trường input trong form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
    var ma = document.getElementById('txtMa').value;
    var ten = document.getElementById('txtTen').value;
    var ngayTG = document.getElementById('ngayTG').value;
    var sdt = document.getElementById('sdt').value;
    var email = document.getElementById('email').value;

    // Kiểm tra tính hợp lệ của dữ liệu nhập vào (nếu cần)
    // Ở đây bạn có thể thêm các điều kiện kiểm tra dữ liệu nhập vào, ví dụ như kiểm tra tính hợp lệ của email, password, ...

    // Lưu thông tin vào Local Storage
    var userInfo = {
        'username': username,
        'password': password,
        'ma': ma,
        'ten': ten,
        'ngayTG': ngayTG,
        'sdt': sdt,
        'email': email
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    $('#successModal').modal('show');
};
  

document.addEventListener("DOMContentLoaded", function() {
    const cartIcons = document.querySelectorAll(".bx-cart");
    const cartContainer = document.querySelector(".cart");

    cartIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            const productBox = this.closest(".pox");
            const productName = productBox.querySelector("h2").innerText;
            const productPrice = productBox.querySelector("span").innerText;

         
            const productItem = document.createElement("div");
            productItem.classList.add("box");

            productItem.innerHTML = `
                <img src="${productBox.querySelector("img").src}" alt="">
                <div class="text">
                    <h3>${productName}</h3>
                    <span>${productPrice}</span>
                    <span>x1</span>
                </div>
                <i class='bx bx-trash-alt'></i>
            `;

            cartContainer.appendChild(productItem);

       
            updateTotal();
        });
    });

 
    function updateTotal() {
        const prices = cartContainer.querySelectorAll(".text span:nth-child(2)");
        let total = 0;
        prices.forEach(price => {
            total += parseFloat(price.innerText.replace(/[^0-9.-]+/g,"")); 
        });

    
        const totalElement = document.querySelector(".cart h2");
        totalElement.innerText = `Tổng cộng: ${total.toFixed(0)}`;
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const clickableImages = document.querySelectorAll(".clickable-image");
    clickableImages.forEach(image => {
        image.addEventListener("click", () => {
            window.location.href = "iphone13.html";
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cartContainer = document.querySelector(".cart");

   
    cartContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("bx-trash-alt")) {
            const productBox = event.target.closest(".box");
            productBox.remove(); 

            
            updateTotal();
        }
    });

    function updateTotal() {
        const prices = cartContainer.querySelectorAll(".text span:nth-child(2)");
        let total = 0;
        prices.forEach(price => {
            total += parseFloat(price.innerText.replace(/[^0-9.-]+/g,"")); 
        });

        const totalElement = document.querySelector(".cart h2");
        totalElement.innerText = `Tổng cộng: ${total.toFixed(0)}`;
    }
});
const loginBtn = document.querySelector('.login-btn');
const errorMsg = document.querySelector('.error-msg');

        loginBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            errorMsg.textContent = '(*)Tài khoản hoặc mật khẩu sai';
        });
       
    document.addEventListener('DOMContentLoaded', function () {
        var clickableImage = document.querySelector('.clickable-image');
        clickableImage.addEventListener('click', function() {
            window.location.href = 'iphone13.html';
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        var productContainer = document.getElementById('product-container');
        var clickableImages = productContainer.querySelectorAll('.clickable-image');

        clickableImages.forEach(function(image) {
            image.addEventListener('click', function() {
                window.location.href = 'iphone13.html'; 
            });
        });
    });
