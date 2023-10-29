const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link") ; 
  

pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {

    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
      if (password.type === "password") {
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

const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:6060/api/v1/users/login',
      data: {
        email,
        password
      }
    })
    console.log(res);
    if (res.data.status === 'success') {
      alert('Success', 'Logged in successfully');
      window.setTimeout(() => {
        location.assign('/scan');
      }, 1500);
    }

  } catch (err) {
    console.log(err.response);
  }
}

forms.addEventListener('submit', e => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  login(email, password)
})


