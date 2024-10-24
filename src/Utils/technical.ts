export const wait = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

export const findObjectsBySubstringInSpecificFields = <T>(
  options: ReadonlyArray<T>,
  fields: readonly (keyof T)[],
  substring: string
) =>
  options?.filter((item) =>
    fields.some(
      (field) =>
        (typeof item[field] === 'string' || typeof item[field] === 'number') &&
        String(item[field]).toLowerCase().indexOf(substring) > -1
    )
  );

export function degreesToRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}
