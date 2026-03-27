importScripts('https://cdn.jsdelivr.net/npm/firebase@10.12.0/firebase-app-compat.min.js');
importScripts('https://cdn.jsdelivr.net/npm/firebase@10.12.0/firebase-messaging-compat.min.js');

firebase.initializeApp({
  apiKey: "AIzaSyAA_t5giSsGRYF5UoaBu-jBwiNqCWHD9YY",
  authDomain: "fieldops-paintball.firebaseapp.com",
  projectId: "fieldops-paintball",
  storageBucket: "fieldops-paintball.firebasestorage.app",
  messagingSenderId: "480128042458",
  appId: "1:480128042458:web:1cae5cab302299410eace3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification?.title || payload.data?.title || 'FieldOps';
  const body = payload.notification?.body || payload.data?.body || '';
  self.registration.showNotification(title, {
    body: body,
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    tag: 'fieldops-notification',
    renotify: true
  });
});
