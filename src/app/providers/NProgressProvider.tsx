"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";


 NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.2 });

export default function NProgressProvider() {
  const pathname = usePathname();

    useEffect(() => {
       NProgress.start();
   
  const timer = setTimeout(() => {
    NProgress.done()
  }, 400);
      
      return ()=> clearTimeout(timer)
  }, [pathname]);

  return null;
}
