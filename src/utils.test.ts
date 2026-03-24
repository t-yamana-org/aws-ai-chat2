import { expect, test, describe } from "vite-plus/test";

describe("基本的なテスト", () => {
  test("文字列の長さを正しく計算する", () => {
    // わざと失敗するテスト
    expect("hello".length).toBe(5);
    expect("".length).toBe(0); // これは失敗します
  });

  test("配列の要素数を正しく計算する", () => {
    const numbers = [1, 2, 3];
    expect(numbers.length).toBe(3);
    expect(numbers.includes(2)).toBe(true);
    expect(numbers.includes(4)).toBe(false);
  });
});
