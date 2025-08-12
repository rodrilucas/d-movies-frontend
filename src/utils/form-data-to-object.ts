export function formDataToObject<T = Record<string, FormDataEntryValue>>(
  fd: FormData
) {
  return Object.fromEntries(fd.entries()) as T;
}
