import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { buttonVariants } from './ui/button';
import { Menu } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import { useState } from 'react';
import { useTheme } from './theme-provider';

// import { LogoIcon } from "./Icons";
import LogoLight from '@/assets/light-mode-logo.svg';
import LogoDark from '@/assets/dark-mode-logo.svg';
import React from 'react';
import { cn } from '@/lib/utils';

interface RouteProps {
  href: string;
  label: string;
}

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: 'Alert Dialog',
//     href: '/docs/primitives/alert-dialog',
//     description: 'A modal dialog that interrupts the user with important content and expects a response.',
//   },
//   {
//     title: 'Hover Card',
//     href: '/docs/primitives/hover-card',
//     description: 'For sighted users to preview content available behind a link.',
//   },
//   {
//     title: 'Progress',
//     href: '/docs/primitives/progress',
//     description:
//       'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
//   },
//   {
//     title: 'Scroll-area',
//     href: '/docs/primitives/scroll-area',
//     description: 'Visually or semantically separates content.',
//   },
//   {
//     title: 'Tabs',
//     href: '/docs/primitives/tabs',
//     description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
//   },
//   {
//     title: 'Tooltip',
//     href: '/docs/primitives/tooltip',
//     description:
//       'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
//   },
// ];

const routeList: RouteProps[] = [
  {
    href: '/about',
    label: 'About Us',
  },
  {
    href: '#earlyAccess',
    label: 'Contact',
  },
  {
    href: '/#faq',
    label: 'FAQ',
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [theme, setTheme] = useState<string>('');
  const { theme } = useTheme();
  // useEffect(() => {
  //   const localTheme = localStorage.getItem('vite-ui-theme');
  // setTheme(localTheme || '');
  // }, [setThemeContext]);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a rel="noreferrer noopener" href="/" className="ml-2 font-bold text-xl flex">
              {theme === 'dark' ? (
                <img src={LogoDark} alt="BoostPanda Logo" className="h-8 w-8 mr-2" />
              ) : theme === 'system' ? (
                <img
                  src={window.matchMedia('(prefers-color-scheme: dark)').matches ? LogoDark : LogoLight}
                  alt="BoostPanda Logo"
                  className="h-8 w-8 mr-2"
                />
              ) : (
                <img src={LogoLight} alt="BoostPanda Logo" className="h-8 w-8 mr-2" />
              )}
              <span>BoostPanda</span>
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5" onClick={() => setIsOpen(true)}>
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={'left'}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">BoostPanda</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Services</AccordionTrigger>
                      <AccordionContent>
                        <div>
                          <h4 className="text-sm font-semibold">Industries</h4>
                          <ul className={`${theme === 'light' ? 'text-black' : ' text-white'}`}>
                            <ListItem href="/industry/dentistry" title="Dentistry">
                              Enhance your clinic's efficiency and visibility.
                            </ListItem>
                            <ListItem href="/industry/travel" title="Travel & Hospitality">
                              End to end solutions for your travel business.
                            </ListItem>
                            <ListItem href="/industry/education" title="Education">
                              Modernize your institution with AI.
                            </ListItem>
                            <ListItem href="/industry/public-sector" title="Government & Public Sector">
                              Custom-built solutions for the public sector.
                            </ListItem>
                          </ul>
                        </div>
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold">Products</h4>
                          <ul className={`${theme === 'light' ? 'text-black' : ' text-white'}`}>
                            <ListItem href="/product/chatbots" title="Custom Chatbots">
                              Powerful, custom chatbots for your business.
                            </ListItem>
                            <ListItem href="/product/llm-apps" title="LLM Apps & Pipelines">
                              Automate your business processes.
                            </ListItem>
                            <ListItem href="/product/ai-analytics" title="AI Analytics">
                              Get insights from your data and make informed decisions.
                            </ListItem>
                            <ListItem href="/product/ai-consulting" title="Training & Consulting">
                              Get expert advice on AI.
                            </ListItem>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`border-b-[1px] w-full text-left rounded-none pb-4 pt-2`}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            <NavigationMenu>
              <NavigationMenuList className="md:w-[30rem] lg:w-[30rem] xl:w-[50rem]">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Icons.logo className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components that you can copy and paste into your apps. Accessible.
                              Customizable. Open Source.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href="/docs/primitives/typography" title="Typography">
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul> */}
                    <div className="grid xl:grid-cols-5 grid-cols-4 xl:gap-3 gap-2 xl:p-6 p-4 xl:w-[60rem] w-[35rem]">
                      <NavigationMenuLink asChild className="xl:col-span-1 md:hidden lg:hidden xl:block">
                        <a
                          className={`flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md ${theme === 'light' ? 'from-purple-100 to-red-50' : 'from-purple-700 to-red-900'}`}
                          href="/"
                        >
                          {/* <Icons.logo className="h-6 w-6" /> */}
                          <div className={`mb-2 mt-2 text-lg font-medium`}>Supercharge your business with AI</div>
                          <p
                            className={`text-sm leading-tight ${theme === 'light' ? 'text-muted-foreground' : 'text-grey-400'}`}
                          >
                            Our custom AI services, from chatbots to data analytics, help you work smarter, not harder.
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <div className="col-span-2">
                        <h4 className="text-lg font-semibold">Industries</h4>
                        <ul>
                          <ListItem href="/industry/dentistry" title="Dentistry">
                            Enhance your clinic's efficiency and visibility.
                          </ListItem>
                          <ListItem href="/industry/travel" title="Travel & Hospitality">
                            End to end solutions for your travel business.
                          </ListItem>
                          <ListItem href="/industry/education" title="Education">
                            Modernize your institution with AI.
                          </ListItem>
                          <ListItem href="/industry/public-sector" title="Government & Public Sector">
                            Custom-built solutions for the public sector.
                          </ListItem>
                        </ul>
                      </div>
                      <div className="col-span-2">
                        <h4 className="text-lg font-semibold">Products</h4>
                        <ul>
                          <ListItem href="/product/chatbots" title="Custom Chatbots">
                            Powerful, custom chatbots for your business.
                          </ListItem>
                          <ListItem href="/product/llm-apps" title="LLM Apps & Pipelines">
                            Automate your business processes.
                          </ListItem>
                          <ListItem href="/product/ai-analytics" title="AI Analytics">
                            Get insights from your data and make informed decisions.
                          </ListItem>
                          <ListItem href="/product/ai-consulting" title="Training & Consulting">
                            Get expert advice on AI.
                          </ListItem>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {routeList.map((route: RouteProps, i) => (
                  <a
                    rel="noreferrer noopener"
                    href={route.href}
                    key={i}
                    className={`text-[17px] ${buttonVariants({
                      variant: 'ghost',
                    })}`}
                  >
                    {route.label}
                  </a>
                ))}

                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem key={component.title} title={component.title} href={component.href}>
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="hidden md:flex gap-2">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
