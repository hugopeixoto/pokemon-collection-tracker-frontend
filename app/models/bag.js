import Model, { attr, hasMany } from '@ember-data/model';

export default class BagModel extends Model {
  @attr('string') category;
  @attr('string') name;
  @attr cards;
  @hasMany('bag-card') bagCards;
}
