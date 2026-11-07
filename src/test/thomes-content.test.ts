import { describe, expect, it } from "vitest";

import { STARTING_PRICE_PER_SQUARE_YARD } from "@/lib/thomes-content";

describe("T Homes Infra pricing", () => {
  it("keeps the advertised starting price at 11,000 rupees per square yard", () => {
    expect(STARTING_PRICE_PER_SQUARE_YARD).toBe(11000);
  });
});