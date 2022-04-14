import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @service dataset;

  @tracked loading = true;

  constructor() {
    super(...arguments);

    this.dataset.load().then(() => {
      this.loading = false;
    });
  }
}
