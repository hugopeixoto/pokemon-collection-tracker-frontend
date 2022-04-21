import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class WantedIndexController extends Controller {
  @service dataset;
  @service store;

  get sets() {
    return Object.values(this.dataset.sets()).sortBy('releaseDate').reverse();
  }
}
