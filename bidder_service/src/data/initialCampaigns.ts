const campaigns = [
  {
    id: '1',
    name: 'Campaign 1',
    targeting: {
      geo: {
        country: 'US',
        region: 'CA',
      },
      bcat: ['IAB2-1'],
    },
  },
  {
    id: '2',
    name: 'Campaign 2',
    targeting: {
      geo: {
        country: 'US',
        region: 'NY',
      },
      bcat: ['IAB3-1', 'IAB4-2'],
    },
  },
  // Add more campaigns here
];

export default campaigns;