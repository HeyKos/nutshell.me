const stravaConfig = {
    clientId: import.meta.env.VITE_STRAVA_CLIENT_ID,
    accessToken: import.meta.env.VITE_STRAVA_ACCESS_TOKEN,
    clientSecret: import.meta.env.VITE_STRAVA_CLIENT_SECRET,
    redirectUri: import.meta.env.VITE_STRAVA_REDIRECT_URI,
};

export default stravaConfig;
