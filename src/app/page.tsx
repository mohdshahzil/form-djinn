import React from "react";
import { Button } from "@/components/ui/button";
import FormGenerator from "./form-generator";
import Header from "@/components/ui/header";
import { SessionProvider } from "next-auth/react";
import { db } from "@/db";
import { forms } from "@/db/schema";
export default async function page() {
  const forms = await db.query.forms.findMany();
  console.log(forms);
  return (
    <>
      <SessionProvider>
        <Header />
        <main className="min-h-screen flex flex-col items-center justify-between p-24">
          <FormGenerator />
        </main>
      </SessionProvider>
    </>
  );
}
