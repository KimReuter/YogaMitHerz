// /app/impressum/page.tsx
export default function ImpressumPage() {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16 text-iris-charcoal">
        <h1 className="text-3xl font-bold mb-8 text-iris-terracotta">Impressum</h1>
  
        <section className="space-y-6 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Iris Wallenaar <br />
              Zum Burgteich 68 <br />
              08527 Plauen <br />
              Deutschland
            </p>
          </div>
  
          <div>
            <h2 className="text-lg font-semibold mb-2">Kontakt</h2>
            <p>
              Telefon: +49&nbsp;123&nbsp;456789 <br />
              E-Mail: info@yogamitherz.de
            </p>
          </div>
  
          <div>
            <h2 className="text-lg font-semibold mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: <br />
              223/285/05898
            </p>
          </div>
  
          <div>
            <h2 className="text-lg font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Iris Wallenaar <br />
              Anschrift wie oben
            </p>
          </div>
  
          <div>
            <h2 className="text-lg font-semibold mb-2">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-iris-terracotta underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>. <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>
  
          <div>
            <h2 className="text-lg font-semibold mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </section>
      </main>
    );
  }