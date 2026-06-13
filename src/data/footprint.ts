export type FootprintCountry = {
  id: string;
  name: string;
  short: string;
  code: string;
  /** Compact label rendered on the globe */
  globeLabel: string;
  label?: string;
  /** Real coordinates — used for arcs */
  location: [number, number];
  /** Offset coordinates for globe markers to reduce overlap */
  globeLocation: [number, number];
  markerSize: number;
  /** Simulates extra marker elevation (COBE elevation is global; we nudge lat/lon) */
  elevationOffset: number;
};

/** Nudge marker position to mimic per-marker elevation on the globe surface */
function elevateLocation([lat, lon]: [number, number], offset: number): [number, number] {
  if (offset === 0) return [lat, lon];
  return [lat + offset * 10, lon - offset * 4];
}

export const footprintCountries: FootprintCountry[] = [
  {
    id: "uae",
    name: "United Arab Emirates",
    short: "UAE",
    code: "AE",
    globeLabel: "UAE",
    label: "Headquarters",
    location: [25.2048, 55.2708],
    globeLocation: [27.0, 60.5],
    markerSize: 0.038,
    elevationOffset: 0.02,
  },
  {
    id: "saudi",
    name: "Saudi Arabia",
    short: "Saudi Arabia",
    code: "SA",
    globeLabel: "SA",
    location: [24.7136, 46.6753],
    globeLocation: [29.0, 40.0],
    markerSize: 0.032,
    elevationOffset: 0,
  },
  {
    id: "bahrain",
    name: "Bahrain",
    short: "Bahrain",
    code: "BH",
    globeLabel: "BH",
    location: [26.0667, 50.5577],
    globeLocation: [31.0, 47.5],
    markerSize: 0.028,
    elevationOffset: 0,
  },
  {
    id: "qatar",
    name: "Qatar",
    short: "Qatar",
    code: "QA",
    globeLabel: "QA",
    location: [25.2854, 51.531],
    globeLocation: [16.5, 49.0],
    markerSize: 0.024,
    elevationOffset: 0.1,
  },
  {
    id: "india",
    name: "India",
    short: "India",
    code: "IN",
    globeLabel: "India",
    location: [28.6139, 77.209],
    globeLocation: [17.5, 82.0],
    markerSize: 0.034,
    elevationOffset: 0,
  },
];

export const HQ_LOCATION = footprintCountries[0].location;

export const BRAND_RED: [number, number, number] = [242 / 255, 13 / 255, 20 / 255];

export const globeMarkers = footprintCountries.map((country) => ({
  location: elevateLocation(country.globeLocation, country.elevationOffset),
  size: country.markerSize,
  id: country.id,
  ...(country.label ? { color: BRAND_RED } : {}),
}));

export const globeArcs = footprintCountries.slice(1).map((country) => ({
  from: HQ_LOCATION,
  to: country.location,
  id: `arc-${country.id}`,
}));
