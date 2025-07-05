const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    let valid = true;
    // پک کردن پیام های خطا
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    //بررسی نام 
    if(nameInput.value.trim() === ""){
        document.getElementById("name-error").textContent = "نام الزامی است";
        valid = false;
    }

    //بررسی ایمیل
    if(!emailInput.value.includes("@")){
        document.getElementById("email-error").textContent = "ایمیل معتبر وارد کنید";
        valid = false;
    }

    //بررسی پیام
    if(messageInput.value.trim().length < 10){
        document.getElementById("message-error").textContent = "پیام باید حداقل ده کاراکتر باشد";
        valid = false;
    }
    if(valid){
        alert("پیام با موفقیت ارسال شد");
        form.reset();
    }
});