export const mockPatients = [
  {
    id: "P123456",
    name: "Rajesh Kumar",
    photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
    lastVisit: "2024-03-15",
    age: 45,
    bloodType: "B+",
    city: "Mumbai"
  },
  {
    id: "P123457",
    name: "Priya Sharma",
    photoUrl: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=400&h=400&fit=crop",
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