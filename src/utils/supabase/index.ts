import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { getCookie, setCookie } from "cookies-next";

import {
  NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_SUPABASE_URL,
} from "./contant";
import { NextRequest, NextResponse } from "next/server";

const secureOptions = {
  secure: true,
  httpOnly: true,
  sameSite: "strict" as const,
};

export const createSupabaseServerClient = function (isServerComponent = false) {
  return createServerClient(
    NEXT_PUBLIC_SUPABASE_URL as string,
    NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
      cookies: {
        get(name) {
          // get cookie by name
          const cookieStore = cookies();
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          if (isServerComponent) return;
          // set cookie
          const cookieStore = cookies();
          // cookieStore.set(name, value, options);
          cookieStore.set(name, value, {
            ...options,
            // secure: true,
            // httpOnly: true,
            ...secureOptions,
          });
        },
        remove(name, options) {
          if (isServerComponent) return;
          // remove cookie
          const cookieStore = cookies();
          cookieStore.set(name, "", {
            ...options,
            // secure: true,
            // httpOnly: true,
            ...secureOptions,
          });
        },
      },
    }
  );
};

export const createSupabaseServerComponentClient = function () {
  return createSupabaseServerClient(true);
};

export const createSupabaseMiddlewareClient = function (
  req: NextRequest,
  res: NextResponse
) {
  return createServerClient(
    NEXT_PUBLIC_SUPABASE_URL as string,
    NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
      cookies: {
        get(name) {
          // get cookie by name
          return getCookie(name, { req, res });
        },
        set(name, value, options) {
          setCookie(name, value, { req, res, ...options, ...secureOptions });
        },
        remove(name, options) {
          setCookie(name, "", { req, res, ...options, ...secureOptions });
        },
      },
    }
  );
};
