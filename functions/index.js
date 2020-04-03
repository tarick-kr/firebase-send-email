const functions = require('firebase-functions')
const path = require('path')
const { Storage } = require('@google-cloud/storage')
const storage = new Storage({
  keyFilename: path.join(__dirname, '../fb-send-email-930a2bc2c54f.json'),
  projectId: 'fb-send-email'
})

exports.addedOrder = functions
  .firestore
  .document('orders/{orderID}')
  // .onCreate((snap, context) => {
  .onCreate(() => {
    // const data = snap.data()
    // const currentDate = data.dataClient.currentDate
    // const fullCurrentDate = data.dataClient.idCurrentDate
    // const firstName = data.dataClient.firstName
    // const lastName = data.dataClient.lastName
    // const phone = data.dataClient.phone
    // const email = data.dataClient.email
    // const orderId = context.params.orderID
    // const products = data.productsInOrder
    // return generatePDF(currentDate, fullCurrentDate, firstName, lastName, phone, email, orderId, products)
    return test()
  })

// const cwd = path.join(__dirname, '..')

function test () {
  console.log(__dirname)
  // console.log(path.join(__dirname, '../fb-send-email-930a2bc2c54f.json'))
  async function listBuckets () {
    // Lists all buckets in the current project
    const [buckets] = await storage.getBuckets()
    console.log('Buckets:')
    buckets.forEach(bucket => {
      console.log(bucket.name)
    })
  }

  listBuckets().catch(console.error)
  // console.log(path.join(__dirname, '../fb-send-email-930a2bc2c54f.json'))
  // console.log(storage)
  // storage.getBuckets().then(bucket => console.log(bucket))
}

//   async function downloadFile () {
//     const options = {
//       // The path to which the file should be downloaded, e.g. "./file.txt"
//       destination: destFilename
//     }
//
//     // Downloads the file
//     await storage
//       .bucket(bucketName)
//       .file(srcFilename)
//       .download(options)
//
//     console.log(
//       `gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
//     )
//   }
//
//   downloadFile().catch(console.error)
// }
// test(...process.argv.slice(2))

// const Pdfkit = require('pdfkit')
// const { Storage } = require('@google-cloud/storage')
// const storage = new Storage({ projectId: 'fb-send-email' })

// function generatePDF (currentDate, fullCurrentDate, firstName, lastName, phone, email, orderId, products) {
// function generatePDF () {
//   const doc = new Pdfkit()
//   // const filename = `/${fullCurrentDate}/` + `${firstName}_${lastName}` + '.pdf'
//   const bucket = storage.bucket('pdf')
//   const fileName = 'my-existing-file.pdf'
//   const file = bucket.file(fileName)
//   const bucketFileStream = file.createWriteStream()
//
//   doc.pipe(bucketFileStream)
//   doc.y = 320
//   doc.fillColor('black')
//   doc.text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in...', {
//     paragraphGap: 10,
//     indent: 20,
//     align: 'justify',
//     columns: 2
//   })
//   doc.end()

//
// bucketFileStream.on('finish', function () {
//   return orderSend(filename, currentDate, fullCurrentDate, firstName, lastName, phone, email, orderId, products)
// })
//
// bucketFileStream.on('error', function (err) {
//   console.error(err)
// })
// console.log(filename)
// console.log(currentDate)
// console.log(fullCurrentDate)
// console.log(firstName)
// console.log(lastName)
// console.log(phone)
// console.log(email)
// console.log(orderId)
// console.log(products)
// }

// function orderSend (filename, currentDate, fullCurrentDate, firstName, lastName, phone, email, orderId, products) {
//
// }
