export function getInfo() {
  return {
    message: "bye",
    version: process.env.APP_VERSION || "local",
    env: process.env.APP_ENV || "local",
  };
}
