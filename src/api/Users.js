import Base from './Base';

export default class UsersApi extends Base {
  registerUser(listener) {
    return this.apiClient.post('listeners/register', listener);
  }
}
