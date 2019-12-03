import api from '../../apiSingleton';

const state = {
  loading: false,
  loadingFailed: false,
  preacher: {},
};

export const FETCH_PREACHER_START = 'fetchPreacherStart';
export const FETCH_PREACHER_SUCCESS = 'fetchPreacherSuccess';
export const FETCH_PREACHER_FAIL = 'fetchPreacherFail';

const actions = {
  fetchCurrentPreacher ({ commit }, id) {
    commit(FETCH_PREACHER_START);
    return api.preachers.getPreacher(id)
      .then(data => commit(FETCH_PREACHER_SUCCESS, data ))
      .catch(() => commit( FETCH_PREACHER_FAIL ));
  },
};

const mutations = {
  fetchPreacherStart (state) {
    state.loading = true;
    state.loadingFailed = false;
  },
  fetchPreacherSuccess (state, data) {
    state.preacher = data;
    state.loading = false;
  },
  fetchPreacherFail (state) {
    state.loading = false;
    state.loadingFailed = true;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
