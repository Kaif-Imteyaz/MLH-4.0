const { spawn } = require('child_process');
const fs = require('fs');


exports.scriptRunner = (req, res) => {

  console.log(req.body);

  const target = req.query.targetUrl;

  console.log(req.query.targetUrl);

  var largeDataSet = [];
  // spawn new child process to call the python script
  const python = spawn('python', ['script.py', `${target}`]);
  // collect data from script
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    largeDataSet.push(data);
  });
  // in close event we are sure that stream is from child process is closed
  // python.on('close', (code) => {
  //     console.log(`child process close all stdio with code ${code}`);
  //     // send data to browser
  //     res.send(largeDataSet.join(""))
  // });

  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);

    // Create a file with the collected data
    const fileName = 'output.txt';
    fs.writeFileSync(fileName, largeDataSet.join(''));

    // Set the content type and headers for the response
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.setHeader('Content-Type', 'text/plain');

    // Send the file as the response
    res.sendFile(fileName, { root: __dirname }, (err) => {
      if (err) {
        console.error('Error sending file: ', err);
        res.status(err.status).end();
      } else {
        console.log('File sent successfully');
        // Remove the temporary file after sending
        fs.unlinkSync(fileName);
      }
    });

  });
}