export interface Student {
  id: string | number;
  firstName: string;
  lastName: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  department: string;
  level: number;
  GPA: number;
  enrollmentDate: string;
  isActive: boolean;
}
