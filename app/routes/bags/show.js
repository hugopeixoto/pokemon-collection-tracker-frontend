import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class BagsShowRoute extends Route {
  @service store;
  @service dataset;

  model(params) {
    return this.dataset
      .cards()
      .then(() => this.store.findRecord('bag', params.id, { include: 'bag-cards' }));
  }
}
