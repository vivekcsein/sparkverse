// all the styles related jobs written here
import { Poppins, Roboto, Nunito, Cabin, Lora } from "next/font/google";
// import localFont from 'next/font/local';
export const roboto = Roboto({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "700"],
    variable: "--font-roboto",
});
export const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "700"],
    variable: "--font-poppins",
});
export const nunito = Nunito({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "700"],
    variable: "--font-nunito",
});
export const cabin = Cabin({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "700"],
    variable: "--font-cabin",
});
export const lora = Lora({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "700"],
    variable: "--font-lora",
});