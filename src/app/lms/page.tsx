// import { fetchMetaData } from "@/request";
// import { Metadata } from "next";

import CISSP from "./CISSP";

// export async function generateMetadata(): Promise<Metadata> {
//   const { metaData, metaError } = await fetchMetaData();
//   const partner = metaData?.find((m) => m.page === "volt-up");
//   if (!partner || metaError)
//     return {
//       title: "White Level | Qualimatrix",
//       description:
//         "Qualimatrix Technologies is an Independent Software Testing company in India USA UK UAE. Contact us for App Testing Service, Functional Testing Service, Security Testing Service and more. E-mail Us On: support@qualimatrix.tech · Call Us On: +91 81033 53297",
//       keywords:
//         "Best game testing Services, Top mobile app testing, Best security testing Services, QA performance testingServices, Career at Qualimatrix, Career for Testers",
//       alternates: {
//         canonical: "https://qualimatrix.tech/case-study/white-level",
//       },
//     };

//   return {
//     title: partner?.title,
//     description: partner?.description,
//     keywords: partner?.keywords,
//     alternates: {
//       canonical: "https://qualimatrix.tech/case-study/white-level",
//     },
//   };
// }

export default async function Page() {
  return (
    <>
      <CISSP />
    </>
  );
}
