import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  @service dataset;

  model() {
    return this.store.findAll('bag', { include: 'bag-cards' });
  }
}
