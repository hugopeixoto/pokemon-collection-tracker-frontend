import { Model, hasMany } from 'miragejs';

export default Model.extend({
  bagCards: hasMany('bag-card'),
});
