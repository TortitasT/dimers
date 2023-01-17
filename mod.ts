// deno-lint-ignore-file no-inferrable-types ban-types
export class Timer {
  private callback: Function;
  private milliseconds: number = 0;
  private repeat: boolean = false;
  private timeout: number | undefined = undefined;

  constructor(callback: Function, repeat: boolean = false) {
    this.callback = callback;
    this.repeat = repeat;
  }

  public add(magnitude: Magnitude, quantity: number) {
    this.milliseconds += magnitude * quantity;
    return this;
  }

  public start() {
    this.stop();

    this.timeout = setTimeout(() => {
      this.callback(this);

      if (this.timeout === undefined) {
        return;
      }

      if (this.repeat) {
        this.start();
      } else {
        this.stop();
      }
    }, this.milliseconds);
  }

  public stop() {
    clearTimeout(this.timeout);
    this.timeout = undefined;
  }
}

export enum Magnitude {
  Second = 1000,
  Minute = 60000,
  Hour = 3600000,
  Day = 86400000,
  Week = 604800000,
  Month = 2629800000,
  Year = 31557600000,
}