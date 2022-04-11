export default function () {
  this.get('/bags');
  this.get('/bags/:id');
  this.passthrough('/cards.json');
}
