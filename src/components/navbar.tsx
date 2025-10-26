"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navigationItems } from "@/data/content";

const NAVBAR_HEIGHT = 84;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "shadow-lg bg-white/80 backdrop-blur-lg" : "bg-transparent"
      }`}
      style={{ height: NAVBAR_HEIGHT }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <Link
          href="#home"
          className="flex items-center gap-3 text-lg font-semibold text-[color:var(--color-foreground)]"
        >
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_12px_28px_rgba(40,16,178,0.14)]">
            <Image
              src="/logo.png"
              alt="Bidayati logo"
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">
              Bidayati
            </span>
            <span className="text-lg font-bold text-[color:var(--color-primary)]">
              E-Learning
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[color:var(--color-muted)] transition hover:text-[color:var(--color-foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#signin"
            className="rounded-full border border-[rgba(40,16,178,0.2)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-primary)] transition hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary-dark)]"
          >
            Sign In
          </Link>
          <Link
            href="#register"
            className="rounded-full bg-gradient-to-r from-[#2810b2] via-[#49b3e1] to-[#84efc7] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(40,16,178,0.18)] transition hover:brightness-110"
          >
            Register
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_12px_28px_rgba(40,16,178,0.12)] md:hidden"
        >
          {open ? (
            <X className="h-6 w-6 text-[color:var(--color-primary)]" />
          ) : (
            <Menu className="h-6 w-6 text-[color:var(--color-primary)]" />
          )}
        </button>

        {open ? (
          <div className="absolute inset-x-6 top-[calc(100%+1rem)] rounded-3xl border border-white/60 bg-white/95 px-6 py-8 shadow-[0_24px_55px_rgba(40,16,178,0.2)] md:hidden">
            <nav className="flex flex-col gap-4 text-base font-medium text-[color:var(--color-foreground)]">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 transition hover:bg-[#e5f7ff]/70"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="#signin"
                onClick={() => setOpen(false)}
                className="rounded-full border border-[rgba(40,16,178,0.2)] px-5 py-3 text-center text-sm font-medium text-[color:var(--color-primary)] transition hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary-dark)]"
              >
                Sign In
              </Link>
              <Link
                href="#register"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gradient-to-r from-[#2810b2] via-[#49b3e1] to-[#84efc7] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_20px_40px_rgba(40,16,178,0.2)] transition hover:brightness-110"
              >
                Register
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
