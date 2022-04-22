import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;
  @service dataset;

  model() {
    return this.dataset.load();
  }
}
