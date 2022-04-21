import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class BagsShowRoute extends Route {
  @service dataset;
  @service store;

  async model(params) {
    await this.dataset.load();

    const cards = await this.store.findAll('bag-card');
    const setCards = cards.filter(
      (c) => this.dataset.card(c.dbid).set == params.id
    );

    return {
      set: this.dataset.setInfo(params.id),
      cards: setCards,
    };
  }
}
