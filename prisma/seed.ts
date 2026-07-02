import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SINGLE_PRICE_CENTS = 125;
const EP_PRICE_CENTS = 400;

const releaseSlug = "they-went-ghost-self-titled-ep";

const tracks = [
  {
    trackNumber: 1,
    title: "Better Off...",
    slug: "better-off",
  },
  {
    trackNumber: 2,
    title: "A Breath Away From Drowning...",
    slug: "a-breath-away-from-drowning",
  },
  {
    trackNumber: 3,
    title: "Lush",
    slug: "lush",
  },
  {
    trackNumber: 4,
    title: "Smitten...",
    slug: "smitten",
  },
];

const accounts = [
  {
    code: "1000",
    name: "Cash / Personal Bank Account",
    accountType: "ASSET",
    normalBalance: "DEBIT",
  },
  {
    code: "1010",
    name: "Stripe Clearing",
    accountType: "ASSET",
    normalBalance: "DEBIT",
  },
  {
    code: "1020",
    name: "PayPal Clearing",
    accountType: "ASSET",
    normalBalance: "DEBIT",
  },
  {
    code: "2000",
    name: "Sales Tax Payable",
    accountType: "LIABILITY",
    normalBalance: "CREDIT",
  },
  {
    code: "3000",
    name: "Band Reinvestment Equity",
    accountType: "EQUITY",
    normalBalance: "CREDIT",
  },
  {
    code: "4000",
    name: "Music Download Revenue",
    accountType: "REVENUE",
    normalBalance: "CREDIT",
  },
  {
    code: "4100",
    name: "Merch Revenue",
    accountType: "REVENUE",
    normalBalance: "CREDIT",
  },
  {
    code: "4200",
    name: "Shipping Income",
    accountType: "REVENUE",
    normalBalance: "CREDIT",
  },
  {
    code: "4900",
    name: "Promotional Discounts",
    accountType: "REVENUE",
    normalBalance: "DEBIT",
  },
  {
    code: "5000",
    name: "Payment Processing Fees",
    accountType: "EXPENSE",
    normalBalance: "DEBIT",
  },
  {
    code: "5100",
    name: "Merch Production Costs",
    accountType: "EXPENSE",
    normalBalance: "DEBIT",
  },
  {
    code: "5200",
    name: "Refunds and Chargebacks",
    accountType: "EXPENSE",
    normalBalance: "DEBIT",
  },
];

async function seedAccountingAccounts() {
  for (const account of accounts) {
    await prisma.accountingAccount.upsert({
      where: { code: account.code },
      update: {
        name: account.name,
        accountType: account.accountType,
        normalBalance: account.normalBalance,
        isActive: true,
      },
      create: account,
    });
  }
}

async function seedDigitalMusic() {
  const release = await prisma.digitalRelease.upsert({
    where: { slug: releaseSlug },
    update: {
      title: "They Went Ghost",
      releaseType: "EP",
      releaseDate: new Date("2026-01-20T00:00:00.000Z"),
      description:
        "The self-titled They Went Ghost EP, available as MP3 or FLAC downloads.",
      coverImagePath: "/releases/they-went-ghost-ep-cover.png",
      isActive: true,
    },
    create: {
      title: "They Went Ghost",
      slug: releaseSlug,
      releaseType: "EP",
      releaseDate: new Date("2026-01-20T00:00:00.000Z"),
      description:
        "The self-titled They Went Ghost EP, available as MP3 or FLAC downloads.",
      coverImagePath: "/releases/they-went-ghost-ep-cover.png",
      isActive: true,
    },
  });

  await prisma.digitalProduct.upsert({
    where: { slug: "they-went-ghost-ep-download" },
    update: {
      title: "They Went Ghost EP",
      description: "Full EP download. Choose MP3 or FLAC at checkout.",
      productType: "FULL_RELEASE",
      releaseId: release.id,
      trackId: null,
      priceCents: EP_PRICE_CENTS,
      currency: "USD",
      allowMp3: true,
      allowFlac: true,
      isActive: true,
    },
    create: {
      title: "They Went Ghost EP",
      slug: "they-went-ghost-ep-download",
      description: "Full EP download. Choose MP3 or FLAC at checkout.",
      productType: "FULL_RELEASE",
      releaseId: release.id,
      priceCents: EP_PRICE_CENTS,
      currency: "USD",
      allowMp3: true,
      allowFlac: true,
      isActive: true,
    },
  });

  for (const track of tracks) {
    const savedTrack = await prisma.digitalTrack.upsert({
      where: { slug: track.slug },
      update: {
        releaseId: release.id,
        trackNumber: track.trackNumber,
        title: track.title,
        isActive: true,
      },
      create: {
        releaseId: release.id,
        trackNumber: track.trackNumber,
        title: track.title,
        slug: track.slug,
        isActive: true,
      },
    });

    await prisma.digitalProduct.upsert({
      where: { slug: `${track.slug}-single-download` },
      update: {
        title: `${track.title} Single`,
        description: "Single-song download. Choose MP3 or FLAC at checkout.",
        productType: "SINGLE_TRACK",
        releaseId: release.id,
        trackId: savedTrack.id,
        priceCents: SINGLE_PRICE_CENTS,
        currency: "USD",
        allowMp3: true,
        allowFlac: true,
        isActive: true,
      },
      create: {
        title: `${track.title} Single`,
        slug: `${track.slug}-single-download`,
        description: "Single-song download. Choose MP3 or FLAC at checkout.",
        productType: "SINGLE_TRACK",
        releaseId: release.id,
        trackId: savedTrack.id,
        priceCents: SINGLE_PRICE_CENTS,
        currency: "USD",
        allowMp3: true,
        allowFlac: true,
        isActive: true,
      },
    });
  }
}

async function main() {
  console.log("Seeding They Went Ghost backend data...");

  await seedAccountingAccounts();
  await seedDigitalMusic();

  console.log("Seed complete.");
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });