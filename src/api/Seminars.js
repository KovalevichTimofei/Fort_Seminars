import Base from './Base';

export default class SeminarsApi extends Base {
  getCurrentSeminar() {
    return this.apiClient.get('seminars/current');
  }
}
