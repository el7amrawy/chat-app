const config =
  import.meta.env.VITE_ENV === "dev"
    ? {
        base: import.meta.env.VITE_BASE,
        apiHost: import.meta.env.VITE_API,
      }
    : {
        base: import.meta.env.VITE_BASE_PROD,
        apiHost: import.meta.env.VITE_API_PROD,
      };

export default config;
