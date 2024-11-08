import { useCookies } from 'vue3-cookies';

export default function requiredAuth({ next }) {
  const { cookies } = useCookies();

  if (cookies.get('accessToken') && cookies.get('tokenType')) {
    return next();
  } else {
    return next();
  }
}
