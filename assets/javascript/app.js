

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
    var first = "";
    var last = "";
    var email = "";
    var phone = "";
    var comment = "";

    // Initial Values for Vehicle
    var plate = "";
    var year = "";
    var make = "";
    var model = "";
    var color = "";

    var dateReturn = "";
    var airline = "";
    var flight = "";
    var arriving = "";

    // Capture Button Click
    $("#add-user").on("click", function(event) {
      event.preventDefault();






      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      //Contact
      first = $("#first-input").val().trim();
      last = $("#last-input").val().trim();
      email = $("#email-input").val().trim();
      phone = $("#phone-input").val().trim();
      comment = $("#comment-input").val().trim();

      //Vehicle
      plate = $("#plate-input").val().trim();
      year = $("#car-years").val().trim();
      make = $("#car-makes").val().trim();
      model = $("#car-models").val().trim();
      color = $("#car-color").val().trim();

      //Return Flight
      dateReturn = $("#return-input").val().trim();
      airline = $("#airline-input").val().trim();
      flight = $("#flight-input").val().trim();
      arriving = $("#arriving-input").val().trim();

      // Code for the push
      dataRef.ref().push({

        first: first,
        last: last,
        email: email,
        phone: phone,
        comment: comment,
        plate: plate,
        year: year,
        make: make,
        model: model,
        color: color,
        dateReturn: dateReturn,
        airline: airline,
        flight: flight,
        arriving: arriving,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    });

    // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    dataRef.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
 
      console.log(childSnapshot.val().first);
      console.log(childSnapshot.val().last);
      console.log(childSnapshot.val().email);
      console.log(childSnapshot.val().phone);
      console.log(childSnapshot.val().comment);
      console.log(childSnapshot.val().plate);
      console.log(childSnapshot.val().year);
      console.log(childSnapshot.val().make);
      console.log(childSnapshot.val().model);
      console.log(childSnapshot.val().color);
      console.log(childSnapshot.val().dateReturn);
      console.log(childSnapshot.val().airline);
      console.log(childSnapshot.val().flight);
      console.log(childSnapshot.val().arriving);


      //console.log(childSnapshot.val().joinDate);



      // full list of items to the well
      $(".member-list").append("<tr><td><a href='update-form.html'><span class='glyphicon glyphicon-edit'></span></a><input type='checkbox' hidden='hidden' class='edit' name='record'></td><td>" + childSnapshot.val().last +  "</td><td>" + childSnapshot.val().email + "</td><td>" + childSnapshot.val().phone + "</td><td>" + childSnapshot.val().comment + "</td></tr>");
      


  // Clears all of the text-boxes
      //$("#name-input").val("");


    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

    dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

      // Change the HTML to reflect
      $("#first-display").text(snapshot.val().first);
      $("#last-display").text(snapshot.val().last);
      $("#email-display").text(snapshot.val().email);
      $("#phone-display").text(snapshot.val().phone);
      $("#comment-display").text(snapshot.val().comment);
      $("#plate-display").text(snapshot.val().plate);
      $("#year-display").text(snapshot.val().year);
      $("#make-display").text(snapshot.val().make);
      $("#model-display").text(snapshot.val().model);
      $("#color-display").text(snapshot.val().color);
      $("#Return-display").text(snapshot.val().dateReturn);
      $("#airline-display").text(snapshot.val().airline);
      $("#flight-display").text(snapshot.val().flight);
      $("#arriving-display").text(snapshot.val().arriving);
      
    });

          // Log everything that's coming out of snapshot

      console.log(childSnapshot.val().first);
      console.log(childSnapshot.val().last);
      console.log(childSnapshot.val().email);
      console.log(childSnapshot.val().phone);
      console.log(childSnapshot.val().comment);
      console.log(childSnapshot.val().plate);
      console.log(childSnapshot.val().year);
      console.log(childSnapshot.val().make);
      console.log(childSnapshot.val().model);
      console.log(childSnapshot.val().color);
      console.log(childSnapshot.val().dateReturn);
      console.log(childSnapshot.val().airline);
      console.log(childSnapshot.val().flight);
      console.log(childSnapshot.val().arriving);

    





