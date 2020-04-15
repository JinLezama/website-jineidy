const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello JINEIDY!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
})

exports.productCreated = functions.firestore
.document('products/{productId}')
.onCreate(doc => {
    const product = doc.data();
    const notification = {
        content: 'Added a new product',
        user: `${product.authorFirstName} ${product.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
});

exports.userJoined = functions.auth.user()
.onCreate(user => {

    return admin.firestore().collection('users')
    .doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const notification = {
            content: 'Joined the party',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
    })
})
