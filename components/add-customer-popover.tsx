"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useCustomers } from "@/store/use-customers";

export function AddCustomerPopover() {
  const [customerInp, setCustomerInp] = useState("");
  const [emailInp, setEmailInp] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const { addCustomer } = useCustomers();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const avatar = file
      ? URL.createObjectURL(file)
      : "/avatars/default-avatar.png";

    addCustomer({
      company: "Morgan Design",
      customerSince: "Nov 14, 2025",
      id: Math.random().toString(),
      customer: customerInp,
      email: emailInp,
      phone: "+1 555 012 8901",
      avatar,
      status: "active",
      orders: 0,
      spent: 0,
    });

    setCustomerInp("");
    setEmailInp("");
    setFile(null);
  };

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button variant="outline">
            <Plus /> Add Customer
          </Button>
        }
      />

      <PopoverContent className="w-80">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="mb-1 space-y-2">
            <h4 className="font-medium leading-none">Add Customer</h4>
          </div>

          <div className="grid gap-2">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="file-input-single">Avatar</Label>

              <Input
                id="file-input-single"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setFile(e.target.files?.[0] ?? null);
                }}
              />
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="customer-name">Full name</Label>

              <Input
                id="customer-name"
                value={customerInp}
                onChange={(e) => setCustomerInp(e.target.value)}
                className="col-span-2 h-8"
                placeholder="Name Surname"
              />
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="customer-email">Email</Label>

              <Input
                id="customer-email"
                value={emailInp}
                onChange={(e) => setEmailInp(e.target.value)}
                placeholder="Email..."
                type="email"
                className="col-span-2 h-8"
              />
            </div>
          </div>

          <button
            type="submit"
            className="m-1 flex items-center justify-center gap-1 rounded-xl border py-2 font-bold transition duration-300 hover:opacity-70"
          >
            <Plus size={20} />
            Add
          </button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
