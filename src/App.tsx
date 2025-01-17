import { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function App() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Full-width navbar with increased height and overlay effect */}
      <nav className="w-full bg-[#13285B] h-24 relative z-10 shadow-xl">
        <div className="max-w-7xl mx-auto w-full px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <svg width="255" height="57" viewBox="0 0 255 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
              <path d="M39.7425 17.0679V0.164062H0V39.9002H16.9102V56.836H56.6464V17.0998L39.7425 17.0679ZM6.09459 33.8376V6.24587H33.6607V29.6851L27.1317 23.1561L21.0436 17.0679L16.9166 12.941V33.8376H6.09459ZM50.5646 50.7478H22.9984V26.9061L29.9043 33.8376L35.9925 39.9258L39.7489 43.6822V39.5552V23.1561H50.571L50.5646 50.7478Z" fill="#51B6BE"/>
              <path d="M95.2903 13.1453H102.083L113.351 43.278H106.466L104.194 36.5773H92.9257L90.5611 43.2895H83.8489L95.2903 13.1453ZM94.6543 31.6458H102.465L98.6666 20.5859H98.5799L94.6543 31.6458Z" fill="white"/>
              <path d="M115.549 13.1453H122.174V37.7336H136.859V43.3069H115.549V13.1453Z" fill="white"/>
              <path d="M146.357 18.7128H137.321V13.1453H162.013V18.7128H152.983V43.278H146.357V18.7128Z" fill="white"/>
              <path d="M165.893 13.1453H188.44V18.7128H172.518V25.1706H187.122V30.3218H172.518V37.7336H188.77V43.3069H165.893V13.1453Z" fill="white"/>
              <path d="M192.823 13.1453H209.069C214.474 13.1453 217.891 16.8974 217.891 21.4589C217.891 25.0029 216.457 27.6624 213.121 29.0094V29.0962C216.37 29.9403 217.301 33.1027 217.509 36.1437C217.637 38.04 217.596 41.5898 218.776 43.278H212.15C211.346 41.3759 211.433 38.4621 211.098 36.057C210.629 32.8946 209.41 31.5012 206.074 31.5012H199.448V43.278H192.823V13.1453ZM199.448 26.7489H206.704C209.658 26.7489 211.265 25.4828 211.265 22.4475C211.265 19.5568 209.658 18.2676 206.704 18.2676H199.448V26.7489Z" fill="white"/>
              <path d="M253.215 18.6548H241.017L239.86 25.3613L239.941 25.448C240.687 24.6781 241.588 24.0765 242.586 23.6836C243.583 23.2907 244.652 23.1156 245.723 23.1701C251.55 23.1701 254.84 27.6854 254.84 33.2124C254.837 34.6379 254.548 36.0483 253.99 37.3603C253.433 38.6722 252.618 39.8591 251.594 40.8508C250.57 41.8425 249.357 42.6188 248.028 43.134C246.699 43.6492 245.28 43.8927 243.855 43.8502C238.12 43.8502 232.969 40.682 232.871 34.4786H238.86C238.946 35.6987 239.497 36.8392 240.4 37.6645C241.303 38.4897 242.488 38.9367 243.711 38.9129C246.838 38.9129 248.821 36.1667 248.821 33.2124C248.821 30.1309 246.919 27.6854 243.711 27.6854C241.56 27.6854 240.381 28.4428 239.195 30.05H233.796L236.686 13.7175H253.186L253.215 18.6548Z" fill="white"/>
            </svg>
            <nav className="hidden md:flex gap-6">
              <a href="#" className="text-white hover:text-white/80 font-bold">Contacto</a>
            </nav>
          </div>
          <div className="flex items-center">
            <Button className="bg-[#51B6BE] text-white hover:bg-[#51B6BE]/90 rounded-full px-6 font-bold">
              Subscribe <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Content with negative margin for overlay effect */}
      <main className="flex-1 w-full relative -mt-6">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16 bg-white rounded-t-xl shadow-lg">
          <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 md:gap-16">
            {/* Left column with sticky positioning on desktop */}
            <div className="md:sticky md:top-8 space-y-4 self-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#13285b]">
                <a href="https://newsongoing.com/methanol-ammonia-hybrid-engine-revolution/3747/">
                El motor mezclado metanol-amonia por MAN Energy Solutions ha causado un revuelo en la industria marina.
                </a>
              </h2>
              <p className="text-gray-600">Enero 17, 2025 • Boletín #103</p>
            </div>

            {/* Right column with sections */}
            <div className="space-y-12">
              <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[#13285b]">
                  Empresas y proyectos 
                  <span role="img" aria-label="empresas">🏢</span>
                </h3>
                <div className="space-y-8">
                  {[
                    {
                      id: 'empresas1',
                      text: "El hidrógeno es inflamable, inestable y de baja densidad, por lo que es difícil de manejar y costoso de transportar como gas o líquido. Mientras países como Estados Unidos están gastando miles de millones para refinar los métodos de transporte tradicionales, Australia ha encontrado una solución innovadora y rentable.",
                      link: 'https://www.ecoticias.com/en/hydrogen-powder-americas-great-failure/10578/'
                    },
                    {
                      id: 'empresas2',
                      text: "El 18 y 19 de febrero, se llevará a cabo el evento virtual ‘Storage, Renewable and Electric Vehicles Integration Forum’ Participarán empresas como Yingli, Chemik, RetailSonar, Helonext, Veltium y Black&Veatch. Inscripción gratuita.",
                      link: 'https://energiaestrategica.es/renovables-movilidad-electrica/'
                    },
                    {
                      id: 'empresas3',
                      text: "El motor eléctrico Dark Matter es considerado el motor de categoría automotriz más potente del mundo, utilizando una tecnología única de seis fases. Con un impresionante motor de 800 caballos de fuerza y 922 lb-pie de par, mientras pesa sólo 40 kg, la Materia Oscura es aclamada como el motor eléctrico más poderoso del mundo. La Materia Oscura reemplaza al motor anterior utilizado en la Gemera, llamado el Quark.",
                      link: 'https://www.ecoticias.com/en/box-dark-matter-engine-changes-evs/10510/'
                    },
                    {
                      id: 'empresas4',
                      text: "La antimateria es naturalmente lo contrario o la “imagen de espejo” de la materia normal. Todo tipo de materia tiene la misma cantidad de antimateria justo una carga opuesta de la partícula de la materia. La materia y la antimateria se encuentran de nuevo en fines catastróficos.",
                      link: 'https://newsongoing.com/200-quintillion-per-gram-huge-explosion/3743/'
                    },
                    {
                      id: 'empresas5',
                      text: "España ha avanzado mucho en generación renovable, contando en enero de 2025 con casi 131.000 MW de capacidad instalada. Schneider Electric ayuda a las empresas de gestión de energía a adaptar su camino.",
                      link: 'https://www.interempresas.net/Energia/Articulos/583984-El-futuro-energetico-flexibilidad-tecnologias-y-mercados-en-2025.html'
                    }
                  ].map(item => (
                    <a
                      key={item.id}
                      href={item.link}
                      className={`block text-justify text-[#13285b] hover:text-[#13285b] transition-opacity duration-300 ${
                        hoveredItem && hoveredItem !== item.id ? 'opacity-40' : 'opacity-100'
                      }`}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <p className="text-[#13285b]">{item.text}</p>
                    </a>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[#13285b]">
                Mercado aspectos económicos y de precios de energía
                  <span role="img" aria-label="mercado">📈</span>
                </h3>
                <div className="space-y-8">
                  {[
                    {
                      id: 'mercado1',
                      text: "El precio de Bitcoin ha experimentado una volatilidad significativa, moviéndose dentro de un canal paralelo descendente desde su máximo histórico de 108.364 dólares el 17 de diciembre de 2024. El 7 de enero de 2025, Bitcoin alcanzó un máximo más bajo, reforzando la línea de resistencia del canal, y apareció un candelabro bajista. El precio continuó bajando, alcanzando un mínimo de 89.614 dólares el 13 de enero de 2025. Sin embargo, Bitcoin recuperó rápidamente su posición el mismo día.",
                      link: 'https://www.ecoticias.com/en/unexpected-rebound-in-bitcoin/10550/'
                    },
                    {
                      id: 'mercado2',
                      text: "La comercializadora E.MILUZ fue inhabilitada en 2025 por incumplimientos financieros, afectando a sus clientes, que fueron transferidos a empresas de referencia. Durante 2024 se registraron 43 nuevas altas en el mercado eléctrico.",
                      link: 'https://energiaestrategica.es/mercado-electrico-comercializadora/'
                    },
                    {
                      id: 'mercado3',
                      text: "Italia impulsa la industria con ‘Energy Release’: energía renovable a 65 €/MWh. Mary Polovtseva, Analista de Políticas Renovables, analiza el impacto. El Energy Release impactará de manera significativa el mercado italiano de GOs.",
                      link: 'https://energiaestrategica.es/energy-release-gse/'
                    },
                    {
                      id: 'mercado4',
                      text: "Los edificios representan el 40% del consumo de energía final y el 36% de las emisiones de CO2 en la Unión Europea. En España, la mayoría del parque inmobiliario es antiguo y necesita reformas urgentes. Integrar herramientas como los Sistemas de Gestión Energética de Edificios (BEMS) es fundamental.",
                      link: 'https://www.interempresas.net/Energia/Articulos/583112-Claves-de-la-gestion-de-las-instalaciones-de-edificios.html'
                    }
                  ].map(item => (
                    <a
                      key={item.id}
                      href={item.link}
                      className={`block text-justify text-[#13285b] hover:text-[#13285b] transition-opacity duration-300 ${
                        hoveredItem && hoveredItem !== item.id ? 'opacity-40' : 'opacity-100'
                      }`}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <p className="text-[#13285b]">{item.text}</p>
                    </a>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[#13285b]">
                Financiaciones y M&A
                  <span role="img" aria-label="financiaciones">💰</span>
                </h3>
                <div className="space-y-8">
                  {[
                    {
                      id: 'financiaciones1',
                      text: "Bill Gates apuesta por la perforación geotérmica profunda para liberar energía ilimitada y sin emisiones de carbono, apoyando a Fervo Energy, que busca generar 2.000 MW de energía geotérmica en Utah para 2030.",
                      link: 'https://www.ecoticias.com/energias-renovables/bill-gates-fervo-geotermia'
                    }
                  ].map(item => (
                    <a
                      key={item.id}
                      href={item.link}
                      className={`block text-justify text-[#13285b] hover:text-[#13285b] transition-opacity duration-300 ${
                        hoveredItem && hoveredItem !== item.id ? 'opacity-40' : 'opacity-100'
                      }`}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <p className="text-[#13285b]">{item.text}</p>
                    </a>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[#13285b]">
                Regulación
                  <span role="img" aria-label="regulación">⚖️</span>
                </h3>
                <div className="space-y-8">
                  {[
                    {
                      id: 'regulación1',
                      text: "El motor puede reducir las emisiones de CO2 en aproximadamente un 50% que cuando utiliza combustibles convencionales. El motor también permite la variabilidad de los dos combustibles de una manera que depende de los requisitos fluctuantes del mercado.",
                      link: 'https://newsongoing.com/methanol-ammonia-hybrid-engine-revolution/3747/'
                    }
                  ].map(item => (
                    <a
                      key={item.id}
                      href={item.link}
                      className={`block text-justify text-[#13285b] hover:text-[#13285b] transition-opacity duration-300 ${
                        hoveredItem && hoveredItem !== item.id ? 'opacity-40' : 'opacity-100'
                      }`}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <p className="text-[#13285b]">{item.text}</p>
                    </a>
                  ))}
                </div>
              </section>                        
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#13285B] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side with logo and copyright */}
          <div className="space-y-4">
            <svg width="255" height="57" viewBox="0 0 255 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
              <path d="M39.7425 17.0679V0.164062H0V39.9002H16.9102V56.836H56.6464V17.0998L39.7425 17.0679ZM6.09459 33.8376V6.24587H33.6607V29.6851L27.1317 23.1561L21.0436 17.0679L16.9166 12.941V33.8376H6.09459ZM50.5646 50.7478H22.9984V26.9061L29.9043 33.8376L35.9925 39.9258L39.7489 43.6822V39.5552V23.1561H50.571L50.5646 50.7478Z" fill="#51B6BE"/>
              <path d="M95.2903 13.1453H102.083L113.351 43.278H106.466L104.194 36.5773H92.9257L90.5611 43.2895H83.8489L95.2903 13.1453ZM94.6543 31.6458H102.465L98.6666 20.5859H98.5799L94.6543 31.6458Z" fill="white"/>
              <path d="M115.549 13.1453H122.174V37.7336H136.859V43.3069H115.549V13.1453Z" fill="white"/>
              <path d="M146.357 18.7128H137.321V13.1453H162.013V18.7128H152.983V43.278H146.357V18.7128Z" fill="white"/>
              <path d="M165.893 13.1453H188.44V18.7128H172.518V25.1706H187.122V30.3218H172.518V37.7336H188.77V43.3069H165.893V13.1453Z" fill="white"/>
              <path d="M192.823 13.1453H209.069C214.474 13.1453 217.891 16.8974 217.891 21.4589C217.891 25.0029 216.457 27.6624 213.121 29.0094V29.0962C216.37 29.9403 217.301 33.1027 217.509 36.1437C217.637 38.04 217.596 41.5898 218.776 43.278H212.15C211.346 41.3759 211.433 38.4621 211.098 36.057C210.629 32.8946 209.41 31.5012 206.074 31.5012H199.448V43.278H192.823V13.1453ZM199.448 26.7489H206.704C209.658 26.7489 211.265 25.4828 211.265 22.4475C211.265 19.5568 209.658 18.2676 206.704 18.2676H199.448V26.7489Z" fill="white"/>
              <path d="M253.215 18.6548H241.017L239.86 25.3613L239.941 25.448C240.687 24.6781 241.588 24.0765 242.586 23.6836C243.583 23.2907 244.652 23.1156 245.723 23.1701C251.55 23.1701 254.84 27.6854 254.84 33.2124C254.837 34.6379 254.548 36.0483 253.99 37.3603C253.433 38.6722 252.618 39.8591 251.594 40.8508C250.57 41.8425 249.357 42.6188 248.028 43.134C246.699 43.6492 245.28 43.8927 243.855 43.8502C238.12 43.8502 232.969 40.682 232.871 34.4786H238.86C238.946 35.6987 239.497 36.8392 240.4 37.6645C241.303 38.4897 242.488 38.9367 243.711 38.9129C246.838 38.9129 248.821 36.1667 248.821 33.2124C248.821 30.1309 246.919 27.6854 243.711 27.6854C241.56 27.6854 240.381 28.4428 239.195 30.05H233.796L236.686 13.7175H253.186L253.215 18.6548Z" fill="white"/>
            </svg>
            <div className="text-sm">
              © 2025 Todos los derechos reservados |{" "}
              <a href="https://alter-5.com/es/legal" className="hover:text-[#51B6BE]">
                Términos y Condiciones
              </a>{" "}
              |{" "}
              <a href="https://alter-5.com/es/privacy" className="hover:text-[#51B6BE]">
                Política de Privacidad
              </a>
            </div>
          </div>
          
          {/* Right side with logos */}
          <div className="flex items-center gap-8">
            {/* EIF Logo */}
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EIF-jwNPnOARDVon9ydYy69pZPeGhou8jD.svg" 
              alt="European Investment Fund" 
              className="h-12 w-auto"
            />
            {/* EU Logo */}
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EU-ae6ZhzBWLohCQil2gQukRXYHJcbUro.svg" 
              alt="European Union" 
              className="h-12 w-auto"
            />
            {/* UNEF Logo */}
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unef-Z3dNszZjEvbgKyfa74Woz0e7bTsSAk.png" 
              alt="UNEF" 
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}