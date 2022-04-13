import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @service store;

  @action
  createBag(e) {
    e.preventDefault();

    this.store
      .createRecord('bag', {
        name: e.target.elements['name'].value,
        category: e.target.elements['category'].value,
      })
      .save();
  }
}
