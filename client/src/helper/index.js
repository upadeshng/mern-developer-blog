export function isLoggedIn() {
  if (localStorage.getItem('jwt')) {
    return true;
  }
}

export function loggedInUser() {
  var current_user = localStorage.getItem('user');

  if (current_user) {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export function loggedInUserId() {
  var current_user = localStorage.getItem('user');

  if (current_user) {
    var user = JSON.parse(localStorage.getItem('user'));
    return user._id;
  }
}
