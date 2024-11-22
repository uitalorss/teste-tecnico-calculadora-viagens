declare namespace NodeJS {
    export interface ProcessEnv {
        PORT: string;
        GOOGLE_API_KEY: string;
        DB_HOST: string;
        DB_PORT: string;
        DB_USER: string;
        DB_NAME: string;
        DB_PASS: string;
    }
}