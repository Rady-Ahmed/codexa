import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LangProvider, useLang } from "./LangContext";

function Probe() {
  const { lang, dir, path, toggleLang } = useLang();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="dir">{dir}</span>
      <span data-testid="path">{path("/services")}</span>
      <button onClick={toggleLang}>toggle</button>
    </div>
  );
}

function renderAt(initialPath: string) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <LangProvider>
        <Probe />
      </LangProvider>
    </MemoryRouter>
  );
}

describe("LangContext", () => {
  it("derives Arabic/RTL from a root path", () => {
    renderAt("/services");
    expect(screen.getByTestId("lang").textContent).toBe("ar");
    expect(screen.getByTestId("dir").textContent).toBe("rtl");
  });

  it("derives English/LTR from an /en-prefixed path", () => {
    renderAt("/en/services");
    expect(screen.getByTestId("lang").textContent).toBe("en");
    expect(screen.getByTestId("dir").textContent).toBe("ltr");
  });

  it("builds a localized path for the current language", () => {
    renderAt("/en/about");
    expect(screen.getByTestId("path").textContent).toBe("/en/services");
  });

  it("builds an unprefixed path for Arabic", () => {
    renderAt("/about");
    expect(screen.getByTestId("path").textContent).toBe("/services");
  });

  it("toggles document dir when switching language", () => {
    renderAt("/services");
    fireEvent.click(screen.getByText("toggle"));
    expect(document.documentElement.dir).toBe("ltr");
  });
});
