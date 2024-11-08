/**
 *
 * @returns {Boolean}
 */
export const isDev = () => {
  return import.meta.env.DEV;
};

/**
 *
 * @returns {Boolean}
 */
export const isProd = () => {
  return import.meta.env.PROD;
};
