import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BagETBComponent extends Component {
  @service dataset;

  @tracked currentSet = 'base1';
  @tracked currentCard = 1;

  get currentCardId() {
    return `${this.currentSet}-${this.currentCard}`;
  }

  get setIds() {
    return this.args.cards
      .map((c) => this.dataset.card(c.dbid).set)
      .uniq()
      .map((s) => this.dataset.setInfo(s))
      .sortBy('releaseDate');
  }

  get cards() {
    return this.setIds
      .flatMap((set) => this.dataset.setCards(set.id))
      .map((card) => ({
        info: card,
        count: this.args.cards.filter((c) => c.dbid == card.id).length,
      }))
      .filter((card) => card.count > 0);
  }

  get selectedCard() {
    return this.dataset.card(this.currentCardId);
  }

  get sets() {
    return this.setIds.map((set) => ({
      name: set.id,
    }));
  }

  @action
  clickCard(ev) {
    if (ev.shiftKey) {
      this.removeCard(ev);
    } else {
      this.addCard(ev);
    }
  }

  @action
  addCard(ev) {
    ev.preventDefault();
    this.args.onAdd(this.currentCardId);
  }

  @action
  removeCard(ev) {
    ev.preventDefault();
    const card = this.args.cards.find(
      (card) => card.dbid == this.currentCardId
    );

    this.args.onRemove({ model: card });
  }

  @action
  advanceCard() {
    this.currentCard++;
  }

  @action
  retreatCard() {
    this.currentCard--;
  }

  @action
  selectCard(card) {
    this.currentCard = card.info.number;
    this.currentSet = card.info.set;
  }
}
