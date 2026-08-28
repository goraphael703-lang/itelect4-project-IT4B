// src/lib/utils.ts -- a NEW file, all 5 lines of it
// (verbatim from the CLI -- shadcn's own style has no semicolons)
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// cn() joins class strings AND resolves conflicts. Given
// "p-2" and "p-4", plain string joining keeps both and the
// browser applies whichever comes LATER in the generated CSS,
// which is not the order you wrote them. twMerge keeps "p-4".
// That is what lets you pass a className to a component and
// have it win, instead of fighting the one already inside.