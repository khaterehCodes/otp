import type React from "react";

interface SelectCodeType {
  id: number;
  flag: string;
  code: string;
}

export const countriesCode: SelectCodeType[] = [
  { id: 1, flag: "/assets/USA.png", code: "+1" },
  { id: 2, flag: "/assets/Iran.webp", code: "+98" },
];

interface SelectLngType {
  id: number;
  lng: string;
  flag: string;
}

export const selectLng: SelectLngType[] = [
  { id: 1, lng: "English", flag: "/assets/USA.png" },
  { id: 2, lng: "Persian", flag: "/assets/Iran.webp" },
];

