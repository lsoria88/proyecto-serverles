/* En event toda la info del llamado del evento si fuera una api (body, header, param, stringparam etc)
 En context viene el contexto de la funcion que estan corriendo, ej. cuanto tiempo hace falta para ejecutar la funcion)
 En callback viene la respuesta */

const { ConnectContactLens } = require("aws-sdk")

 const helloWorld = (event,context, callback)=>{
    console.log("Event", event)
    console.log(`Hello ${event.pathParameters.name}`)
    const response = {
        statusCode: 200,
        body: JSON.stringify({success:true})
        }

    console.log("I'm running on ", process.env.ENV)
    console.log("Response:", response)
    callback(null,response)
}

const test = (event,context, callback)=>{
    console.log("Event", event)
    console.log("Hola")
    context.done()
}

const suma = (event, context, callback) => {
    console.log(event)
    const body = JSON.parse(event.body)

    const result = body.a + body.b

    const response = {
        statusCode: 200,
        body: JSON.stringify({result})
        }

    console.log("Response:", response)
    callback(null,response)
}

module.exports = {
    helloWorld,
    suma,
    test
    }


