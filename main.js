

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA3jM1uE4Sd2_o0f7mw6pwTMHlK-LGPZR0",
    authDomain: "contactform-d77f5.firebaseapp.com",
    databaseURL: "https://contactform-d77f5.firebaseio.com",
    projectId: "contactform-d77f5",
    storageBucket: "contactform-d77f5.appspot.com",
    messagingSenderId: "484653246871",
    appId: "1:484653246871:web:f46a9f75718e32a9d1bcd2",
    measurementId: "G-KGDF0E9GYW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference messages collection
  let messagesRef = firebase.database().ref('messages')
  


  firebase.analytics();// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm)

//Submit Form
function submitForm(e) {
    e.preventDefault()

    // Get Values
    var name = getInputVal('name')
    var company = getInputVal('company')
    var email = getInputVal('email')
    var phone = getInputVal('phone')
    var message = getInputVal('message')

    // Save Message
    saveMessage(name, company, email, phone, message)

    // Show alert
    document.querySelector('.alert').style.display = 'block'

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none'
    }, 3000)

    // Clear Form
    document.getElementById('contactForm').reset()
    
}

// function to get form values
function getInputVal(id) {
    return document.getElementById(id).value
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    let newMessageRef = messagesRef.push()
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })

}