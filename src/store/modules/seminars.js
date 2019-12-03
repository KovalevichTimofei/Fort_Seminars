import api from '../../apiSingleton';

const state = {
  loading: false,
  loadingFailed: false,
  seminars: [],
  seminar: {},
};

export const FETCH_SEMINAR_START = 'fetchSeminarStart';
export const FETCH_SEMINAR_SUCCESS = 'fetchSeminarSuccess';
export const FETCH_SEMINAR_FAIL = 'fetchSeminarFail';

const actions = {
  fetchCurrentSeminar ({ commit }) {
    commit(FETCH_SEMINAR_START);
    return api.seminars.getCurrentSeminar()
      .then(data => commit(FETCH_SEMINAR_SUCCESS, data ))
      .catch(() => commit( FETCH_SEMINAR_FAIL ));
  },
};

const mutations = {
  fetchSeminarStart (state) {
    state.loading = true;
    state.loadingFailed = false;
  },
  fetchSeminarSuccess (state, data) {
    state.seminar = data;
    state.loading = false;
  },
  fetchSeminarFail (state) {
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
