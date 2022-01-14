const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./controllers/atendimento.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  require('./index.js')
})