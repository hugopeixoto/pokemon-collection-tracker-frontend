import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class WantedShowController extends Controller {
  @service dataset;
  @service store;

  get missingCards() {
    const collected = new Set(this.model.cards.map((c) => c.dbid));

    return this.dataset.setCards(this.model.set.id).filter((c) => !collected.has(c.id));
  }
}
