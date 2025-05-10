// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-light-secondary dark:bg-dark-secondary shadow-md">
			<div className="container mx-auto px-6 py-3 flex justify-between items-center">
				<Link
					href="/"
					className="text-2xl font-heading font-bold text-light-text dark:text-dark-text">
					Rodrigo Carvalho
				</Link>
				<div className="space-x-4">
					<Link
						href="/sobre"
						className="font-sans text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent">
						Sobre
					</Link>
					<Link
						href="/projetos"
						className="font-sans text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent">
						Projetos
					</Link>
					<Link
						href="/contato"
						className="font-sans text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent">
						Contato
					</Link>
					{/* Futuramente: Botão Light/Dark Mode aqui */}
				</div>
			</div>
		</nav>
	);
}
