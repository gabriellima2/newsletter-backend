export interface IDefaultError {
  message: string | undefined;
  hasError: boolean;
}

export class DefaultError implements IDefaultError {
  public readonly message: string | undefined;
  public readonly hasError: boolean;

  constructor(params: IDefaultError) {
    const { message, hasError } = params;
    this.hasError = hasError;
    this.message = message;
  }
}
