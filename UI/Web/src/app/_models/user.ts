import { AgeRestriction } from './age-restriction';
import { Preferences } from './preferences/preferences';

// This interface is only used for login and storing/retreiving JWT from local storage
export interface User {
    username: string;
    token: string;
    refreshToken: string;
    roles: string[];
    preferences: Preferences;
    apiKey: string;
    email: string;
    ageRestriction: AgeRestriction;
}