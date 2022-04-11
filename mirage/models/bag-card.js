import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  bag: belongsTo('bag'),
});
