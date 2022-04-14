import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const chunks = (a, size) =>
  Array.from(new Array(Math.ceil(a.length / size)), (_, i) =>
    a.slice(i * size, i * size + size)
  );

export default class BagBinderComponent extends Component {
  @service dataset;

  @tracked currentSet = 'base1';
  @tracked currentPageIndex = 0;

  get currentPageId() {
    return `${this.currentSet}-p${this.currentPageIndex}`;
  }

  pages = [];

  get setIds() {
    return this.args.cards.map((c) => this.dataset.card(c.dbid).set).uniq();
  }

  get sets() {
    return this.setIds.map((set) => ({
      name: set,
      pages: chunks(
        this.dataset.setCards(set).map((card) => ({
          model: this.args.cards.find((c) => c.dbid == card.id),
          info: card,
        })),
        9
      ).map((cards, index) => ({ id: `${set}-p${index}`, set, index, cards })),
    }));
  }

  @action
  clicky(wat) {
    const keyToCard = [-1, 6, 7, 8, 3, 4, 5, 0, 1, 2];

    const page = this.sets.find((s) => s.name == this.currentSet).pages[
      this.currentPageIndex
    ];

    const card = page.cards[keyToCard[wat.key]];

    if (card) {
      if (card.model) {
        this.args.onRemove(card);
      } else {
        this.args.onAdd(card.info.id);
      }
    }
  }

  @action
  advancePage() {
    this.currentPageIndex++;
    this.focusOnCurrentPage();
  }

  @action
  retreatPage() {
    this.currentPageIndex--;
    this.focusOnCurrentPage();
  }

  @action
  selectPage(page) {
    this.currentPageIndex = page.index;
    this.currentSet = page.set;
  }

  focusOnCurrentPage() {
    document
      .getElementById(this.currentPageId)
      .scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
}
