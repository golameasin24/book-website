
// "use client"

// import * as React from "react"
// import { Link } from "react-router-dom"
// import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "একাডেমিক",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "মেডিকেল ",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//     {
//     title: "একাডেমিক",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "মেডিকেল ",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
  
//     {
//     title: "একাডেমিক",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "মেডিকেল বই",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
  
//   {
//     title: "মাদ্রাসা",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "ইঞ্জিনিয়ারিং বই",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "ইংলিশ মিডিয়াম",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "ভর্তি পরিক্ষা এবং প্রস্তুতি",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
  
//     {
//     title: "ডিপ্লোমা",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//      {
//     title: "বিসিএস এবং জব",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },

//       {
//     title: "ডিপ্লোমা",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//      {
//     title: "বিসিএস এবং জব",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },

  
//       {
//     title: "ডিপ্লোমা",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//      {
//     title: "বিসিএস এবং জব",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
  
// ]

// export function Navigation() {
//   return (
//     <div className="flex justify-center w-full">

//     <NavigationMenu viewport={false} >
//       <NavigationMenuList>
//         <NavigationMenuItem>
//                 <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//                 <Link to="/docs">হোম</Link>
//                 </NavigationMenuLink>
//           {/* <NavigationMenuTrigger><button>হোম</button></NavigationMenuTrigger> */}
//           {/* <NavigationMenuContent>
//             <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <li className="row-span-3">
//                 <NavigationMenuLink asChild>
//                   <Link
//                     className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
//                     to="/"
//                   >
//                     <div className="mt-4 mb-2 text-lg font-medium">
//                       shadcn/ui
//                     </div>
//                     <p className="text-muted-foreground text-sm leading-tight">
//                       Beautifully designed components built with Tailwind CSS.
//                     </p>
//                   </Link>
//                 </NavigationMenuLink>
//               </li>
//               <ListItem href="/docs" title="Introduction">
//                 Re-usable components built using Radix UI and Tailwind CSS.
//               </ListItem>
//               <ListItem href="/docs/installation" title="Installation">
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href="/docs/primitives/typography" title="Typography">
//                 Styles for headings, paragraphs, lists...etc
//               </ListItem>
//             </ul>
//           </NavigationMenuContent> */}
//         </NavigationMenuItem>

//         <NavigationMenuItem>
//           <NavigationMenuTrigger>ক্যাটাগরিস</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[400px] gap-x-10] md:w-[500px] md:grid-cols-4 lg:w-[600px]">
//               {components.map((component) => (
//                 <ListItem
//                   key={component.title}
//                   title={component.title}
//                   href={component.href}
//                 >
//                   {/* {component.description} */}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>

//         <NavigationMenuItem>
//           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//             <Link to="/docs">লেখক</Link>
//           </NavigationMenuLink>
//         </NavigationMenuItem>

//         <NavigationMenuItem>
//           <NavigationMenuTrigger>প্রকাশনী</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[300px] gap-4">
//               <li>
//                 <NavigationMenuLink asChild>
//                   <Link to="#">
//                     <div className="font-medium">ইয়াছিন প্রকাশনী</div>
//                     <div className="text-muted-foreground">
//                       সমকালীন সাহিত্য, অনুবাদ ও গবেষণাধর্মী বই প্রকাশের জন্য বাংলাদেশে অন্যতম জনপ্রিয় প্রকাশনী।
//                     </div>
//                   </Link>
//                 </NavigationMenuLink>
//                 <NavigationMenuLink asChild>
//                   <Link to="#">
//                     <div className="font-medium">মোঃ রাকিবুল ইসলাম প্রকাশনী</div>
//                     <div className="text-muted-foreground">
//                       আধুনিক গল্প, উপন্যাস, জীবনী ও প্রবন্ধ প্রকাশে বিশেষভাবে পরিচিত।
//                     </div>
//                   </Link>
//                 </NavigationMenuLink>
//                 <NavigationMenuLink asChild>
//                   <Link to="#">
//                     <div className="font-medium">টুটুল প্রকাশনী</div>
//                     <div className="text-muted-foreground">
//                      শিক্ষাবিষয়ক, একাডেমিক ও গবেষণামূলক বই প্রকাশে দীর্ঘদিনের সুনাম অর্জনকারী প্রকাশনী।
//                     </div>
//                   </Link>
//                 </NavigationMenuLink>
//               </li>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>

