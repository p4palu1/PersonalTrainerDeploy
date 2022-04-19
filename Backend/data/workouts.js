const workouts = [
    {

      isPrivate: false,
      date: '2021-09-19T12:00-0500',
      clients: [
          {
              name: 'Reem Stamker', 
              email: 'Reem@example.com',
              phoneNumber: '0501234567',
          },
          {
              name: 'Peer Stamker', 
              email: 'Peer@example.com',
              phoneNumber: '0511111111',
          },
      ],
      duration: 2,
      equipment: 'dumbells, bars',
      revenuePerClient: 50,
      totalRevenue: 150,
      createdAt: '2021-08-19T12:00-0500',
      updatedAt: null,
      isHappened: false, 
      description: 'HIIT Workout',
      maxClients: 3,
      currentClients: 2
    },
    {

      isPrivate: true,
      date: '2021-09-18T12:00-0500',
      clients: [],
      duration: '1',
      equipment: 'dumbells, bars',
      revenuePerClient: '80',
      totalRevenue: '80',
      createdAt: '2021-08-10T12:00-0500',
      updatedAt: null,
      isHappened: false, 
      description: 'Power Lifting',
      maxClients: 2,
      currentClients: 1
      
    },
    {
      isPrivate: false,
      clients: [],
      date: '2021-09-10T12:00-0500',
      duration: '2',
      equipment: 'dumbells, bars',
      revenuePerClient: '50',
      totalRevenue: '200',
      createdAt: '2021-08-19T12:00-0500',
      updatedAt: null,
      isHappened: false, 
      description: 'Yoga',
      maxClients: 4,
      currentClients: 1
    },
]

export default workouts
