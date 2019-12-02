import Vue from 'vue';
import Vuex from 'vuex';

import seminars from './modules/seminars';
import preachers from './modules/preachers';
import lessons from './modules/lessons';
import users from './modules/users';

import createLogger from '../plugins/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    seminars,
    preachers,
    lessons,
    users,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
