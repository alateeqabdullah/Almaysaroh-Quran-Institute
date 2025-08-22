// "use client";

// import { useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import NProgress from "nprogress";
// import "nprogress/nprogress.css";

// export default function NProgressProvider() {
//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.1 });

//     const handleStart = () => NProgress.start();
//     const handleStop = () => NProgress.done();

//     router.events?.on("routeChangeStart", handleStart);
//     router.events?.on("routeChangeComplete", handleStop);
//     router.events?.on("routeChangeError", handleStop);

//     return () => {
//       router.events?.off("routeChangeStart", handleStart);
//       router.events?.off("routeChangeComplete", handleStop);
//       router.events?.off("routeChangeError", handleStop);
//     };
//   }, [router]);

//   return null;
// }
