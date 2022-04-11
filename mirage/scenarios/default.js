export default function (server) {
  server.db.loadData({
    bags: [
      {
        id: 1,
        category: 'binder',
        name: 'Base to Rocket binder',
      },
      {
        id: 2,
        category: 'deck',
        name: 'Malamar deck',
      },
      {
        id: 3,
        category: 'etb',
        name: 'Brilliant stars ETB',
      },
    ],
    'bag-cards': [
      { bagId: 2, dbid: 'swsh6-69', modifiers: [] },
      { bagId: 2, dbid: 'swsh6-69', modifiers: [] },
      { bagId: 2, dbid: 'swsh6-69', modifiers: [] },
      { bagId: 2, dbid: 'swsh6-69', modifiers: [] },
      { bagId: 2, dbid: 'swsh6-70', modifiers: [] },
      { bagId: 2, dbid: 'swsh6-70', modifiers: [] },
      { bagId: 2, dbid: 'swsh6-70', modifiers: [] },
      { bagId: 2, dbid: 'swsh6-70', modifiers: [] },
      { bagId: 2, dbid: 'swsh6-159', modifiers: [] },
      { bagId: 2, dbid: 'swsh6-159', modifiers: [] },
      { bagId: 2, dbid: 'swsh6-159', modifiers: [] },
      { bagId: 2, dbid: 'swsh6-159', modifiers: [] },
    ],
  });
}
