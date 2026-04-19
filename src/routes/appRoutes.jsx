import { lazy, Suspense } from "react"
// import { useSelector } from "react-redux"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
// import AuthSkelton from "@/components/SkeltonLoading/AuthSkelton"
// import AuthLayout from "@/layouts/AuthLayout"
// import GuestLayout from "@/layouts/GuestLayout"
// import UserLayout from "@/layouts/UserLayout"
// import ForgotPassword from "@/pages/auth/ForgotPassword"
// import ResetPassword from "@/pages/auth/ResetPassword"
// import SignUp from "@/pages/auth/SignUp"
// import { stringToHex } from "@/lib/utils"
// import LogoLoader from "@/components/SkeltonLoading/LogoLoader"
// import NotFound from "@/pages/NotFound/NotFound"
import Applayout from "../layouts/Applayout"

// Lazy-loaded pages
// const UserProfilePage = lazy(() =>
//   import("@/pages/UserProfilePage/UserProfilePage")
// )
// const SwapsDetails = lazy(() => import("@/pages/SwapsDetails/SwapsDetails"))
// const Faqs = lazy(() => import("@/pages/Faqs/Faqs"))
// const LandingContactUs = lazy(() =>
//   import("@/pages/LandingContactUs/LandingContactUs"))

const Landing = lazy(() => import("../pages/Landing/Landing"))

// const Login = lazy(() => import("@/pages/auth/SignIn"))
// const OtherUserProfile = lazy(() =>
//   import("@/pages/OtherUserProfile/OtherUserProfile")
// )

// const Feeds = lazy(() => import("@/pages/FeedsPage/FeedsPage"))

// const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy/PrivacyPolicy"))
// const VerifyEmail = lazy(() => import("@/pages/auth/VerifyEmail"))
// const DirectLoginByEmail = lazy(() => import("@/pages/auth/DirectLoginByEmail"))

// Route config with component and layoutType
const routeConfig = [
  { path: "/", component: Landing, protected: false, layout: "guest" },
  //   {
  //     path: "/swap-detail/:id",
  //     component: SwapsDetails,
  //     protected: true,
  //     layout: "user",
  //   },
  //   {
  //     path: "/user-profile",
  //     component: UserProfilePage,
  //     protected: true,
  //     layout: "user",
  //   },
  //   {
  //     path: "/user/:id",
  //     component: OtherUserProfile,
  //     protected: true,
  //     layout: "user",
  //   },
  //   {
  //     path: "/verify-email/:email",
  //     component: VerifyEmail,
  //     protected: false,
  //     layout: "auth",
  //     authTitle: "Verify Email",
  //   },
  //   {
  //     path: "/privacy-policy",
  //     component: PrivacyPolicy,
  //     protected: false,
  //     layout: "guest",
  //   },
  //   {
  //     path: "/login",
  //     component: Login,
  //     protected: false,
  //     layout: "auth",
  //     authTitle: "Hello SIGN IN!",
  //   },
  //   {
  //     path: "/signup",
  //     component: SignUp,
  //     protected: false,
  //     layout: "auth",
  //     authTitle: "Hello SIGN UP!",
  //   },
  //   {
  //     path: "/forgot-password",
  //     component: ForgotPassword,
  //     protected: false,
  //     layout: "auth",
  //     authTitle: "FORGOT PASSWORD",
  //   },
  //   {
  //     path: "/reset-password",
  //     component: ResetPassword,
  //     protected: false,
  //     layout: "auth",
  //     authTitle: "RESET PASSWORD",
  //   },
  //   {
  //     path: "/direct-login-by-email",
  //     component: DirectLoginByEmail,
  //     protected: false,
  //   },

  //   { path: "/feeds", component: Feeds, protected: true, layout: "user" },

  //   { path: "/faqs", component: Faqs, protected: false, layout: "guest" },
  //   {
  //     path: "/contact",
  //     component: LandingContactUs,
  //     protected: false,
  //     layout: "guest",
  //   },
  //   {
  //     path: "/404",
  //     component: NotFound,
  //     protected: false,
  //   },
]

// Utility to wrap a component with the appropriate layout
const withLayout = (Component, layoutType, layoutProps = {}) => {
  if (layoutType) {
    const Layout = layoutType === "guest" ? Applayout : null
    // : layoutType === "auth"
    // ? AuthLayout
    // : UserLayout

    return (
      <Layout {...layoutProps}>
        <Component />
      </Layout>
    )
  } else {
    return <Component />
  }
}

const AppRoutes = () => {
  // const { user, role } = useSelector((state) => state.auth)
  const user = null
  const role = null
  const redirectPath = "/feeds"

  const renderRoute = (route) => {
    const {
      path,
      protected: isProtected,
      role: allowedRoles,
      component: Component,
      layout,
      authTitle,
    } = route

    // 1️⃣ Not logged in → block protected routes
    if (isProtected && !user) {
      return (
        <Route
          key={path}
          path={path}
          element={<Navigate to="/login" replace />}
        />
      )
    }

    // 2️⃣ Logged in but unverified → always force /verify-email
    // if (isProtected && user?.required_otp === true) {
    //   return (
    //     <Route
    //       key={path}
    //       path={path}
    //       element={
    //         <Navigate to={`/verify-email/${stringToHex(user.email)}`} replace />
    //       }
    //     />
    //   )
    // }

    // 3️⃣ Verified user should NOT see /verify-email again
    if (path.startsWith("/verify-email") && user && !user.required_otp) {
      return (
        <Route
          key={path}
          path={path}
          element={<Navigate to={redirectPath} replace />}
        />
      )
    }

    // 4️⃣ Restrict access by role
    if (
      isProtected &&
      allowedRoles &&
      (!role || !allowedRoles.includes(role))
    ) {
      return (
        <Route
          key={path}
          path={path}
          element={<Navigate to="/login" replace />}
        />
      )
    }

    // 6️⃣ Prevent logged-in (verified) users from going back to login/signup/etc
    const publicAuthRoutes = [
      "/login",
      "/signup",
      "/forgot-password",
      "/reset-password",
      "/",
      "/direct-login-by-email",
    ]
    if (
      !isProtected &&
      user &&
      !user.required_otp &&
      publicAuthRoutes.includes(path)
    ) {
      return (
        <Route
          key={path}
          path={path}
          element={<Navigate to={redirectPath} replace />}
        />
      )
    }

    // ✅ Default: render with layout
    const wrappedElement = withLayout(Component, layout, { authTitle })
    return (
      <Route
        key={path}
        path={path}
        element={
          <Suspense
            fallback={
              layout == "auth"
                ? "Auth loading"
                : // <LogoLoader />
                  "Logo Loading"
            }
          >
            {wrappedElement}
          </Suspense>
        }
      />
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        {routeConfig.map(renderRoute)}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
