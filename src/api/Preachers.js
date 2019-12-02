import Base from './Base';

export default class PreachersApi extends Base {
  getPreacher(id) {
    return this.apiClient.get(`preachers/${id}`);
  }
}
