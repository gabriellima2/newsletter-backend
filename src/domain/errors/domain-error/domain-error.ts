export interface IDomainError {
  message: string | undefined;
  hasError: boolean;
}

export class DomainError extends Error {
  public readonly data: IDomainError;

  constructor(data: IDomainError) {
    super(data.message);
    this.data = data;
  }
}
