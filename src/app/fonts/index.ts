import { Anton, Dancing_Script } from 'next/font/google';



// Configure Anton
export const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

// Configura Dancing Script
export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});