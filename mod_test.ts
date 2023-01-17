import { assertFalse, assertEquals } from "https://deno.land/std@0.165.0/testing/asserts.ts";
import { Timer, Magnitude } from "./mod.ts";

Deno.test("1 second timer", async () => {
  let counter = 0;

  const timer = new Timer(() => {
    counter++;
  });

  timer.add(Magnitude.Second, 1).start();

  assertEquals(counter, 0);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  assertEquals(counter, 1);
});

Deno.test("1 second timer with repeat", async () => {
  let counter = 0;

  const timer = new Timer(() => {
    counter++;
  }, true);

  timer.add(Magnitude.Second, 1).start();

  assertEquals(counter, 0);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  assertFalse(counter < 2);

  timer.stop();
});