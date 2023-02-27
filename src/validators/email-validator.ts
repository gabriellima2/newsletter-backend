export function emailValidator(email: string): boolean {
  if (!email) {
    return false;
  }
  if (email.length > 256) {
    return false;
  }
  return true;
}
