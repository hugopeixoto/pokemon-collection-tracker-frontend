import Service, { service } from '@ember/service';

export default class DatasetService extends Service {
  @service store;

  async cards() {
    if (!this.cachedCards) {
      const response = await fetch('/cards.json');
      const json = await response.json();
      this.cachedCards = json;
    }

    return this.cachedCards;
  }

  card(id) {
    if (!this.cachedCards) {
      this.cards();
      return null;
    } else {
      return this.cachedCards[id];
    }
  }
}
