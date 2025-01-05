export const BENEFITS = [
  "Smart documentation assistance",
  "Seamless care coordination",
  "Efficient record management",
  "Enhanced patient engagement",
  "Secure data protection",
  "Improved care delivery"
] as const;

export const TESTIMONIALS = [
  {
    name: "Dr. Sarah Johnson",
    role: "Cardiologist",
    content: "MediNotes has transformed how I interact with patients. The streamlined documentation means I can focus entirely on patient care during consultations."
  },
  {
    name: "Michael Chen",
    role: "Hospital Administrator",
    content: "The efficiency gains have been remarkable. Our staff can spend more time with patients while maintaining comprehensive and accurate records."
  }
] as const;

export const CONTACT_INFO = [
  { type: "phone", text: "+1 (555) 123-4567" },
  { type: "email", text: "contact@medinotes.com" },
  { type: "address", text: "123 Healthcare Ave, Medical District" }
] as const;