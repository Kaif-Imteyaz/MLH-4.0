const get = document.getElementById("getstart");

const authorization = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://127.0.0.1:6060/api/v1/users/currentUser'
        })
        // 1) If logged in, redirect to scan page
        if (res.data.status === 'success') {
            window.setTimeout(() => {
                location.assign('/scan');
            }, 1500);
        } 
    } catch (err) {
        // 2) If not logged in, redirect to login page
        if(err.response.status === 404) {
            // else redirect to login page
            window.setTimeout(() => {
                location.assign('/login');
            }, 1500);
        }
    }
}

get.addEventListener('click',e => {
    console.log('click');
    //1) Get the user based on current cookie token
    authorization();
    //2) If user is logged in, redirect to scan page

})


scan.addEventListener('click', e => {
    e.preventDefault();
    console.log('click');
})


const login = async (targetUrl) => {
    console.log(targetUrl);
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
  

