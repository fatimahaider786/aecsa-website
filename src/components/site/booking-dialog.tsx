"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CalendarCheck, Loader2 } from "lucide-react";
import { SITE } from "@/lib/site";

const SERVICES = [
  "Comprehensive Eye Checkup",
  "Cataract Surgery",
  "LASIK Eye Surgery",
  "Glaucoma & Uveitis Care",
  "Second Opinion",
];

export function BookingDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [service, setService] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Simulated booking request — in production this posts to the clinic system.
    setTimeout(() => {
      setSubmitting(false);
      onOpenChange(false);
      toast({
        title: "Request received",
        description:
          "Thank you! Our team will call you back shortly to confirm your appointment.",
      });
      setService("");
    }, 900);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2 text-xl text-ink">
            <CalendarCheck className="h-5 w-5 text-aqua" aria-hidden />
            Book a Consultation
          </DialogTitle>
          <DialogDescription>
            Leave your details and our staff will confirm your appointment by
            phone or WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="bk-name">Full name</Label>
            <Input
              id="bk-name"
              name="name"
              required
              placeholder="e.g. Muhammad Ali"
              autoComplete="name"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bk-phone">Phone number</Label>
            <Input
              id="bk-phone"
              name="phone"
              type="tel"
              required
              pattern="[0-9+\-\s]{7,15}"
              placeholder="03XX XXXXXXX"
              autoComplete="tel"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bk-service">Service</Label>
            <Select value={service} onValueChange={setService} required>
              <SelectTrigger id="bk-service" aria-label="Select a service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {SERVICES.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bk-note">Message (optional)</Label>
            <Textarea
              id="bk-note"
              name="note"
              rows={3}
              placeholder="Briefly describe your concern…"
            />
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-aqua text-white hover:bg-aqua-dark"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
                Sending…
              </>
            ) : (
              "Request Appointment"
            )}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Prefer to call?{" "}
            <a href={SITE.phoneHref} className="font-medium text-aqua-dark underline-offset-2 hover:underline">
              {SITE.phoneDisplay}
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
