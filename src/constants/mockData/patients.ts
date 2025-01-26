export const mockPatients = [  
  {
    id: "P123456",
    name: "Shridevi Ramalullu",
    photoUrl: "https://images.unsplash.com/photo-1522643527310-7222a3f57bb1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastVisit: "2024-03-15",
    age: 45,
    bloodType: "B+",
    city: "Mumbai"
  },  
  {
    id: "P123457",
    name: "Priya Sharma",
    photoUrl: "https://images.unsplash.com/photo-1547212371-eb5e6a4b590c?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastVisit: "2024-03-14",
    age: 32,
    bloodType: "O+",
    city: "Delhi"
  },
  {
    id: "P123458",
    name: "Amit Patel",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop",
    lastVisit: "2024-03-13",
    age: 28,
    bloodType: "A+",
    city: "Bangalore"
  },
  {
    id: "P123459",
    name: "Meera Deshmukh",
    photoUrl: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
    lastVisit: "2024-03-12",
    age: 52,
    bloodType: "AB+",
    city: "Chennai"
  },
  {
    id: "P123460",
    name: "Arjun Iyer",
    photoUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=400&fit=crop",
    lastVisit: "2024-03-11",
    age: 63,
    bloodType: "O-",
    city: "Hyderabad"
  },
  {
    id: "P123461",
    name: "Vidya Panvelkar",
    photoUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    lastVisit: "2024-03-16",
    age: 35,
    bloodType: "AB+",
    city: "Pune"
  }
] as const;

export type MockPatient = typeof mockPatients[number];