import React from "react";
import { Button } from "@/components/ui/button";
import FormGenerator from "./form-generator";
const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-24">
      <FormGenerator />
    </div>
  );
};

export default page;
