"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { useCustomers } from "@/store/use-customers";
import { Customer } from "./tables/table-transactions/columns";

interface Props {
  variant: "outline" | "ghost";
  className: string;
  customer: Customer;
}

export function EditCustomer({ variant, className, customer }: Props) {
  const [nameInp, setNameInp] = useState(customer.customer);
  const [emailInp, setEmailInp] = useState(customer.email);
  const [companyInp, setCompanyInp] = useState(customer.company);
  const [phoneInp, setPhoneInp] = useState(customer.phone);

  const [avatarInp, setAvatarInp] = useState<File | null>(null);

  const { editCustomer } = useCustomers();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const avatar = avatarInp ? URL.createObjectURL(avatarInp) : customer.avatar;

    editCustomer({
      company: companyInp,
      customerSince: customer.customerSince,
      id: customer.id,
      customer: nameInp,
      email: emailInp,
      phone: phoneInp,
      avatar: avatar,
      status: customer.status,
      orders: customer.orders,
      spent: customer.spent,
    });
  };

  const avatarPreview = avatarInp
    ? URL.createObjectURL(avatarInp)
    : customer.avatar;

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant={variant} className={className}>
            Edit Customer
          </Button>
        }
      />

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Customer</SheetTitle>
        </SheetHeader>

        <div className="auto-rows-min gap-6 px-4 h-full">
          <form
            className="h-full flex flex-col gap-8 items-center justify-between pb-5"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-8">
              <div className="flex gap-5 items-center">
                <Avatar className="w-15 h-15">
                  <AvatarImage src={avatarPreview} alt="avatar" />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>

                <Input
                  id="file-input-single"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    setAvatarInp(e.target.files?.[0] ?? null);
                  }}
                />
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="name">Full name</Label>

                <Input
                  id="name"
                  value={nameInp}
                  onChange={(e) => setNameInp(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="email">Email</Label>

                <Input
                  id="email"
                  value={emailInp}
                  onChange={(e) => setEmailInp(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="company">Company</Label>

                <Input
                  id="company"
                  value={companyInp}
                  onChange={(e) => setCompanyInp(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="phone">Phone</Label>

                <Input
                  id="phone"
                  value={phoneInp}
                  onChange={(e) => setPhoneInp(e.target.value)}
                />
              </div>
            </div>
            <div>
              <SheetClose
                type="submit"
                className="px-5 py-3 border rounded-full cursor-pointer hover:opacity-70 transition-all duration-300"
              >
                Save changes
              </SheetClose>
            </div>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
