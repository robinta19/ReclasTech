/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";

import CardProduct from "../Components/CardProduct";
import CardService from "../Components/CardService";
import CardTesti from "../Components/CardTesti";
import TabsRole from "../Components/TabsRole";
import Arrow from "../Components/Icon/Arrow";
import Team from "../Components/Icon/Team";
import CouPro from "../Components/CouPro";
import Navbar from "../Components/Navbar";
import RoadM from "../Components/RoadM";

const Home = () => {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<div className="overflow-hidden">
			<Navbar />
			<meta
				name="description"
				content="Selamat datang di Reclas Tech, di sini inovasi dan kualitas bersatu. Tim ahli kami di pengembangan perangkat lunak, desain kreatif, dan manajemen proyek siap wujudkan ide brilian Anda. Ayo ciptakan masa depan!"
			/>
			<meta
				name="keywords"
				content="Reclas, Inovatif, Developer, Inovasi, ReclasTech, teknologi terkini, pembangunan aplikasi, solusi digital"
			></meta>

			{/* Home */}
			<div id="Home" className="relative w-full h-screen home">
				<div className="absolute z-0 flex w-full h-full ornament">
					<img
						className="h-[36rem] md:h-[42rem] object-cover ml-auto mt-auto"
						src="Images/ornament2.png"
						alt="Reclas Tech"
					/>
				</div>
				<div className="container flex items-center justify-between h-full px-2 m-auto md:px-3">
					<div data-aos="fade-up" className="left">
						<div className="wrap-head md:w-[40rem] text-white">
							<h1 className="head max-[320px]:text-[2.5rem] text-[3.75rem] md:text-[6rem] font-bold">
								Reclas Tech
							</h1>
							<h3 className="subhead max-[320px]:text-[1.4rem] text-[2.1rem] md:text-[3.35rem]">
								Your Vision, Our Code
							</h3>
							<p className="teks max-[320px]:text-xs text-base md:text-lg text-justify">
								Selamat datang di Reclas Tech, di mana inovasi
								bertemu dengan kualitas. Tim ahli kami dalam
								pengembangan perangkat lunak, desain kreatif,
								dan manajemen proyek siap untuk mewujudkan
								ide-ide brilian Anda menjadi kenyataan. Mari
								ciptakan masa depan bersama!
							</p>
						</div>
						<div className="mt-14 btnget">
							<a
								href="#about"
								className="bg-white hover:bg-secondary max-[320px]:px-6 max-[320px]:py-2.5 px-8 py-3 rounded-3xl max-[320px]:text-sm text-lg md:text-xl font-bold text-srBlack hover:text-white transition-all duration-300"
							>
								Ayo Jelajahi
							</a>
						</div>
					</div>
					<div
						data-aos="fade-left"
						className="z-10 hidden xl:block h-[26rem] aspect-[5/4]"
					>
						<img
							className="w-full h-full"
							src="Images/hero.png"
							alt="Reclas Tech"
						/>
					</div>
				</div>
			</div>
			{/* Home */}

			{/* About us */}
			<div id="about" className="flex min-h-screen bg-srWhite">
				<div className="container flex flex-col gap-10 px-2 py-20 m-auto md:px-3">
					<h2
						data-aos="fade-up"
						className="head max-[320px]:text-2xl text-4xl md:text-5xl font-bold text-center"
					>
						TENTANG KAMI
					</h2>
					<div className="flex items-center justify-between gap-3 max-md:flex-wrap">
						<div
							data-aos="fade-up"
							data-aos-offset="100"
							className="order-4 w-full text-justify wrap-left md:order-1 md:w-1/2"
						>
							<h3 className="subhead max-[320px]:text-sm text-xl md:text-3xl text-primary font-bold">
								Awal Perjalanan Dari Reclas Tech
							</h3>
							<p className="teks mt-1 max-[320px]:text-xs text-base md:text-lg text-justify">
								Kami memulai sebagai programmer baru diluar
								perguruan tinggi dan berhasil membangun tim yang
								sekarang menjadi salah satu tim pengembangan
								perangkat lunak di Bandar Lampung. Kami terdiri
								dari 11 orang. Kami telah menyelesaikan beberapa
								proyek yang sesuai dengan kebutuhan dan harapan
								klien. Kami tidak pernah takut gagal jika ini
								akan menuntun kami untuk mempelajari sesuatu
								yang baru dan memperluas wawasan profesional dan
								pribadi kami. Kami percaya bahwa komunikasi
								sangat penting untuk keberhasilan penyelesaian
								proyek kami. Inilah sebabnya mengapa kami
								mendengarkan dengan cermat dari klien kami dan
								kami menyambut baik terhadap umpan balik mereka
								di setiap tahap proses pengembangan web.
							</p>
						</div>
						<div
							data-aos="fade-up"
							className="right m-auto max-[320px]:w-36 w-52 md:w-72 flex justify-center order-2"
						>
							<img
								className="object-cover"
								src="Images/reclas.png"
								alt="Reclas Tech adalah perusahaan pengembangan perangkat lunak yang berlokasi di Bandar Lampung, Lampung."
							/>
						</div>
					</div>
				</div>
			</div>
			{/* About us */}

			{/* service */}
			<div
				id="service"
				className="flex items-center min-h-screen px-2 py-20 service md:py-24 md:px-3"
			>
				<div className="w-full">
					<h2
						data-aos="fade-up"
						className="head max-[320px]:text-2xl text-4xl md:text-5xl font-bold text-center text-white"
					>
						LAYANAN
					</h2>
					<div data-aos="fade-up" className="container mx-auto my-6">
						<h3 className="subhead max-[320px]:text-sm text-xl md:text-3xl text-white w-full md:w-96 font-bold">
							Layanan Yang Kami Sediakan Untuk Membantu Bisnis
							Anda
						</h3>
					</div>
					<div
						data-aos="fade-up"
						className="relative overflow-hidden wrap"
					>
						<div className="hero m-auto container max-[320px]:h-52 h-80 md:h-[32rem] md:block flex justify-center">
							<img
								className="h-full "
								src="Images/service2.png"
								alt="Service Yang Reclas Tech Sediakan Untuk Membantu Bisnis Anda"
							/>
						</div>
						<div className="wrap-card px-0 md:px-5 flex items-center  gap-4 md:absolute overflow-x-auto  scroll-smooth md:top-[20px] p-3 py-5  right-0 md:w-[70%] w-full">
							<CardService
								service="Web Application Dev"
								teks="Tim akan memproses pengembangan perangkat lunak yang bertujuan untuk membuat aplikasi yang dapat diakses melalui web browser. Proses pengembangan ini mencakup berbagai langkah mulai dari perencanaan, desain, pengembangan, pengujian, hingga implementasi aplikasi web yang interaktif dan fungsional."
							>
								<Team />
							</CardService>
							<CardService
								service="Mobile Application Dev"
								teks="Tim akan membuat aplikasi perangkat lunak yang dirancang khusus untuk digunakan pada perangkat mobile seperti smartphone dan tablet. Proses ini melibatkan serangkaian langkah yang mirip dengan pengembangan aplikasi web, tetapi dengan fokus pada platform mobile dan karakteristik uniknya sesuai dengan kebutuhan klien."
							>
								<Team />
							</CardService>
							<CardService
								service="Custom Software Dev"
								teks="Tim akan memproses pengembangan perangkat lunak yang dirancang khusus untuk memenuhi kebutuhan unik dan spesifik suatu organisasi atau individu. Berbeda dengan perangkat lunak yang sudah jadi yang umumnya dirancang untuk penggunaan umum, perangkat lunak kustom dibangun dari awal atau dimodifikasi secara mendalam."
							>
								<Team />
							</CardService>
							<CardService
								service="Graphic Design"
								teks="Tim akan menciptakan dan menggabungkan elemen visual, seperti gambar, teks, dan grafik, untuk menyampaikan pesan atau informasi dengan cara yang efektif dan menarik. Ini adalah bidang seni dan desain yang melibatkan kreativitas, pemahaman tentang prinsip desain, dan penggunaan alat desain grafis komputer."
							>
								<Team />
							</CardService>
						</div>
					</div>
				</div>
			</div>
			{/* service */}

			{/* product */}
			<div
				id="product"
				className="flex items-center min-h-screen px-2 py-20 product bg-srWhite md:py-24 md:px-3"
			>
				<div className="w-full">
					<h2
						data-aos="fade-up"
						className="head max-[320px]:text-2xl text-4xl md:text-5xl font-bold text-center mb-6 text-black"
					>
						PRODUK
					</h2>
					<div className="container flex flex-wrap h-full gap-3 m-auto wrap md:flex-nowrap">
						<div
							data-aos="fade-up"
							className="w-full left md:w-2/5"
						>
							<h3 className="subhead max-[320px]:text-sm text-xl md:text-3xl text-primary max-w-[45rem] font-bold">
								Beberapa produk yang telah kami ciptakan. Ayo,
								mulai perjalanan inovasi Anda dengan kami!
							</h3>
							<div className="mt-5 img">
								<img
									className="m-auto h-72 md:h-auto"
									src="Images/product.png"
									alt="Produk yang telah kami ciptakan. Ayo, mulai perjalanan inovasi Anda dengan kami!"
								/>
							</div>
						</div>
						<div className="center hidden md:block w-0.5 rounded-full bg-primary"></div>
						<div
							data-aos="fade-up"
							className="w-full right md:w-3/5 "
						>
							<div className="wrap-card flex flex-col gap-3 h-[38rem] overflow-y-auto md:px-3 px-1">
								<CardProduct
									img="Images/pro1.jpg"
									title="Bimbel Griselda"
									teks="Bimbel Griselda merupakan sebuah website bimbel yang menyediakan layanan bimbel baik dari sekolah dasar hingga atas dan juga terbuka untuk umum dalam dunia pendidikan."
								/>
								<CardProduct
									img="Images/pro2.jpg"
									title="PT. ElyNaz IndoMasr Global"
									teks="PT. ElyNaz IndoMasr Global merupakan sebuah website company profile yang menampilkan profile dari PT. Elynaz IndoMasr yang bergerak pada bidang Home Cleaning dan Catering."
								/>
								<CardProduct
									img="Images/pro3.jpg"
									title="POS Yang's Grosir"
									teks="POS Yang's Grosir merupakan sebuah website point of sale atau kasir yang dapat melakukan transaksi belaja dari konsumen serta dapat menampilkan laporan keuangn dari toko retail."
								/>
								<CardProduct
									img="Images/pro4.jpg"
									title="Slaxx Distro Store"
									teks="Slaxx Distro Store merupakan sebuah website toko distro baju yang menampilkan produk serta dapat melakukan transaksi pembelian dari produk baju yang tersedia dalam website."
								/>
								<CardProduct
									img="Images/pro4a.jpg"
									title="Kedai Bu Titin"
									teks="Kedai Bu Titin merupakan sebuah website warung makan ayam geprek dimana konsumen dapat memesan melalui website serta toko dapat mencatat inventaris seperti bahan baku toko."
								/>
								<CardProduct
									img="Images/pro5.jpg"
									title="BUBOO Book Store"
									teks="BuBoo Store Book merupakan aplikasi toko buku online dimana konsumen dapat melihat berbagai daftar buku yang dijual dan dapat melakukan pembelian didalam website.
"
								/>
								<CardProduct
									img="Images/pro5a.jpg"
									title="Toko Sayuran Online"
									teks="Toko Sayuran Online merupakan aplikasi toko sayuran dimana konsumen dapat melihat berbagai sayuran yang dijual dan dapat melakukan pembelian didalam website secara online."
								/>
								<CardProduct
									img="Images/pro6.jpg"
									title="Game Petualangan Si Pele"
									teks="Game Petualangan Si Pele merupakan sebuah game yang memiliki alur dimana seorang anak bernama pele akan mengalami suatu kejadian mistis dalam perjalanan menuju rumah."
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* product */}

			{/* education */}
			<div
				id="education"
				className="flex items-center min-h-screen px-2 py-20 education md:py-24 md:px-3"
			>
				<div className="w-full">
					<h2
						data-aos="fade-up"
						className="head max-[320px]:text-2xl text-4xl md:text-5xl font-bold text-center mb-6 text-white"
					>
						EDUCATION
					</h2>
					<div className="container flex flex-wrap h-full gap-3 m-auto wrap md:flex-nowrap">
						<div
							data-aos="fade-up"
							className="left flex flex-col  md:w-[30%]"
						>
							<h3 className="subhead max-[320px]:text-sm text-xl md:text-3xl text-white font-bold">
								Belajar adalah investasi terbaik untuk masa
								depan.
							</h3>
							<div className="flex justify-center w-11/12 m-auto mt-4 img md:w-auto md:mt-24">
								<img
									src="Images/education.png"
									alt="Reclas Tech"
								/>
							</div>
						</div>
						<div className="center hidden md:block w-0.5 rounded-full bg-white"></div>
						<div
							data-aos="fade-up"
							className="right w-full md:w-[70%] "
						>
							<div className="flex flex-col h-full gap-3 overflow-y-auto wrap-card aspect-video">
								<CouPro />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* education */}

			{/* roadmap */}
			<div className="flex items-center min-h-screen px-2 py-20 roadmap md:py-24 md:px-3 bg-srWhite">
				<div className="w-full">
					<h2
						data-aos="fade-up"
						className="head max-[320px]:text-2xl text-4xl md:text-5xl font-bold text-center "
					>
						ROADMAP
					</h2>
					<h3
						data-aos="fade-up"
						className="subhead max-[320px]:text-sm text-xl md:text-3xl text-primary text-center md:text-start mx-auto my-6 container font-bold"
					>
						Peta Jalan Pembuatan Proyek
					</h3>
					<div data-aos="fade-up" className="container m-auto wrap ">
						<RoadM />
					</div>
				</div>
			</div>
			{/* roadmap */}

			{/* Testi */}
			<div
				id="testi"
				className="flex items-center min-h-screen px-2 py-20 testi md:py-24 md:px-3"
			>
				<div className="w-full">
					<h2
						data-aos="fade-up"
						className="head max-[320px]:text-2xl text-4xl md:text-5xl font-bold text-center text-white"
					>
						Testimoni
					</h2>
					<h3
						data-aos="fade-up"
						className="subhead max-[320px]:text-sm text-xl md:text-3xl text-white m-auto container font-bold my-6"
					>
						Apa Yang Mereka Rasakan Dengan Reclas Tech
					</h3>
					<div data-aos="fade-up" className="container m-auto wrap">
						<CardTesti />
					</div>
				</div>
			</div>
			{/* Testi */}

			{/* role */}
			<div className="flex items-center min-h-screen px-2 py-20 role md:py-24 md:px-3 bg-srWhite">
				<div className="w-full">
					<h2
						data-aos="fade-up"
						className="head max-[320px]:text-2xl text-4xl md:text-5xl  font-bold text-center mb-6"
					>
						TEAM GRUP
					</h2>
					<div
						data-aos="fade-up"
						className="container flex justify-center w-full m-auto wrap"
					>
						<TabsRole />
					</div>
				</div>
			</div>
			{/* role */}

			{/* FOOTER */}
			<div id="contact" className="px-2 py-20 footer md:py-24 md:px-3">
				<div className="wrap max-md:flex-col text-white container m-auto flex min-h-[16rem] md:justify-around gap-y-10">
					<div
						data-aos="fade-up"
						className="flex flex-wrap gap-3 left md:flex-nowrap"
					>
						<div className="flex justify-center w-full logo md:w-40">
							<img
								className="md:h-44 h-36"
								src="Images/footer.png"
								alt="Ayo, mulai perjalanan inovasi Anda dengan kami!, Reclas Tech adalah perusahaan pengembangan perangkat lunak yang berlokasi di Bandar Lampung, Lampung."
							/>
						</div>
						<div className="flex flex-col justify-between gap-3 mx-auto alamat w-60">
							<h5 className="add max-[320px]:text-base text-xl md:text-2xl text-white">
								Bandar Lampung, Lampung
							</h5>
							<div className="wrap max-[320px]:text-sm text-base md:text-lg underline">
								<div className="no">083838485199</div>
								<div className="mt-2 email md:mt-4">
									reclastech@gmail.com
								</div>
							</div>
						</div>
					</div>
					<div
						data-aos="fade-up"
						className="flex justify-around w-full gap-1 right md:w-1/2"
					>
						<div className="flex flex-col justify-between max-md:m-auto">
							<div className="flex justify-between gap-3 nav max-md:gap-6">
								<div className="flex flex-col gap-3 text-sm navi">
									<a className="font-bold" href="#Home">
										Beranda
									</a>
									<a href="#about">Tentang</a>
									<a href="#service">Layanan</a>
									<a href="#testi">Testimoni</a>
									<a href="#contact">Kontak</a>
								</div>
								<div className="flex flex-col gap-3 text-sm sosmed">
									<a
										target="_blank"
										href="https://www.instagram.com/reclas_tech/"
										className="flex items-center gap-1 wrap"
									>
										<div className="icon">
											<img
												className="w-[15px]"
												src="Images/ig.svg"
												alt=""
											/>
										</div>
										<div className="hover:font-semibold">
											Instagram
										</div>
									</a>
									<a
										target="_blank"
										href="https://github.com/reclas-tech"
										className="flex items-center gap-1 wrap"
									>
										<div className="icon">
											<img
												className="w-[15px]"
												src="Images/git.svg"
												alt=""
											/>
										</div>
										<div className="hover:font-semibold">
											Github
										</div>
									</a>
									<a
										target="_blank"
										href="mailto:reclastech@gmail.com"
										className="flex items-center gap-1 wrap"
									>
										<div className="icon">
											<img
												className="w-[15px]"
												src="Images/email.svg"
												alt=""
											/>
										</div>
										<div className="hover:font-semibold">
											Email
										</div>
									</a>
									<a
										target="_blank"
										href="https://wa.me/6283838485199"
										className="flex items-center gap-1 wrap"
									>
										<div className="icon">
											<img
												className="w-[15px]"
												src="Images/wa.svg"
												alt=""
											/>
										</div>
										<div className="hover:font-semibold">
											WhatsApp
										</div>
									</a>
								</div>
							</div>
							<div className="wm text-[14px] text-center md:text-start hidden md:block">
								© 2024 Reclas Tech. All rights reserved.
							</div>
						</div>
						<a
							data-aos="fade-up"
							href="#Home"
							className="arow flex justify-center items-center bg-white rounded-full w-[52px] h-[52px] hover:bg-gray-200 transition-all duration-300"
						>
							<Arrow />
						</a>
					</div>
					<div className="wm text-[14px] text-center md:text-start  w-full md:hidden">
						© 2024 Reclas Tech. All rights reserved.
					</div>
				</div>
			</div>
			{/* FOOTER */}
		</div>
	);
};

export default Home;
