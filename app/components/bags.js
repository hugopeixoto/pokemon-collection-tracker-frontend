import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class BagsComponent extends Component {
  @service store;

  get bags() {
    return this.store.findAll('bag');
  }
}
