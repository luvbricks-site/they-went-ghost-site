import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const orders = await prisma.order.findMany({
    include: {
      items: true,
    },
  });

  const totalSales = orders.reduce(
    (sum, order) => sum + order.totalCents,
    0
  );

  const totalFees = orders.reduce(
  (sum, order) => sum + order.processorFeeCents,
  0
);

  const taxCollected = orders.reduce(
    (sum, order) => sum + order.taxCents,
    0
  );

  return NextResponse.json({
    orderCount: orders.length,

    grossSales: totalSales,

    processingFees: totalFees,

    taxesCollected: taxCollected,

    netRevenue:
      totalSales -
      totalFees -
      taxCollected,
  });
}