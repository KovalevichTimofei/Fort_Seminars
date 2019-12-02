import Base from './Base';

export default class LessonsApi extends Base {
  getLessonsByMonth(monthNumber) {
    return this.apiClient.get(`lessons/month/${monthNumber}`);
  }
}
