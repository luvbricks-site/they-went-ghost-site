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
  lineup?: string;
  mapUrl?: string;
};

export const upcomingShows: Show[] = [];

export const nextShow = upcomingShows[0] ?? null;