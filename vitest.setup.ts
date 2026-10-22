import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Node 25 以降は組み込みの localStorage が jsdom のものを上書きし、
// --localstorage-file を指定しないと undefined になるため、メモリ上の Storage で置き換える
if (typeof globalThis.localStorage === "undefined") {
    class MemoryStorage implements Storage {
        private store = new Map<string, string>();
        get length() { return this.store.size; }
        clear() { this.store.clear(); }
        getItem(key: string) { return this.store.get(key) ?? null; }
        key(index: number) { return [...this.store.keys()][index] ?? null; }
        removeItem(key: string) { this.store.delete(key); }
        setItem(key: string, value: string) { this.store.set(key, String(value)); }
    }
    Object.defineProperty(globalThis, "localStorage", { value: new MemoryStorage(), configurable: true });
}

afterEach(() => {
    cleanup();
    localStorage.clear();
});
