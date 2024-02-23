"use client";
import { Props } from "next/script";

import React, { useState, useEffect, use } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { generateForm } from "@/actions/generateForm";
import { useFormState, useFormStatus } from "react-dom";

import { useSession, signIn, signOut } from "next-auth/react";

type props = {};
const initialState: {
  message: string;
  data?: any;
} = {
  message: "",
};
export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Generating..." : "Generate"}
    </Button>
  );
}

const FormGenerator = (props: Props) => {
  const [state, formAction] = useFormState(generateForm, initialState);
  const [open, setOpen] = useState(false);
  const session = useSession();

  console.log(session);
  useEffect(() => {
    if (state.message === "success") {
      setOpen(false);
    }
    console.log(state);
  }, [state.message]);

  const onFormCreate = () => {
    if(session.data?.user){
    setOpen(true);
    }else{
      signIn();
    }
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <Button onClick={onFormCreate}>Create Form</Button>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Form</DialogTitle>
          </DialogHeader>
          <form action={formAction}>
            <div className="grid gap-4 py-4">
              <Textarea
                id="description"
                name="description"
                required
                placeholder="share what is your form is about 
              , who is it for, and what information you would like to collect.And AI will do the magic"
              />
            </div>

            <DialogFooter>
              <SubmitButton />
              <Button variant="link"> Create Manually</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormGenerator;
