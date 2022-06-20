import Head from "next/head";
import {
  CheckCircleIcon,
  FlagIcon,
  GlobeIcon,
  IdentificationIcon,
} from "@heroicons/react/outline";
import AboutWelcome from "components/about/AboutWelcome";
import AboutPoint from "components/about/AboutPoint";

const points = [
  {
    title: "SPECJALIZACJA",
    description:
      "Wieloletnie doświadczenie w sprzedaży ogrodzeń budowlanych i barier przenośnych zaowocowało rozwinięciem kontaktów z najlepszymi europejskimi producentami i atrakcyjnymi warunkami handlowymi. Posiadamy największą ofertę przęseł tymczasowych w Polsce. Kilkadziesiąt rodzajów przęseł ażurowych i przęseł pełnych z blachy trapezowej.",
    Icon: GlobeIcon,
    img: "specjalizacja.png",
  },
  {
    title: "ZASIĘG",
    description:
      "Nasze produkty są sprzedawane zarówno w Polsce, jak i całej Europie. Samodzielnie organizujemy hurtowe dostawy zamówionych produktów poprzez transport kołowy TIR czy załadunek kontenerów do transportu morskiego.",
    Icon: FlagIcon,
    img: "zasieg.png",
    left: true,
  },
  {
    title: "JAKOŚĆ",
    description:
      "Oferowane przez nas produkty spełniają najwyższe normy jakościowe. Świadczą o tym liczne certyfikaty oraz gwarancje, które posiadamy. Ponadto, stale obserwujemy pojawiające się na rynku nowości, które wprowadzamy do oferty po wykonaniu serii wewnętrznych testów.",
    Icon: CheckCircleIcon,
    img: "jakosc.png",
  },
  {
    title: "KOMPLEKSOWOŚĆ",
    description:
      "Każde skierowane do nas zapytanie traktujemy indywidualnie. Staramy się znaleźć odpowiednie rozwiązanie, niezależnie od stopnia jego złożoności. Obok sprzedaży, świadczymy również usługi montażu, wynajmu, dostawy oraz brandingu naszych produktów. Doradzamy, opracowujemy plany zabezpieczeń inwestycji budowlanych i dobieramy do nich optymalne rozwiązania produktowe.",
    Icon: IdentificationIcon,
    img: "kompleksowosc.png",
    left: true,
  },
];

function AboutUsPage() {
  return (
    <div className="container">
      <Head>
        <title>Cosmac - O Nas</title>
      </Head>
      <AboutWelcome />
      <div className="flex flex-col gap-y-8 py-8">
        {points.map((point) => (
          <AboutPoint key={point.title} {...point} />
        ))}
      </div>
    </div>
  );
}

export default AboutUsPage;