//         <NavigationMenuItem>
//           <NavigationMenuTrigger>স্টেশনারিস</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[200px] gap-4">
//               <li>
//                 <NavigationMenuLink asChild>
//                   <Link to="#">বলপেন</Link>
//                 </NavigationMenuLink>
//                 <NavigationMenuLink asChild>
//                   <Link to="#">নোটবুক খাতা</Link>
//                 </NavigationMenuLink>
//                 <NavigationMenuLink asChild>
//                   <Link to="#">ডায়রী</Link>
//                 </NavigationMenuLink>
//               </li>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>

//         <NavigationMenuItem>
//           <NavigationMenuTrigger>ক্যাম্পেইন</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[200px] gap-4">
//               <li>
//                 <NavigationMenuLink asChild>
//                   <Link to="#" className="flex flex-row items-center gap-2">
//                     <CircleHelpIcon />
//                     Backlog
//                   </Link>
//                 </NavigationMenuLink>
//                 <NavigationMenuLink asChild>
//                   <Link to="#" className="flex flex-row items-center gap-2">
//                     <CircleIcon />
//                     To Do
//                   </Link>
//                 </NavigationMenuLink>
//                 <NavigationMenuLink asChild>
//                   <Link to="#" className="flex flex-row items-center gap-2">
//                     <CircleCheckIcon />
//                     Done
//                   </Link>
//                 </NavigationMenuLink>
//               </li>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//     </div>
//   )
// }

// function ListItem({
//   title,
//   children,
//   href,
//   ...props
// }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
//   return (
//     <li {...props} className="">
//       <NavigationMenuLink className="" asChild>
//         <Link to={href}>
//           <div className="text-sm leading-none font-medium">{title}</div>
//           <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   )
// }



"use client"

