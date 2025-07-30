// src/theme.ts
import { createTheme } from "flowbite-react";

export const customTheme = createTheme({
  sidebar: {
    root: {
      base: "h-full",
      inner: "h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800",
    },
    logo: {
      base: "mb-5 flex items-center pl-2.5",
      collapsed: {
        on: "hidden",
        off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white",
      },
      img: "mr-3 h-6 sm:h-7",
    },
    item: {
      base: "flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
      active: "bg-gray-200 dark:bg-gray-700",
      icon: {
        base: "h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        active: "text-blue-600 dark:text-yellow-400",
      },
      content: {
        base: "ml-3",
      },
    },
  },
  button: {
    color: {
      primary: "bg-blue-500 hover:bg-blue-600 text-white",
      secondary: "bg-gray-200 hover:bg-gray-300 text-black",
    },
    size: {
      md: "px-4 py-2 text-sm",
    },
  },
  input: {
    field: {
      input: {
        base: "block w-full rounded-lg border text-sm focus:ring-2",
        colors: {
          gray: "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
        },
      },
    },
  },
});
