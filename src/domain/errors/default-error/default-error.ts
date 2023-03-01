export interface IDefaultError {
  message: string | undefined;
  hasError: boolean;
}

export class DefaultError extends Error {
  public readonly data: IDefaultError;

  constructor(data: IDefaultError) {
    super(data.message);
    this.data = data;
  }
}
