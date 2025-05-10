import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Importar o Navbar
import Footer from "@/components/Footer"; // Importar o Footer

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Portfolio de [Seu Nome]",
	description: "Portfolio pessoal de [Seu Nome], Desenvolvedor...",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
			{/* Adicionamos as classes de cores base aqui para Light/Dark mode */}
			<body className="bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text font-sans flex flex-col min-h-screen">
				<Navbar /> {/* Navbar no topo */}
				<main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
					{" "}
					{/* Conteúdo principal da página */}
					{children}
				</main>
				<Footer /> {/* Footer na base */}
			</body>
		</html>
	);
}
