const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyA7NKYCkumk4GH99NH__nawb8Fslm7OOhU',
    authDomain: 'web-quickstart-45b7f.firebaseapp.com',
    projectId: 'web-quickstart-45b7f'
  });
  
  var db = firebase.firestore();
  var requirements = db.collection("requirements");
  var req_names = ["American Cultures", "Arts and Literature", "Biological Science", "Historical Studies",
                    "International Studies", "Philosophy and Values", "Physical Science", "Social and Behavioral Sciences",
                    "Reading and Composition Part A", "Reading and Composition Part B"]

  module.exports = function (controller) {

    controller.hears(["recommend"], 'direct_message,direct_mention', function (bot, message) {
        bot.startConversation(message, function (err, convo) {

            convo.ask("What course requirement would you like to view? \n \
            0: American Cultures\n \
            1: Arts and Literature \n \
            2: Biological Science \n \
            3: Historical Studies \n \
            4: International Studies \n \
            5: Philosophy and Values \n \
            6: Physical Science \n \
            7: Social and Behavioral Sciences \n \
            8: Reading and Composition Part A \n \
            9: Reading and Composition Part B", [
                {
                    pattern: "^0|1|2|3|4|5|6|7|8|9$",
                    callback: function (response, convo) {
                        document = requirements.doc(req_names[parseInt(response.text)]);
                        document.get().then(function(doc) {
                            if (doc.exists) {
                                var classes = doc.get("courses");
                                var printed = "";
                                for (cl in classes) {
                                    printed = printed + "> " + classes[cl] + ",  \n";
                                }
                                convo.say(printed);
                                console.log("Document data:", doc.data());
                            } else {
                                // doc.data() will be undefined in this case
                                console.log("No such document!");
                            }
                        }).catch(function(error) {
                            console.log("Error getting document:", error);
                        });
                        convo.next();
                    },
                },
                {
                    default: true,
                    callback: function (response, convo) {
                        // Simply repeat the question
                        convo.repeat();
                        convo.next();
                    }
                }
            ]);
        });
    });
}