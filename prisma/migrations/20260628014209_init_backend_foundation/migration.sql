-- CreateTable
CREATE TABLE "DigitalRelease" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "releaseType" TEXT NOT NULL DEFAULT 'EP',
    "releaseDate" DATETIME,
    "description" TEXT,
    "coverImagePath" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "DigitalTrack" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "releaseId" TEXT,
    "trackNumber" INTEGER,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "durationSeconds" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "DigitalTrack_releaseId_fkey" FOREIGN KEY ("releaseId") REFERENCES "DigitalRelease" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DigitalProduct" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productType" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "releaseId" TEXT,
    "trackId" TEXT,
    "priceCents" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "allowMp3" BOOLEAN NOT NULL DEFAULT true,
    "allowFlac" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "DigitalProduct_releaseId_fkey" FOREIGN KEY ("releaseId") REFERENCES "DigitalRelease" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "DigitalProduct_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "DigitalTrack" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DigitalFile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "storagePath" TEXT NOT NULL,
    "originalFileName" TEXT,
    "mimeType" TEXT,
    "byteSize" INTEGER,
    "checksum" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "DigitalFile_productId_fkey" FOREIGN KEY ("productId") REFERENCES "DigitalProduct" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MerchProduct" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "provider" TEXT,
    "providerProductId" TEXT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "mockupImagePath" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MerchVariant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "providerVariantId" TEXT,
    "sku" TEXT,
    "size" TEXT,
    "color" TEXT,
    "priceCents" INTEGER NOT NULL,
    "costCents" INTEGER NOT NULL DEFAULT 0,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MerchVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "MerchProduct" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MerchImage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "altText" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MerchImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "MerchProduct" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PromoCode" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "discountType" TEXT NOT NULL,
    "discountValue" INTEGER NOT NULL,
    "appliesTo" TEXT NOT NULL DEFAULT 'ALL',
    "maxUses" INTEGER,
    "useCount" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "startsAt" DATETIME,
    "endsAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderNumber" TEXT NOT NULL,
    "orderType" TEXT NOT NULL DEFAULT 'MIXED',
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "paymentStatus" TEXT NOT NULL DEFAULT 'UNPAID',
    "customerEmail" TEXT,
    "customerName" TEXT,
    "customerCountry" TEXT,
    "customerRegion" TEXT,
    "customerPostalCode" TEXT,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "subtotalCents" INTEGER NOT NULL DEFAULT 0,
    "discountCents" INTEGER NOT NULL DEFAULT 0,
    "shippingCents" INTEGER NOT NULL DEFAULT 0,
    "taxCents" INTEGER NOT NULL DEFAULT 0,
    "totalCents" INTEGER NOT NULL DEFAULT 0,
    "totalCostCents" INTEGER NOT NULL DEFAULT 0,
    "processorFeeCents" INTEGER NOT NULL DEFAULT 0,
    "netCents" INTEGER NOT NULL DEFAULT 0,
    "checkoutProvider" TEXT,
    "stripeCheckoutSessionId" TEXT,
    "stripePaymentIntentId" TEXT,
    "paypalOrderId" TEXT,
    "paypalCaptureId" TEXT,
    "paidAt" DATETIME,
    "refundedAt" DATETIME,
    "cancelledAt" DATETIME,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderId" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "digitalProductId" TEXT,
    "merchVariantId" TEXT,
    "titleSnapshot" TEXT NOT NULL,
    "skuSnapshot" TEXT,
    "formatSnapshot" TEXT,
    "sizeSnapshot" TEXT,
    "colorSnapshot" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "unitPriceCents" INTEGER NOT NULL,
    "unitCostCents" INTEGER NOT NULL DEFAULT 0,
    "discountCents" INTEGER NOT NULL DEFAULT 0,
    "taxCents" INTEGER NOT NULL DEFAULT 0,
    "lineTotalCents" INTEGER NOT NULL,
    "fulfillmentStatus" TEXT NOT NULL DEFAULT 'NOT_REQUIRED',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_digitalProductId_fkey" FOREIGN KEY ("digitalProductId") REFERENCES "DigitalProduct" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_merchVariantId_fkey" FOREIGN KEY ("merchVariantId") REFERENCES "MerchVariant" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderId" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerPaymentId" TEXT,
    "providerOrderId" TEXT,
    "status" TEXT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "grossCents" INTEGER NOT NULL DEFAULT 0,
    "feeCents" INTEGER NOT NULL DEFAULT 0,
    "netCents" INTEGER NOT NULL DEFAULT 0,
    "taxCents" INTEGER NOT NULL DEFAULT 0,
    "capturedAt" DATETIME,
    "refundedAt" DATETIME,
    "rawEventId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Payment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PaymentEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "provider" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "processed" BOOLEAN NOT NULL DEFAULT false,
    "rawBody" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "processedAt" DATETIME
);

