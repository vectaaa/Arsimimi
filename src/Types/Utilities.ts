// Utility types to enhance type usage in typescript

/**
 * Similar to `Partial`, but instead of making all props optional, only turn specific props optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & {[P in K]?: T[P]};

/**
 * Rename one or more props from the original type. Useful when creating a new type that is based on one or more other types.
 * Usage example:
 *   RenameProps<OriginalType, { newProp1: 'oldProp1'; newProp2: 'oldProp2' }>;
 */
export type RenameProps<T, K extends {[key: string]: keyof T}> = {
  [P in keyof T as P extends K[keyof K]
    ? keyof K extends infer U
      ? U extends string
        ? K[U] extends P
          ? U
          : never
        : never
      : never
    : P]: T[P];
};
