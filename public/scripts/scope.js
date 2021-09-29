var italy = function() {
  console.log("My friend in Italy is " + myFriend);
}

var locales = {
  europe: function() {
    var myFriend = "Monique";
    console.log("My friend in Europe is " + myFriend);

    var france = function() { 
      var myFriend = "Andreas"
      var paris = function() {
        myFriend = "Jean"
        console.log("My friend in Paris is " + myFriend);
      };

      paris();
      console.log("My friend in France is " + myFriend);
    };

    france();

    var spain = function() {
      console.log("My friend in Spain is " + myFriend);
    }
    spain();

    italy();
  }
};

locales.europe();
