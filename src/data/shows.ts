export type Show = {
  slug: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  state: string;
  ticketUrl?: string;
  flyerImage?: string;
  ageRestriction?: string;
  doorFee?: string;
  lineup?: string;
  mapUrl?: string;
};

export const showsSectionContent = {
  title: "Where We Make Our Stand",
  summary:
    "When the lights drop and the city sinks deeper into shadow, the stage becomes the battleground. This is where our heroes push back — with volume, grit, and songs loud enough to stand against the dark.",
};

export const upcomingShows: Show[] = [
  {
    slug: "g-street-wunderbar-davis-july-18-2026",
    title: "G-Street Wunderbar",
    date: "Saturday, July 18, 2026",
    time: "7:00 PM - 10:00 PM",
    venue: "G-Street Wunderbar",
    city: "Davis",
    state: "CA",
    ageRestriction: "21+",
    doorFee: "No door fee",
    lineup: "They Went Ghost",
  },
];

export const nextShow = upcomingShows[0] ?? null;