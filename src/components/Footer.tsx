import BotterflyLogoLight from "@/assets/light-mode-logo.svg";
import BotterflyLogoDark from "@/assets/dark-mode-logo.svg";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";

export const Footer = () => {
  const [theme, setTheme] = useState<string>("");
  const { setTheme: setThemeContext } = useTheme();
  useEffect(() => {
    const localTheme = localStorage.getItem("vite-ui-theme");
    setTheme(localTheme || "");
  }, [setThemeContext]);
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />
      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            {theme === "dark" ? (
              <img
                src={BotterflyLogoDark}
                alt="Botterfly Logo"
                className="h-8 w-8 mr-2"
              />
            ) : theme === "system" ? (
              <img
                src={
                  window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? BotterflyLogoDark
                    : BotterflyLogoLight
                }
                alt="Botterfly Logo"
                className="h-8 w-8 mr-2"
              />
            ) : (
              <img
                src={BotterflyLogoLight}
                alt="Botterfly Logo"
                className="h-8 w-8 mr-2"
              />
            )}
            <span>Botterfly</span>
          </a>
        </div>

        <div className="flex flex-col gap-2"></div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About Us</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Botterfly
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Features</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#memory-assistance"
              className="opacity-60 hover:opacity-100"
            >
              Memory Assistance
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#ai-driven-insights"
              className="opacity-60 hover:opacity-100"
            >
              Insights & Retrospects
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#project-management"
              className="opacity-60 hover:opacity-100"
            >
              Project Management
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#memory"
              className="opacity-60 hover:opacity-100"
            >
              Integrations
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Support</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQs
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#earlyAccess"
              className="opacity-60 hover:opacity-100"
            >
              Contact
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Terms
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Privacy
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>&copy; Botterfly 2024 </h3>
      </section>
    </footer>
  );
};
