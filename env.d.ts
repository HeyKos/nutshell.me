/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_FIREBASE_API_KEY: string | undefined;
    VITE_FIREBASE_APP_ID: string | undefined;
    VITE_FIREBASE_AUTH_DOMAIN: string | undefined;
    VITE_FIREBASE_DATABASE_URL: string | undefined;
    VITE_FIREBASE_MEASUREMENT_ID: string | undefined;
    VITE_MESSAGING_FIREBASE_SENDER_ID: string | undefined;
    VITE_FIREBASE_PROJECT_ID: string | undefined;
    VITE_FIREBASE_STORAGE_BUCKET: string | undefined;
}
