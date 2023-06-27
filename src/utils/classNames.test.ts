import { classNames } from "./classNames";

test("empty config should produce empty string", () => {
  expect(classNames({})).toBe("");
});

test("config with conditions should produce correct classname", () => {
  expect(classNames({ trueClass: true, falseClass: false })).toBe("trueClass");
});

test("config with predifined classes should produce correct classname", () => {
  expect(classNames("classA", "classB")).toBe("classA classB");
});

test("config with mixed classes should produce correct classname", () => {
  expect(classNames("classA", { classB: false, classC: true }, "classD")).toBe(
    "classA classC classD"
  );
});

test("faulty config should produce empty string", () => {
  expect(classNames("", {})).toBe("");
});
