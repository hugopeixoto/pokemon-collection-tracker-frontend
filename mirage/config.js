import { discoverEmberDataModels } from 'ember-cli-mirage';
import { createServer } from 'miragejs';

export default function (config) {
  return createServer({
    ...config,
    timing: 0,
    models: {
      ...discoverEmberDataModels(),
      ...config.models,
    },
    routes() {
      //this.get('/bags');
      //this.get('/bags/:id');
      //this.get('/bag-cards');
      //this.post('/bag-cards');
      this.passthrough('http://localhost:4567/**');

      this.passthrough('/cards.json');
      this.passthrough('/sets.json');
    },
  });
}
