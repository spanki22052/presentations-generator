export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor?: string;
}

export interface ZigZagFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  bulletPoints: string[];
  linkText?: string;
  linkUrl?: string;
  imageUrl?: string;
  position: 'left' | 'right';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
}
