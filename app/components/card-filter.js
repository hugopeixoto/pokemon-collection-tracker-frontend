import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class CardFilterComponent extends Component {
  @service dataset;

  @tracked results = [];

  @action
  async update(e) {
    const text = e.target.value.toLowerCase();
    if (text.length >= 3) {
      const cards = await this.dataset.cards();

      this.results = Object.values(cards).filter((card) =>
        card.name.toLowerCase().includes(text)
      );
    }
  }

  @action
  async select(cardId) {
    if (this.args.select) {
      this.args.select(cardId);
    } else {
      console.log(cardId);
    }
  }
}
