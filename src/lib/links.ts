export function isActiveHref(href?: string | null) {
  const value = href?.trim();

  return Boolean(value && value !== "#");
}