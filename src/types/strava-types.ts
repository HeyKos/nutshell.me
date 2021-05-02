export type Athlete = {
    badge_type_id: number;
    bio: string | null;
    city: string | null;
    country: string | null;
    created_at: Date;
    firstname: string;
    follower: null; // ISSUE: Missing from documentation (https://developers.strava.com/docs/reference/#api-models-DetailedAthlete)
    friend: null; // ISSUE: Missing from documentation (https://developers.strava.com/docs/reference/#api-models-DetailedAthlete)
    id: number;
    lastname: string;
    premium: boolean; // Deprecated: Use "summit"
    profile: string;
    profile_medium: string;
    resource_state: 1 | 2 | 3; // values: 1 -> "meta", 2 -> "summary", 3 -> "detail"
    sex: "M" | "F";
    state: string | null;
    summit: boolean;
    updated_at: Date;
    username: string;
    weight: number;
};

export type AuthTokenRequestData = {
    client_id: string;
    client_secret: string;
    code: string;
    grant_type: "authorization_code" | "refresh_token";
};

export type AuthTokenResponse = {
    access_token: string;
    athlete: Athlete | null;
    expires_at: number;
    expires_in: number;
    refresh_token: string;
    token_type: "Bearer";
};
