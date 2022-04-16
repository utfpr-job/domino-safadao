const { spawn } = require('child_process');

const search = (...params) => {
  return new Promise((resolve, reject) => {
    const python = spawn('python', [__dirname + '/search.py', ...params ])

    let response = ''

    python.stdout.on('data', (data) => {
      response = data.toString()
    })

    python.on('close', (code) => {
      if (code === 0) {
        return resolve(response)
      }
      return reject('error code: ' + code)
    })
  })
}

module.exports = {
  search
}
