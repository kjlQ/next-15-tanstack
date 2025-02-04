"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <div className="text-right font-medium">{row.getValue("id")}test</div>;
    },
  },
  {
    accessorKey: "userId",
    header: "User ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
];
