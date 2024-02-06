interface Config {
  apiUrl: string;
  apiKey: string;
}

const appConfig: Config = {
  apiUrl: process.env.UNSPLASH_BASE_URL!,
  apiKey: process.env.UNSPLASH_API_KEY!,
};

export default appConfig;