-- CreateTable
CREATE TABLE "OrderDiscount" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderId" TEXT NOT NULL,
    "promoCodeId" TEXT,
    "codeSnapshot" TEXT,
    "discountType" TEXT NOT NULL,
    "discountValue" INTEGER NOT NULL,
    "amountCents" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "OrderDiscount_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "OrderDiscount_promoCodeId_fkey" FOREIGN KEY ("promoCodeId") REFERENCES "PromoCode" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TaxLine" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderId" TEXT NOT NULL,
    "taxProvider" TEXT,
    "country" TEXT,
    "region" TEXT,
    "rate" TEXT,
    "label" TEXT,
    "amountCents" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TaxLine_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DownloadGrant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderId" TEXT NOT NULL,
    "orderItemId" TEXT,
    "digitalFileId" TEXT,
    "tokenHash" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "downloadsUsed" INTEGER NOT NULL DEFAULT 0,
    "maxDownloads" INTEGER NOT NULL DEFAULT 1,
    "isRevoked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastDownloadedAt" DATETIME,
    CONSTRAINT "DownloadGrant_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "DownloadGrant_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "DownloadGrant_digitalFileId_fkey" FOREIGN KEY ("digitalFileId") REFERENCES "DigitalFile" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DownloadLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "grantId" TEXT NOT NULL,
    "userAgent" TEXT,
    "ipHash" TEXT,
    "downloadedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "DownloadLog_grantId_fkey" FOREIGN KEY ("grantId") REFERENCES "DownloadGrant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MerchFulfillmentOrder" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderId" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerOrderId" TEXT,
    "providerStatus" TEXT NOT NULL DEFAULT 'NOT_SUBMITTED',
    "productionCostCents" INTEGER NOT NULL DEFAULT 0,
    "shippingCostCents" INTEGER NOT NULL DEFAULT 0,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "submittedAt" DATETIME,
    "shippedAt" DATETIME,
    "deliveredAt" DATETIME,
    "trackingNumber" TEXT,
    "trackingUrl" TEXT,
    "rawPayload" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MerchFulfillmentOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AccountingAccount" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "accountType" TEXT NOT NULL,
    "normalBalance" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "JournalEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entryNumber" TEXT NOT NULL,
    "orderId" TEXT,
    "entryDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "sourceType" TEXT NOT NULL,
    "sourceId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'POSTED',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "JournalEntry_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "JournalLine" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "journalEntryId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "debitCents" INTEGER NOT NULL DEFAULT 0,
    "creditCents" INTEGER NOT NULL DEFAULT 0,
    "memo" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "JournalLine_journalEntryId_fkey" FOREIGN KEY ("journalEntryId") REFERENCES "JournalEntry" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "JournalLine_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "AccountingAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AnalyticsEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "eventName" TEXT NOT NULL,
    "sessionId" TEXT,
    "visitorIdHash" TEXT,
    "pagePath" TEXT,
    "referrer" TEXT,
    "utmSource" TEXT,
    "utmMedium" TEXT,
    "utmCampaign" TEXT,
    "relatedProductSlug" TEXT,
    "relatedProvider" TEXT,
    "orderId" TEXT,
    "metadata" TEXT,
    "userAgent" TEXT,
    "ipHash" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AnalyticsEvent_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EmailSignup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "source" TEXT,
    "subscribed" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unsubscribedAt" DATETIME
);

