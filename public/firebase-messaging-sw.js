importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

firebase.initializeApp({
  projectId: "gen-lang-client-0944253890",
  appId: "1:650452745713:web:8bf980f974147013c91850",
  apiKey: "AIzaSyCkTjNmw9KQGnJKVivmLBnd8s6x1H1ggoI",
  messagingSenderId: "650452745713",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png' // or any other icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
