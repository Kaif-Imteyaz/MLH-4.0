const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bi-eye", "bi-eye-slash");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bi-eye-slash", "bi-eye");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");

 // Toggle the text content of the link
 if (link.textContent === "Sign up") {
  link.textContent = "Login";
} else {
  link.textContent = "Sign up";
}
})
})