-- CreateTable
CREATE TABLE "ReceiptDocument" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderId" TEXT,
    "title" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "mimeType" TEXT,
    "amountCents" INTEGER,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ReceiptDocument_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "DigitalRelease_slug_key" ON "DigitalRelease"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "DigitalTrack_slug_key" ON "DigitalTrack"("slug");

-- CreateIndex
CREATE INDEX "DigitalTrack_releaseId_idx" ON "DigitalTrack"("releaseId");

-- CreateIndex
CREATE UNIQUE INDEX "DigitalProduct_slug_key" ON "DigitalProduct"("slug");

-- CreateIndex
CREATE INDEX "DigitalProduct_releaseId_idx" ON "DigitalProduct"("releaseId");

-- CreateIndex
CREATE INDEX "DigitalProduct_trackId_idx" ON "DigitalProduct"("trackId");

-- CreateIndex
CREATE INDEX "DigitalFile_format_idx" ON "DigitalFile"("format");

-- CreateIndex
CREATE UNIQUE INDEX "DigitalFile_productId_format_key" ON "DigitalFile"("productId", "format");

-- CreateIndex
CREATE UNIQUE INDEX "MerchProduct_slug_key" ON "MerchProduct"("slug");

-- CreateIndex
CREATE INDEX "MerchProduct_provider_idx" ON "MerchProduct"("provider");

-- CreateIndex
CREATE INDEX "MerchProduct_providerProductId_idx" ON "MerchProduct"("providerProductId");

-- CreateIndex
CREATE INDEX "MerchVariant_productId_idx" ON "MerchVariant"("productId");

-- CreateIndex
CREATE INDEX "MerchVariant_sku_idx" ON "MerchVariant"("sku");

-- CreateIndex
CREATE INDEX "MerchVariant_providerVariantId_idx" ON "MerchVariant"("providerVariantId");

-- CreateIndex
CREATE INDEX "MerchImage_productId_idx" ON "MerchImage"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "PromoCode_code_key" ON "PromoCode"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Order_orderNumber_key" ON "Order"("orderNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Order_stripeCheckoutSessionId_key" ON "Order"("stripeCheckoutSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Order_stripePaymentIntentId_key" ON "Order"("stripePaymentIntentId");

