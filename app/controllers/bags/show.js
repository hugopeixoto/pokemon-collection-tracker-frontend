import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class BagsShowController extends Controller {
  @service dataset;

  addCard(cardId) {
    console.log(`adding card ${cardId}`);
  }

  get cardsWithInfo() {
    return this.model.bagCards.then((bc) =>
      bc.map((card) => ({
        ...card,
        info: this.dataset.card(card.id),
      }))
    );
  }
}
