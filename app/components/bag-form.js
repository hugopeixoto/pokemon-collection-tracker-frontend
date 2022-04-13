import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class BagFormComponent extends Component {
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
