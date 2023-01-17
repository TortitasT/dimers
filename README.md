# Dimers
Deno timers utility library.

## Usage
```ts
import { Timer, Magnitude } from "https://deno.land/x/dimers/mod.ts";

const timer = new Timer(
  ()=>{
    console.log("Hello World!");
  })
  .add(1, Magnitude.Seconds)
  .start();
```