-- CreateIndex
CREATE UNIQUE INDEX "Order_paypalOrderId_key" ON "Order"("paypalOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "Order_paypalCaptureId_key" ON "Order"("paypalCaptureId");

-- CreateIndex
CREATE INDEX "Order_status_idx" ON "Order"("status");

-- CreateIndex
CREATE INDEX "Order_paymentStatus_idx" ON "Order"("paymentStatus");

-- CreateIndex
CREATE INDEX "Order_customerEmail_idx" ON "Order"("customerEmail");

-- CreateIndex
CREATE INDEX "Order_createdAt_idx" ON "Order"("createdAt");

-- CreateIndex
CREATE INDEX "OrderItem_orderId_idx" ON "OrderItem"("orderId");

-- CreateIndex
CREATE INDEX "OrderItem_digitalProductId_idx" ON "OrderItem"("digitalProductId");

-- CreateIndex
CREATE INDEX "OrderItem_merchVariantId_idx" ON "OrderItem"("merchVariantId");

-- CreateIndex
CREATE INDEX "Payment_orderId_idx" ON "Payment"("orderId");

-- CreateIndex
CREATE INDEX "Payment_provider_idx" ON "Payment"("provider");

-- CreateIndex
CREATE INDEX "Payment_providerPaymentId_idx" ON "Payment"("providerPaymentId");

-- CreateIndex
CREATE INDEX "Payment_providerOrderId_idx" ON "Payment"("providerOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentEvent_eventId_key" ON "PaymentEvent"("eventId");

-- CreateIndex
CREATE INDEX "PaymentEvent_provider_idx" ON "PaymentEvent"("provider");

-- CreateIndex
CREATE INDEX "PaymentEvent_eventType_idx" ON "PaymentEvent"("eventType");

-- CreateIndex
CREATE INDEX "PaymentEvent_createdAt_idx" ON "PaymentEvent"("createdAt");

-- CreateIndex
CREATE INDEX "OrderDiscount_orderId_idx" ON "OrderDiscount"("orderId");

-- CreateIndex
CREATE INDEX "OrderDiscount_promoCodeId_idx" ON "OrderDiscount"("promoCodeId");

-- CreateIndex
CREATE INDEX "TaxLine_orderId_idx" ON "TaxLine"("orderId");

-- CreateIndex
CREATE INDEX "TaxLine_country_idx" ON "TaxLine"("country");

-- CreateIndex
CREATE INDEX "TaxLine_region_idx" ON "TaxLine"("region");

-- CreateIndex
CREATE UNIQUE INDEX "DownloadGrant_tokenHash_key" ON "DownloadGrant"("tokenHash");

-- CreateIndex
CREATE INDEX "DownloadGrant_orderId_idx" ON "DownloadGrant"("orderId");

-- CreateIndex
CREATE INDEX "DownloadGrant_orderItemId_idx" ON "DownloadGrant"("orderItemId");

-- CreateIndex
CREATE INDEX "DownloadGrant_digitalFileId_idx" ON "DownloadGrant"("digitalFileId");

-- CreateIndex
CREATE INDEX "DownloadLog_grantId_idx" ON "DownloadLog"("grantId");

-- CreateIndex
CREATE INDEX "DownloadLog_downloadedAt_idx" ON "DownloadLog"("downloadedAt");

-- CreateIndex
CREATE INDEX "MerchFulfillmentOrder_orderId_idx" ON "MerchFulfillmentOrder"("orderId");

-- CreateIndex
CREATE INDEX "MerchFulfillmentOrder_provider_idx" ON "MerchFulfillmentOrder"("provider");

-- CreateIndex
CREATE INDEX "MerchFulfillmentOrder_providerOrderId_idx" ON "MerchFulfillmentOrder"("providerOrderId");

-- CreateIndex
CREATE INDEX "MerchFulfillmentOrder_providerStatus_idx" ON "MerchFulfillmentOrder"("providerStatus");

-- CreateIndex
CREATE UNIQUE INDEX "AccountingAccount_code_key" ON "AccountingAccount"("code");

-- CreateIndex
CREATE INDEX "AccountingAccount_accountType_idx" ON "AccountingAccount"("accountType");

-- CreateIndex
CREATE UNIQUE INDEX "JournalEntry_entryNumber_key" ON "JournalEntry"("entryNumber");

-- CreateIndex
CREATE INDEX "JournalEntry_orderId_idx" ON "JournalEntry"("orderId");

-- CreateIndex
CREATE INDEX "JournalEntry_entryDate_idx" ON "JournalEntry"("entryDate");

-- CreateIndex
CREATE INDEX "JournalEntry_sourceType_idx" ON "JournalEntry"("sourceType");

-- CreateIndex
CREATE INDEX "JournalLine_journalEntryId_idx" ON "JournalLine"("journalEntryId");

-- CreateIndex
CREATE INDEX "JournalLine_accountId_idx" ON "JournalLine"("accountId");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_eventName_idx" ON "AnalyticsEvent"("eventName");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_sessionId_idx" ON "AnalyticsEvent"("sessionId");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_visitorIdHash_idx" ON "AnalyticsEvent"("visitorIdHash");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_pagePath_idx" ON "AnalyticsEvent"("pagePath");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_createdAt_idx" ON "AnalyticsEvent"("createdAt");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_orderId_idx" ON "AnalyticsEvent"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "EmailSignup_email_key" ON "EmailSignup"("email");

-- CreateIndex
CREATE INDEX "EmailSignup_subscribed_idx" ON "EmailSignup"("subscribed");

-- CreateIndex
CREATE INDEX "EmailSignup_createdAt_idx" ON "EmailSignup"("createdAt");

-- CreateIndex
CREATE INDEX "ReceiptDocument_orderId_idx" ON "ReceiptDocument"("orderId");
