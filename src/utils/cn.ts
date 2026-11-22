export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassValue[]
  | { [className: string]: unknown };

/**
 * Merges class names into a single string. Accepts strings, arrays,
 * conditional objects ({ 'p-4': isActive }) and ignores falsy values.
 * Duplicate classes are removed (the last occurrence wins its position).
 *
 * Note: it does not resolve conflicting Tailwind utilities (e.g. `p-2` vs `p-4`).
 */
export const cn = (...values: ClassValue[]): string => {
  const classes: string[] = [];

  const walk = (value: ClassValue) => {
    if (!value) return;

    if (typeof value === 'string' || typeof value === 'number') {
      classes.push(...String(value).split(/\s+/).filter(Boolean));
    } else if (Array.isArray(value)) {
      value.forEach(walk);
    } else {
      for (const key in value) {
        if (value[key]) walk(key);
      }
    }
  };

  values.forEach(walk);

  return [...new Set(classes)].join(' ');
};
