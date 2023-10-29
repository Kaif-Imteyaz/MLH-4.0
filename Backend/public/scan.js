// const scanButton = document.getElementById('button-addon2');


// const getScan = async (targetUrl) => {
//     try {
//         const res = await axios({
//             method: 'GET',
//             url: `http://127.0.0.1:6060/api/v1/users/scan?targetUrl=${targetUrl}`,
//         })

//     } catch (err) {
//         console.log(err.response);
//     }
// }

// scanButton.addEventListener('click', async e => {
//     // e.preventDefault(); 
//     const targetUrl = document.getElementById('targetUrl').value;

//     console.log(targetUrl);

//     getScan(targetUrl);


// })

const scanButton = document.getElementById('button-addon2');

function downloadFile(targetUrl) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://127.0.0.1:6060/api/v1/users/scan?targetUrl=${encodeURIComponent(targetUrl)}`, true);
    xhr.responseType = 'blob'; // Set the response type to blob
    xhr.onload = function () {
        const blob = xhr.response;
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'output.txt'; // Set the download file name
        link.click();
    };
    xhr.send();
}

scanButton.addEventListener('click', function () {
    const targetUrl = document.getElementById('targetUrl').value;
    downloadFile(targetUrl);
});
