import Model, { attr, belongsTo } from '@ember-data/model';

export default class BagCardModel extends Model {
  @attr('string') dbid;
  @attr modifiers;
  @belongsTo('bag') bag;
}
