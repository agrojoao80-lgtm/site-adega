import React from 'react';
import { Crown, Wine, ScrollText, Users, Briefcase, Heart, ChevronDown, Award, Star, Mail, Phone, MapPin } from 'lucide-react';

// Create a context or just re-export if we wanted a provider pattern, 
// but for now, we just ensure icons are importable. 
// This file mainly serves as a placeholder for icon logic if needed in future.
// In this setup, we just return children.

export const LucideProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

// Export icons for use across the app
export { Crown, Wine, ScrollText, Users, Briefcase, Heart, ChevronDown, Award, Star, Mail, Phone, MapPin };