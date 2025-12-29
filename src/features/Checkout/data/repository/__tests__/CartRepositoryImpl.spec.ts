import "reflect-metadata";
import { describe, it, expect } from "vitest";
import { CartRepositoryImpl } from "../CartRepositoryImpl";

describe("CartRepositoryImpl", () => {
  it("should manage cart items", async () => {
    const repo = new CartRepositoryImpl();
    
    await repo.addItem({ courseId: "1", title: "Course", price: 100 });
    let items = await repo.getItems();
    expect(items).toHaveLength(1);

    await repo.removeItem("1");
    items = await repo.getItems();
    expect(items).toHaveLength(0);
  });

  it("should clear items on checkout", async () => {
    const repo = new CartRepositoryImpl();
    await repo.addItem({ courseId: "1", title: "Course", price: 100 });
    
    await repo.checkout();
    const items = await repo.getItems();
    expect(items).toHaveLength(0);
  });
});
