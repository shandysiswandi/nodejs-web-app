export const mockImportWithDelay = <T>(
  component: Promise<T>,
  delay = 1000
): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(component), delay);
  });
};
