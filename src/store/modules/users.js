import api from '../../apiSingleton';

const stateObj = {
  loading: false,
  loadingFailed: false,
  success: false,
};

export const REGISTER_USER_START = 'registerUserStart';
export const REGISTER_USER_SUCCESS = 'registerUserSuccess';
export const REGISTER_USER_FAIL = 'registerUserFail';

const actions = {
  registerUser({ commit }, userInfo) {
    commit(REGISTER_USER_START);
    return api.users.registerUser(userInfo)
      .then((data) => {
        commit(REGISTER_USER_SUCCESS, data);
        return data;
      })
      .catch(() => commit(REGISTER_USER_FAIL));
  },
};

const mutations = {
  registerUserStart(state) {
    state.loading = true;
    state.success = false;
    state.loadingFailed = false;
  },
  registerUserSuccess(state, data) {
    state.success = data.result;
    state.loading = false;
  },
  registerUserFail(state) {
    state.loading = false;
    state.loadingFailed = true;
  },
};

export default {
  namespaced: true,
  state: stateObj,
  actions,
  mutations,
};
