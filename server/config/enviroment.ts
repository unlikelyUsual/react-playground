interface config {
  MONGO: {
    USER: string;
    PASSWORD: string;
  };
  JWT: {
    KEY: string;
  };
}

const getEnv = (key: string) => {
  return process.env[key]! || "";
};

export const config: config = {
  MONGO: {
    USER: getEnv("M_USER"),
    PASSWORD: getEnv("M_PASSWORD"),
  },
  JWT: {
    KEY: getEnv("J_KEY"),
  },
};
