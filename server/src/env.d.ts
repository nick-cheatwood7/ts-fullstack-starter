declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      REDIS_PASSWORD: string;
    }
  }
}

export {};
