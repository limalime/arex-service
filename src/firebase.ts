import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/**
 * Initializes Firebase Web SDK using provided config.
 * Uses the user-provided client credentials.
 */
const firebaseConfig = {
  apiKey: 'AIzaSyC5qQDZNUw_xErB0tUJcm2YcqvyMDqoGok',
  authDomain: 'arex-service.firebaseapp.com',
  projectId: 'arex-service',
  storageBucket: 'arex-service.firebasestorage.app',
  messagingSenderId: '253695306047',
  appId: '1:253695306047:web:1d6bf3f32bae106a7ccb8a',
  measurementId: 'G-6TBETRN63Y',
} as const;

let firestoreInstance: ReturnType<typeof getFirestore> | null = null;

export function getDb() {
  if (!firestoreInstance) {
    if (getApps().length === 0) {
      initializeApp(firebaseConfig);
    }
    firestoreInstance = getFirestore();
  }
  return firestoreInstance;
}

export const COLLECTION_NAME = process.env.FIREBASE_COLLECTION || 'arexService';

