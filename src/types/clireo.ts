/** Content shapes observed on clireo.framer.website. */

export interface Avatar {
  src: string;
  alt: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TreatmentCard {
  title: string;
  description: string;
  image: string;
}

export interface ValueCard {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Doctor {
  name: string;
  role: string;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface BlogPost {
  date: string;
  category: string;
  title: string;
  image: string;
}

export interface Faq {
  question: string;
  answer?: string;
}

export interface ApproachStep {
  label: string;
  title: string;
  description: string;
  image: string;
}
