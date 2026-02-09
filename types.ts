export interface LabelRequest {
  occasion: string;
  recipientName: string;
  wineType: string;
  tone: 'formal' | 'poetic' | 'celebratory';
}

export interface GeneratedLabel {
  title: string;
  description: string;
  pairingSuggestion: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  SERVICES = 'services',
  GENERATOR = 'generator',
  CONTACT = 'contact'
}