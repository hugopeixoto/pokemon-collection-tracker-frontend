import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service auth;

  host = 'http://localhost:4567';

  get headers() {
    if (this.auth.password) {
      return { Authorization: this.auth.password };
    } else {
      return {};
    }
  }
}
