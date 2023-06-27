type ClassConfig = string | Record<string, boolean>;

export const classNames = (...args: ClassConfig[]): string => {
  const nameGroups = args.reduce((acc, arg) => {
    if (arg && typeof arg === "string") {
      return acc.concat(arg);
    }

    if (arg && typeof arg === "object") {
      const filteredNames = Object.entries(arg)
        .filter(([_, condition]) => condition)
        .map(([className, _]) => className);
      return acc.concat(filteredNames.join(" "));
    }

    return acc;
  }, [] as string[]);
  return nameGroups.join(" ");
};
