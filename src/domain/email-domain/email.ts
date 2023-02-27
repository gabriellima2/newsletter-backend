export class Email {
  constructor(
    private readonly email: string,
    private readonly validation: (email: string) => boolean
  ) {}

  validate(): boolean {
    return this.validation(this.email);
  }
}
