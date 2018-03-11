

    // ========================================== START CODING BELOW!!
   var config = {
    apiKey: "AIzaSyB3RW5pMmh3aD8zLgOTbf1omYmtCYS1Yfk",
    authDomain: "my-project-51be5.firebaseapp.com",
    databaseURL: "https://my-project-51be5.firebaseio.com",
    projectId: "my-project-51be5",
    storageBucket: "my-project-51be5.appspot.com",
    messagingSenderId: "986560355973"
  };
  firebase.initializeApp(config);

    var dataRef = firebase.database();




    // Initial Values for Contact
    var name = "";
    var email = "";
    var phone = "";
    var comment = "";

    // Initial Values for Vehicle
    var plate = "";
    var year = "";
    var make = "";
    var model = "";
    //var color = "";

    // Capture Button Click
    $("#add-user").on("click", function(event) {
      event.preventDefault();




      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      //Contact
      name = $("#name-input").val().trim();
      email = $("#email-input").val().trim();
      phone = $("#phone-input").val().trim();
      comment = $("#comment-input").val().trim();

      //Vehicle
      plate = $("#plate-input").val().trim();
      year = $("#car-years").val().trim();
      make = $("#car-makes").val().trim();
      model = $("#car-models").val().trim();
      //color = $("#vehicle-color").val().trim();

      // Code for the push
      dataRef.ref().push({

        name: name,
        email: email,
        phone: phone,
        comment: comment,
        plate: plate,
        year: year,
        make: make,
        model: model,
        //color: color,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    });

    // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    dataRef.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().email);
      console.log(childSnapshot.val().phone);
      console.log(childSnapshot.val().comment);
      console.log(childSnapshot.val().plate);
      console.log(childSnapshot.val().year);
      console.log(childSnapshot.val().make);
      console.log(childSnapshot.val().model);
      //console.log(childSnapshot.val().color);

      console.log(childSnapshot.val().joinDate);



      // full list of items to the well
      $(".member-list").append("<tr><td><input type='checkbox' name='record'></td><td>" + childSnapshot.val().name +  "</td><td>" + childSnapshot.val().email + "</td><td>" + childSnapshot.val().phone + "</td><td>" + childSnapshot.val().comment + "</td></tr>");
      


  // Clears all of the text-boxes
      $("#name-input").val("");


    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

    dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

      // Change the HTML to reflect
      $("#name-display").text(snapshot.val().name);
      $("#email-display").text(snapshot.val().email);
      $("#phone-display").text(snapshot.val().phone);
      $("#comment-display").text(snapshot.val().comment);
      $("#plate-display").text(snapshot.val().plate);
      $("#year-display").text(snapshot.val().year);
      $("#make-display").text(snapshot.val().make);
      $("#model-display").text(snapshot.val().model);
      //$("#color-display").text(snapshot.val().color);
      
    });





