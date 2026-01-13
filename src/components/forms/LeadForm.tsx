"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { trackFormSubmit } from "@/lib/analytics";

const schema = z.object({
  name: z.string().min(2, "Вкажіть ім'я"),
  contact: z
    .string()
    .min(5, "Вкажіть телефон або email")
    .refine(
      (v) => {
        const hasAt = v.includes("@");
        const digits = v.replace(/\D/g, "");
        const looksLikePhone = digits.length >= 9;
        return hasAt || looksLikePhone;
      },
      { message: "Вкажіть коректний телефон або email" }
    ),
  consent: z
    .boolean()
    .refine((v) => v === true, { message: "Потрібна згода" }),
});

type FormValues = z.infer<typeof schema>;

export function LeadForm({
  submitLabel,
}: {
  submitLabel: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", contact: "", consent: false },
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Bad response");
      trackFormSubmit("lead_form");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      noValidate
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-[color:var(--color-foreground)]">
            Ім&apos;я
          </label>
          <input
            className={cn(
              "mt-2 w-full rounded-2xl bg-[color:var(--color-surface)] px-4 py-3 text-sm ring-1 ring-[color:var(--color-border)] outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]"
            )}
            {...register("name")}
            autoComplete="name"
          />
          {errors.name ? (
            <div className="mt-1 text-xs text-[color:var(--color-muted)]">
              {errors.name.message}
            </div>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-medium text-[color:var(--color-foreground)]">
            Телефон або email
          </label>
          <input
            className="mt-2 w-full rounded-2xl bg-[color:var(--color-surface)] px-4 py-3 text-sm ring-1 ring-[color:var(--color-border)] outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]"
            {...register("contact")}
            autoComplete="email"
          />
          {errors.contact ? (
            <div className="mt-1 text-xs text-[color:var(--color-muted)]">
              {errors.contact.message}
            </div>
          ) : null}
        </div>
      </div>

      <label className="flex items-start gap-3 text-sm leading-6 text-[color:var(--color-muted)]">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-[color:var(--color-border)]"
          {...register("consent")}
        />
        <span>Я погоджуюсь на обробку персональних даних.</span>
      </label>
      {errors.consent ? (
        <div className="text-xs text-[color:var(--color-muted)]">
          {errors.consent.message}
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button as="button" ariaLabel={submitLabel} className="sm:w-auto">
          {status === "sending" ? "..." : submitLabel}
        </Button>
        {status === "success" ? (
          <div className="text-sm text-[color:var(--color-foreground)]">
            Дякуємо! Ми скоро зв&apos;яжемось з вами.
          </div>
        ) : null}
        {status === "error" ? (
          <div className="text-sm text-[color:var(--color-muted)]">
            Помилка відправки. Спробуйте ще раз.
          </div>
        ) : null}
      </div>
    </form>
  );
}


