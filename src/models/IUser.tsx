export interface IUser {
    result?: Result;
    status?: boolean;
    jwt?:    string;
}

export interface Result {
    id?:               number;
    firstName?:        string;
    lastName?:         string;
    phone?:            string;
    email?:            string;
    password?:         string;
    enabled?:          boolean;
    tokenExpired?:     boolean;
    verificationCode?: null;
    roles?:            Role[];
}

export interface Role {
    id?:   number;
    name?: string;
}
