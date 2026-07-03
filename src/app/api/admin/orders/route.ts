import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const orders = await prisma.order.findMany({
    include: {
      items: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(
    orders.map((order) => ({
      id: order.id,

      createdAt: order.createdAt,

      total: order.totalCents,

      processorFee: order.processorFeeCents,

      tax: order.taxCents,

      status: order.status,

      // paymentProvider: order.paymentProvider,

      items: order.items.map((item) => ({
        title: item.titleSnapshot,
        type: item.itemType,
        fulfillment: item.fulfillmentStatus,
      })),
    }))
  );
}