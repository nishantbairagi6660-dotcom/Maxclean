export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyType: 'Apartment' | 'House' | 'Villa' | 'Office' | 'Other';
  service: string;
  preferredDate: string;
  frequency: 'One-Time' | 'Weekly' | 'Fortnightly' | 'Monthly' | 'Not Sure';
  location: string;
  additionalDetails: string;
  consent: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'residential' | 'specialist' | 'rental';
  note?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Kitchens' | 'Bathrooms' | 'Living Spaces' | 'Villas & Patios';
  image: string;
  description: string;
}
