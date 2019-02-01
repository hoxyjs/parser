export default class Hello {
  private _msg: string = "Hello world";

  get msg(): string {
    return this._msg;
  }
}
