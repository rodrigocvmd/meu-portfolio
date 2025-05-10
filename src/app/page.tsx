// src/app/page.tsx
import Link from "next/link";
// import Image from 'next/image'; // Mantenha comentado até ter a imagem

// Seus Textos
const seuNome = "Rodrigo Carvalho";
const seuTitulo = "Desenvolvedor Full Stack e Graduando em Ciência da Computação";
const linhaDeBoasVindas =
	"Bem-vindo(a) ao meu portfólio. Explore meus projetos, conheça minha trajetória e sinta-se à vontade para entrar em contato!"; // Nova linha
const resumoSobreMim =
	"Desenvolvedor Full Stack apaixonado por transformar ideias em soluções web intuitivas e eficientes. Com uma transição de carreira do Direito (UnB) para a Ciência da Computação, trago um olhar analítico e dedicação à construção de software de qualidade, utilizando tecnologias como JavaScript/TypeScript, React e Node.js. Busco ativamente minha primeira oportunidade para aplicar e expandir minhas habilidades em projetos desafiadores.";

export default function HomePage() {
	return (
		<>
			{" "}
			{/* Usando Fragment pois o <main> já está no layout */}
			{/* Seção Hero */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
					{/* Coluna de Texto */}
					<div className="md:w-3/5 lg:w-2/3 text-center md:text-left">
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-light-text dark:text-dark-text mb-4">
							{seuNome}
						</h1>
						<h2 className="text-2xl sm:text-3xl font-heading text-light-text dark:text-dark-text mb-6">
							{seuTitulo}
						</h2>
						{/* Linha de Boas-Vindas no lugar do Slogan */}
						<p className="text-lg font-sans text-light-text dark:text-dark-text mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
							{linhaDeBoasVindas}
						</p>
						<Link
							href="/projetos"
							className="inline-block bg-light-accent hover:opacity-90 text-white dark:bg-dark-accent dark:text-dark-primary font-bold font-sans py-3 px-8 rounded-lg text-lg shadow-md transition-opacity duration-300">
							Veja meus projetos
						</Link>
					</div>
					{/* Coluna da Imagem/Ilustração (Placeholder) */}
					<div className="md:w-2/5 lg:w-1/3 flex justify-center md:justify-end mt-10 md:mt-0">
						<div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-light-secondary dark:bg-dark-secondary rounded-full flex items-center justify-center shadow-lg overflow-hidden">
							{/* <Image src="/sua-foto.jpg" alt="Rodrigo Carvalho" width={320} height={320} className="rounded-full object-cover w-full h-full"/> */}
							<span className="text-light-text dark:text-dark-text font-sans p-4 text-center">
								Sua Imagem/Ilustração Aqui
							</span>
						</div>
					</div>
				</div>
			</section>
			{/* Seção Sobre Mim (Resumo) */}
			<section className="py-16 bg-light-secondary dark:bg-dark-secondary">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-3xl font-heading font-bold text-light-text dark:text-dark-text mb-6">
						Um Pouco Sobre Mim
					</h2>
					<p className="text-md font-sans text-light-text dark:text-dark-text max-w-3xl mx-auto mb-8 leading-relaxed">
						{resumoSobreMim}
					</p>
					<Link
						href="/sobre"
						className="inline-block border-2 border-light-accent text-light-accent hover:bg-light-accent hover:text-white 
                       dark:border-dark-accent dark:text-dark-accent dark:hover:bg-dark-accent dark:hover:text-dark-primary 
                       font-bold font-sans py-3 px-8 rounded-lg text-lg shadow-md transition-colors duration-300">
						Conheça Minha Trajetória
					</Link>
				</div>
			</section>
			{/* Seção Destaque de Projetos */}
			<section className="py-16">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-heading font-bold text-center text-light-text dark:text-dark-text mb-12">
						Projetos em Destaque
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Placeholders para Cards de Projeto */}
						<div className="bg-light-secondary dark:bg-dark-secondary p-6 rounded-lg shadow-lg min-h-[16rem] flex items-center justify-center">
							<p className="font-sans text-light-text dark:text-dark-text">Card do Projeto 1</p>
						</div>
						<div className="bg-light-secondary dark:bg-dark-secondary p-6 rounded-lg shadow-lg min-h-[16rem] flex items-center justify-center">
							<p className="font-sans text-light-text dark:text-dark-text">Card do Projeto 2</p>
						</div>
						<div className="bg-light-secondary dark:bg-dark-secondary p-6 rounded-lg shadow-lg min-h-[16rem] md:col-span-2 lg:col-span-1 flex items-center justify-center">
							<p className="font-sans text-light-text dark:text-dark-text">Card do Projeto 3</p>
						</div>
					</div>
					<div className="text-center mt-12">
						<Link
							href="/projetos"
							className="inline-block bg-light-accent hover:opacity-90 text-white dark:bg-dark-accent dark:text-dark-primary font-bold font-sans py-3 px-8 rounded-lg text-lg shadow-md transition-opacity duration-300">
							Ver Todos os Projetos
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
