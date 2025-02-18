export interface Guest {
    id: string;
    name: string;
    email: string;
    registrationDate: string;
    status: 'registered' | 'pending';
    avatar: string;
  }
  
  export const guests: Guest[] = [
    {
      id: '1',
      name: 'Julia Echlin',
      email: 'julia@email.com',
      registrationDate: '09 Jan 2024, 8:04 AM',
      status: 'registered',
      avatar: 'https://ui-avatars.com/api/?name=Julia+Echlin&background=ef4444&color=fff'
    },
    {
      id: '2',
      name: 'Aaron Dave Taglinao',
      email: 'aaron@email.com',
      registrationDate: '10 Jan 2024, 10:15 AM',
      status: 'registered',
      avatar: 'https://ui-avatars.com/api/?name=Aaron+Dave&background=eab308&color=fff'
    },
    {
      id: '3',
      name: 'Ericke Gallardo',
      email: 'erick@email.com',
      registrationDate: '12 Jan 2024, 11:00 PM',
      status: 'pending',
      avatar: 'https://ui-avatars.com/api/?name=Ericka+Gallardo&background=ef4444&color=fff'
    },
    {
      id: '4',
      name: 'Kenneth Sayan',
      email: 'kennethsayan@email.com',
      registrationDate: '12 Jan 2024, 11:00 PM',
      status: 'registered',
      avatar: 'https://ui-avatars.com/api/?name=Kenneth+Sayan&background=ef4444&color=fff'
    }
  ];