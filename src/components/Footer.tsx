// src/components/Footer.tsx
// import Link from "next/link";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text py-8 text-center">
			<div className="container mx-auto px-6">
				{/* Links para Redes Sociais - Exemplo com placeholders */}
				<div className="mb-4">
					<a
						href="https://github.com/rodrigocvmd"
						target="_blank"
						rel="noopener noreferrer"
						className="font-sans hover:text-light-accent dark:hover:text-dark-accent mx-2">
						GitHub
					</a>
					<a
						href="https://linkedin.com/in/rodrigocvmd"
						target="_blank"
						rel="noopener noreferrer"
						className="font-sans hover:text-light-accent dark:hover:text-dark-accent mx-2">
						LinkedIn
					</a>
					{/* Adicione outras redes se desejar */}
				</div>
				<p className="font-sans text-sm">
					&copy; {currentYear} [Rodrigo Carvalho]. Todos os direitos reservados.
				</p>
				<p className="font-sans text-xs mt-2">Feito com Next.js, TypeScript & Tailwind CSS.</p>
			</div>
		</footer>
	);
}
