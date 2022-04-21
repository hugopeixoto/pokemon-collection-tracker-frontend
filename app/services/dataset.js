import Service, { service } from '@ember/service';

export default class DatasetService extends Service {
  @service store;

  cachedCards = {};

  async load() {
    this.cachedCards = await (await fetch('/cards.json')).json();
    this.cachedSets = await (await fetch('/sets.json')).json();
  }

  cards() {
    return this.cachedCards;
  }

  setCards(setId) {
    return Object.values(this.cachedCards)
      .filter((c) => c.set == setId)
      .map((c) => ({ ...c, number: parseInt(c.number) }))
      .sortBy('number');
  }

  card(id) {
    return this.cachedCards[id];
  }

  sets() {
    return this.cachedSets;
  }

  setInfo(id) {
    return this.cachedSets[id];
  }
}
