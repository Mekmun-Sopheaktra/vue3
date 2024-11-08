import { createPinia } from 'pinia';

const store = createPinia();

export default store;

import * as user from './user.js';

export const { useUserStore } = user;
