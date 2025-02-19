const tickets: Ticket[] = [
    {
      id: '1',
      name: 'Regular Ticket',
      price: 500,
      available: 100,
      sold: 50
    },
    {
      id: '2',
      name: 'VIP Ticket',
      price: 1000,
      available: 50,
      sold: 25
    },
    {
      id: '3',
      name: 'VVIP Ticket',
      price: 2000,
      available: 25,
      sold: 10
    }
  ];

  const vouchers: Voucher[] = [
    {
      id: '1',
      code: 'STUDENT',
      discount: 20,
      maxUses: 100,
      used: 45
    },
    {
      id: '2',
      code: 'EARLYBIRD',
      discount: 15,
      maxUses: 50,
      used: 30
    }
  ];
