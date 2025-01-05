export const mockDoctors = [
  {
    id: "D001",
    name: "Dr. Arun Gupta",
    specialization: "Endocrinologist",
    photoUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
    patients: ["P123456", "P123457"]
  },
  {
    id: "D002",
    name: "Dr. Meera Reddy",
    specialization: "General Physician",
    photoUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    patients: ["P123458"]
  },
  {
    id: "D003",
    name: "Dr. Sanjay Verma",
    specialization: "Cardiologist",
    photoUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    patients: ["P123459"]
  },
  {
    id: "D004",
    name: "Dr. Priya Nair",
    specialization: "Rheumatologist",
    photoUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    patients: ["P123460"]
  }
] as const;