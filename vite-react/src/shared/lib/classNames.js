export const cn = (cls, mods = {}, additional = []) =>
  [
    cls,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional.filter((value) => Boolean(value)),
  ].join(' ');
