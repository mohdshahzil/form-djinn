import React from "react";
import { Button } from "@/components/ui/button";
import FormGenerator from "./form-generator";
import Header from "@/components/ui/header";
import { SessionProvider } from "next-auth/react";
const page = () => {
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
};

export default page;
