declare namespace NodeJS {
    export interface ProcessEnv {
        PORT: string;
        DB_HOST: string;
        DB_PORT: string;
        DB_USER: string;
        DB_NAME: string;
        DB_PASS: string;
    }
}