const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const customExpress = require('./config/customExpress')

const app = customExpress()


app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3000, () => console.log("servidor na porta 3000"));
