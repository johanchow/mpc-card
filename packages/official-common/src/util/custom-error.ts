class CustomError extends Error {
  private readonly code: number;
  private readonly data: any;
  public constructor({code, message, data}: {code: number, message: string, data: any}) {
    super(message);
    this.code = code;
    this.data = data;
  }
  public toJson() {
    return {
      code: this.code,
      message: this.message,
      data: this.data,
    };
  }
};


export default CustomError;