import * as React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, MenuIcon, XIcon } from "lucide-react"
import { HiOutlineViewGrid } from "react-icons/hi";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  { title: "একাডেমিক", href: "/docs/primitives/alert-dialog", description: "A modal dialog that interrupts the user." },
  { title: "মেডিকেল ", href: "/docs/primitives/hover-card", description: "For sighted users to preview content." },
  { title: "মাদ্রাসা", href: "/docs/primitives/progress", description: "Displays completion progress." },
  { title: "ইঞ্জিনিয়ারিং বই", href: "/docs/primitives/scroll-area", description: "Visually separates content." },
  { title: "ইংলিশ মিডিয়াম", href: "/docs/primitives/tabs", description: "A set of layered sections." },
  { title: "ভর্তি পরিক্ষা এবং প্রস্তুতি", href: "/docs/primitives/tooltip", description: "A popup with info." },
  { title: "ডিপ্লোমা", href: "/docs/primitives/tabs", description: "Layered content sections." },
  { title: "বিসিএস এবং জব", href: "/docs/primitives/tabs", description: "Layered content sections." },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex justify-between items-center w-full px-4 border-b-2 border-t-2 relative z-50 xl:w-full">
      {/* Logo */}
      <Link to="/" className=" font-bold text-red-800 text-3xl hidden lg:block"><HiOutlineViewGrid className="lg:ml-8" /></Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="flex flex-wrap gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink  asChild className={`${navigationMenuTriggerStyle()} text-[20px] font-bold  hover:text-red-500`} >
                <Link to="/docs">হোম</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[20px] font-bold  hover:text-red-500">ক্যাটাগরিস</NavigationMenuTrigger>
              <NavigationMenuContent className="w-[200px] md:w-[400px] lg:w-[500px] absolute right-0 max-h-[200px] overflow-y-auto shadow-md rounded-md bg-white">
                <ul className="grid gap-2 md:grid-cols-2">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-[20px] font-bold  hover:text-red-500`}>
                <Link to="/docs">লেখক</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[20px] font-bold  hover:text-red-500">প্রকাশনী</NavigationMenuTrigger>
              <div className="w-[00px]">
                  <NavigationMenuContent className="bg-white shadow-md rounded-md">
                    <div className="">
                        <ul className="">
                          <li>
                            <div className="flex justify-between">
                                <NavigationMenuLink asChild>
                                  <Link to="#">
                                    <div className="font-medium">ইয়াছিন প্রকাশনী</div>
                                  <div className="text-muted-foreground">
                                        সমকালীন সাহিত্য, অনুবাদ ও গবেষণাধর্মী বই প্রকাশের জন্য বাংলাদেশে অন্যতম জনপ্রিয় প্রকাশনী।
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild><Link to="#">মোঃ রাকিবুল ইসলাম প্রকাশনী</Link></NavigationMenuLink>
                                <NavigationMenuLink asChild><Link to="#">টুটুল প্রকাশনী</Link></NavigationMenuLink>

                            </div>
                          </li>
                        </ul>
                    </div>
                  </NavigationMenuContent>

              </div>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[20px] font-bold  hover:text-red-500">স্টেশনারিস</NavigationMenuTrigger>
              <NavigationMenuContent className="absolute right-0 w-[200px] max-h-[200px] overflow-y-auto bg-white shadow-md rounded-md">
                <ul className="grid gap-2">
                  <li>
                    <NavigationMenuLink asChild><Link to="#">বলপেন</Link></NavigationMenuLink>
                    <NavigationMenuLink asChild><Link to="#">নোটবুক খাতা</Link></NavigationMenuLink>
                    <NavigationMenuLink asChild><Link to="#">ডায়রী</Link></NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[20px] font-bold hover:text-red-500">ক্যাম্পেইন</NavigationMenuTrigger>
              <NavigationMenuContent className="absolute right-0 w-[200px] max-h-[200px] overflow-y-auto bg-white shadow-md rounded-md">
                <ul className="grid gap-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="#" className="flex flex-row items-center gap-2">
                        <CircleHelpIcon /> Backlog
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#" className="flex flex-row items-center gap-2">
                        <CircleIcon /> To Do
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#" className="flex flex-row items-center gap-2">
                        <CircleCheckIcon /> Done
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="absolute top-14 right-2 w-60 bg-white shadow-lg rounded-md p-4 flex flex-col gap-3 md:hidden max-h-[400px] overflow-y-auto z-50">
          <Link to="/docs" className="hover:underline">হোম</Link>

          <div>
            <p className="font-semibold mb-1">ক্যাটাগরিস</p>
            <div className="flex flex-col gap-1">
              {components.map((c) => (
                <Link key={c.title} to={c.href} className="hover:bg-gray-100 p-1 rounded">{c.title}</Link>
              ))}
            </div>
          </div>

          <Link to="/docs" className="hover:underline">লেখক</Link>

          <div>
            <p className="font-semibold mb-1">প্রকাশনী</p>
            <div className="flex flex-col gap-1">
              <Link to="#">ইয়াছিন প্রকাশনী</Link>
              <Link to="#">মোঃ রাকিবুল ইসলাম প্রকাশনী</Link>
              <Link to="#">টুটুল প্রকাশনী</Link>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-1">স্টেশনারিস</p>
            <div className="flex flex-col gap-1">
              <Link to="#">বলপেন</Link>
              <Link to="#">নোটবুক খাতা</Link>
              <Link to="#">ডায়রী</Link>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-1">ক্যাম্পেইন</p>
            <div className="flex flex-col gap-1">
              <Link to="#" className="flex items-center gap-2"><CircleHelpIcon /> Backlog</Link>
              <Link to="#" className="flex items-center gap-2"><CircleIcon /> To Do</Link>
              <Link to="#" className="flex items-center gap-2"><CircleCheckIcon /> Done</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink className="" asChild>
        <Link to={href} className="block p-2 hover:bg-gray-100 rounded-md">
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
