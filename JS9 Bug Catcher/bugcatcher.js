
// var currentUser = null;

// 	var login = function(email){
//   		currentUser = email;
// 	}

// 	var logout = function(){
//   		currentUser = null;
// 	 }

// 	var getLoggedInUser = function(){
//   		getUserDetails(currentUser, function(result){
// 		if(result === null) {
//       console.log("Not logged in");
//     } else {
//     console.log(result);
//     //print out friends list
//   		var output = '';
//     	for(var id in result.friends){
//   		output += id + ', ';
// 		};
//     }
//     console.log(output);
// 		});
// 	};

// login('john@doe.com');

// getLoggedInUser();

// logout();

// getLoggedInUser();




/*********************************/
/** DO NOT EDIT BELOW THIS LINE **/
/*********************************/

/**
 * MOCK - get user details
 * @param  {string} email
 * @return {void}
 */
// function getUserDetails(email, callback){
//   if(email){
//     callback({
//       email: email,
//       username: 'John Doe',
//       friends: [0,1,2,3]
//     });
//   } else {
//     callback(null); 
//   }
// }




var sendMessage = function(myUserId, targetUserId, message, allUsers){
  if(myUserId = null || targetUserId == null || message = null){
    return false;
  }
  for(var i = 0; i < allUsers.length; i++){
    if(allUsers[i].uid = targetUserId){
      console.log(myUserId + " is sending '" + message + "' to " + allUsers[i].uid);
    }
  }
}

var myUser1 = { uid: 0 };
var myUser2 = { uid: 1 };
var myUser3 = { uid: 2 };
var allUsers = [myUser1, myUser2, myUser3];

sendMessage(myUser1.uid, myUser2.uId, "Hey there!", allUsers);
sendMessage(myUser1.uid, myUser3.uId, "What\"s up?", allUsers);
sendMessage(myUser3.uld, myUser1.uId, "Nothing is up.", allUsers);








