import lightModeIntegrations from "../assets/ProjectTools.svg";
import darkModeIntegrations from "../assets/ProjectToolsDark.png";
import mobileIntegrations from "../assets/ProjectToolsMobile.png";
import mobileIntergrationsDark from "../assets/ProjectToolsMobileDarkBG.png";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";

export const Integrations = () => {
  const [theme, setTheme] = useState<string>("");
  const { setTheme: setThemeContext } = useTheme();
  useEffect(() => {
    const localTheme = localStorage.getItem("vite-ui-theme");
    setTheme(localTheme || "");
  }, [setThemeContext]);
  return (
    <section id="howItWorks" className="container py-24 sm:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Seamless Integration{" "}
        </span>
        {/* Step-by-Step Guide */}
        Across Platforms
      </h2>
      <div className="hidden md:block lg:block">
        <div className="flex justify-center">
          {theme === "dark" ? (
            <img
              src={darkModeIntegrations}
              alt="Integrations"
              className="w-1/2 mt-8"
            />
          ) : theme === "system" ? (
            <img
              src={
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? darkModeIntegrations
                  : lightModeIntegrations
              }
              alt="BoostPanda Logo"
              className="w-1/2 mt-8"
            />
          ) : (
            <img
              src={lightModeIntegrations}
              alt="Integrations"
              className="w-1/2 mt-8"
            />
          )}
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex justify-center">
          {theme === "dark" ? (
            <img
              src={mobileIntergrationsDark}
              alt="Integrations"
              className="w-4/5 mt-8"
            />
          ) : theme === "system" ? (
            <img
              src={
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? mobileIntergrationsDark
                  : mobileIntegrations
              }
              alt="BoostPanda Logo"
              className="w-4/5 mt-8"
            />
          ) : (
            <img
              src={mobileIntegrations}
              alt="Integrations"
              className="w-4/5 mt-8"
            />
          )}
        </div>
      </div>
      <p className="text-center text-xl pt-8 lg:px-60 xl:px-60 md:px-20 sm:px-6 text-muted-foreground">
        BoostPanda integrates with SharePoint, MS Graph, Trello, Jira, MS Teams,
        Asana, Slack, Monday.com, ClickUp, Confluence, and Zoho Projects.
        Streamline your workflow effortlessly.
      </p>
    </section>
  );
};
