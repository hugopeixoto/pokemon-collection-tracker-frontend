import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class BagsShowController extends Controller {
  @service dataset;
  @service store;

  @action
  addCard(cardId) {
    this.store
      .createRecord('bag-card', {
        bag: this.model,
        dbid: cardId,
        modifiers: [],
      })
      .save();
  }

  @action
  remove(card) {
    card.model.destroyRecord();
  }

  get cardsWithInfo() {
    return this.model.bagCards
      .map((card) => ({
        model: card,
        info: this.dataset.card(card.dbid),
      }))
      .sortBy('info.supertype', 'info.set', 'info.number');
  }
}
