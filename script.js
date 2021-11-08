// Notification.permission

Notification.requestPermission().then(function (permission) {
    console.log(permission);
});


var title = "JavaScript Jeep";
icon = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
var body = "It's Your boarding time";
var notification = new Notification(title, { body, icon });

var notification = new Notification('Travel');
notification.close();


// https://levelup.gitconnected.com/creating-browser-notification-in-javascript-79e91bfb76c8
