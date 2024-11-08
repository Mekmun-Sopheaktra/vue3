import { useCookies } from 'vue3-cookies';

export default function auth({ next }) {
  const { cookies } = useCookies();

  if (cookies.get('accessToken') && cookies.get('tokenType')) {
    return next();
  } else {
    return next();
  }
}
