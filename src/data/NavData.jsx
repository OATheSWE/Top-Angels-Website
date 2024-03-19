export const navLinks = [
  { text: "About", href: "/about" },
  { text: "Gallery", href: "/gallery" },
  { text: "Contact", href: "/contact" },
  { text: "Admission", href: "/admission" },
  {
    text: "Login",
    links: [
      { href: "/staff", text: "Staff" },
      { href: "/student", text: "Student" },
    ],
  },
];

export const dashboardLinks = [
  { href: "/assessment", text: "Assessment" },
  { href: "/result", text: "Result" },
  { href: "/payment", text: "Payment" },
  { href: "/profile", text: "Profile" },
  { href: "/", text: "Logout" },
];

export const staffLinks = [
  { href: "/upload-assessment", text: "Assessment" },
  { href: "/upload-result", text: "Result" },
  { href: "/staff-profile", text: "Profile" },
  { href: "/", text: "Logout" },
];
