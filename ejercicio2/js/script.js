// Inicializar Firebase
var config = {
    apiKey: "AIzaSyB_mAMu4ynqygedgwcqalRxj0pSj4qlu2w",
    authDomain: "prueba2-822b4.firebaseapp.com",
    databaseURL: "https://prueba2-822b4-default-rtdb.firebaseio.com",
    projectId: "prueba2-822b4",
    storageBucket: "prueba2-822b4.appspot.com",
    messagingSenderId: "691901708900",
    appId: "1:691901708900:web:af0170ccd00d524d2abd71",
    measurementId: "G-VBR7HB0CMX"
    };
    firebase.initializeApp(config);
    
    // Referencia a la colección messages
    var messagesRef = firebase.database().ref('messages');
    
    // Esperando el envío de mensajes
    document.getElementById('contactForm').addEventListener('submit', submitForm);
    
    // Enviar formulario
    function submitForm(e){
      e.preventDefault();
    
      // Obtener valores
      var name = getInputVal('name');
      var email = getInputVal('email');
      var website = getInputVal('website');
      var budget = getInputVal('budget');
      var timeline = getInputVal('timeline');
      var operacion = getInputVal('operacion');
      var message = getInputVal('message');
    
      // Guardar mensaje
      saveMessage(name, email, website, budget, timeline, operacion, message);
    
      // Mostrar alerta
      document.querySelector('.alert').style.display = 'block';
    
      // Ocultar alerta después de 3 segundos
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);
    
      // Limpiar formulario
      document.getElementById('contactForm').reset();
    }
    
    // Función para obtener el valor del formulario
    function getInputVal(id){
      return document.getElementById(id).value;
    }
    
    // Guardar el mensaje en Firebase
    function saveMessage(name, email, website, budget, timeline, operacion, message){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        name: name,
        email: email,
        website: website,
        budget: budget,
        timeline: timeline,
        operacion: operacion,
        message: message
        
      });
    }
  
  
  