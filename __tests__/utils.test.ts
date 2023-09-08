import data from "@/data/data.json";
import {
  calculateStatusCounts,
  capitalizeString,
  getOptionIndexByValue,
  getStatusBgColor,
  getStatusBorderColor,
} from "@/lib/utils";
import { type ProductRequest } from "@/types";

const productRequests = data.productRequests;

describe("calculateStatusCounts", () => {
  it("calculates status counts correctly", () => {
    const result = calculateStatusCounts(productRequests as ProductRequest[]);

    expect(result).toEqual({
      planned: 2,
      "in-progress": 3,
      live: 1,
    });
  });

  it("handles empty input correctly", () => {
    const result = calculateStatusCounts([]);

    expect(result).toEqual({
      planned: 0,
      "in-progress": 0,
      live: 0,
    });
  });
});

describe("getStatusBgColor", () => {
  it("returns correct background color", () => {
    expect(getStatusBgColor("planned")).toBe("bg-orange-300");
    expect(getStatusBgColor("in-progress")).toBe("bg-fuchsia-600");
    expect(getStatusBgColor("live")).toBe("bg-blue-400");
  });
});

describe("getStatusBorderColor", () => {
  it("returns correct border color", () => {
    expect(getStatusBorderColor("planned")).toBe("border-orange-300");
    expect(getStatusBorderColor("in-progress")).toBe("border-fuchsia-600");
    expect(getStatusBorderColor("live")).toBe("border-blue-400");
  });
});

describe("capitalizeString", () => {
  it("capitalizes the string correctly", () => {
    expect(capitalizeString("hello-world")).toBe("Hello World");
    expect(capitalizeString("another-example")).toBe("Another Example");
  });

  it("handles empty string", () => {
    expect(capitalizeString("")).toBe("");
  });
});

describe("getOptionIndexByValue", () => {
  it("finds the index by value correctly", () => {
    const options = [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
      { label: "Option 3", value: 3 },
    ];

    expect(getOptionIndexByValue(options, 2)).toBe(1);
    expect(getOptionIndexByValue(options, 3)).toBe(2);
  });

  it("returns -1 for non-existent value", () => {
    const options = [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
      { label: "Option 3", value: 3 },
    ];

    expect(getOptionIndexByValue(options, 4)).toBe(-1);
  });
});
