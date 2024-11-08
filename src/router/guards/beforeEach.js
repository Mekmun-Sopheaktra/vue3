import middlewares from '@middlewares';

export default (to, from, next) => {
  let middleware = to.meta.middlewares;

  if (middleware == null) {
    middleware = () => next();
  } else if (middleware.length === 0) {
    middleware = [() => next()];
  }

  middleware = Array.isArray(middleware) ? middleware : [middleware];
  const context = { from, next, to };
  const nextMiddleware = nextFactory(context, middleware, 1);

  return middleware[0]({ ...context, next: nextMiddleware });
};

//setting middleware
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}
