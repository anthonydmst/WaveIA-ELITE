// Icons are used by name string in this data file
import { ContactInfoItem } from "./types";

export const CONTACT_INFO: ContactInfoItem[] = [
  {
    iconName: "Mail",
    label: "Email",
    value: "contact@waveia.fr",
    href: "mailto:contact@waveia.fr",
  },
  {
    iconName: "Phone",
    label: "Téléphone",
    value: "06 95 91 36 69",
    href: "tel:+33695913669",
  },
  {
    iconName: "MapPin",
    label: "Localisation",
    value: "Biarritz • Bayonne • Anglet",
    href: null,
  },
  {
    iconName: "Clock",
    label: "Horaires",
    value: "Lun-Ven : 9h-18h",
    href: null,
  },
];

export const PROJECT_TYPES = [
  "Site vitrine",
  "E-commerce",
  "Application web",
  "Refonte de site",
  "SEO / Référencement",
  "Identité visuelle",
  "Autre",
];

export const BUDGET_RANGES = [
  "< 1 500€",
  "1 500€ - 3 000€",
  "3 000€ - 5 000€",
  "5 000€ - 10 000€",
  "> 10 000€",
];
