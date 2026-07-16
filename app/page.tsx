import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureRow from "./components/FeatureRow";
import HighlightBand from "./components/HighlightBand";
import Formats from "./components/Formats";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />

        <FeatureRow
          title={
            <>
              Le monde bascule vers le Cloud. La formation, elle, est{" "}
              <span className="text-indigo">restée au tableau</span>
            </>
          }
          image="/images/img1.jpg"
          alt="Une équipe travaille ensemble sur des ordinateurs portables autour d'une table"
          imageSide="left"
          tone="mist"
        >
          <p>
            De nombreux professionnels de la diaspora et du continent veulent se
            reconvertir vers les métiers porteurs du Cloud et du DevOps. Mais ils
            se heurtent à deux extrêmes.
          </p>
          <p>
            Des bootcamps occidentaux aux tarifs exorbitants, qui dressent une
            barrière financière injuste. Et à l&apos;opposé, le gavage de QCM
            théoriques pour accumuler des badges, sans jamais écrire une ligne de
            code d&apos;infrastructure.
          </p>
        </FeatureRow>

        <FeatureRow
          title={
            <>
              Des certifications partout. De la pratique,{" "}
              <span className="text-indigo">presque nulle part</span>
            </>
          }
          image="/images/img10.jpg"
          alt="Deux personnes analysent une architecture sur papier à côté de leurs ordinateurs"
          imageSide="right"
          tone="paper"
        >
          <p>
            Le résultat de ce modèle ? Des diplômés certifiés sur le papier, mais
            totalement démunis face à un vrai problème lors de leur premier jour
            en entreprise.
          </p>
          <p>
            Ils n&apos;ont jamais conçu d&apos;architecture sécurisée, jamais
            assemblé des services cloud correctement, jamais automatisé une
            infrastructure de production. Nous, on inverse la logique.
          </p>
        </FeatureRow>

        <HighlightBand />

        <FeatureRow
          id="methode"
          title={
            <>
              Apprendre à réfléchir face à de{" "}
              <span className="text-indigo">vrais cas d&apos;entreprise</span>
            </>
          }
          image="/images/img7.jpg"
          alt="Une personne explique une idée avec les mains, un ordinateur portable posé sur la table"
          imageSide="left"
          tone="mist"
          bullets={[
            {
              title: "Théorie actionnable",
              text: "Chaque concept est immédiatement codé, déployé et testé. Pas de slides pour le plaisir.",
            },
            {
              title: "Mise en situation réelle",
              text: "Tu endosses un rôle de stagiaire sur des scénarios calqués sur la production.",
            },
            {
              title: "Penser comme un architecte",
              text: "Tu apprends à arbitrer, sécuriser et justifier tes choix comme un ingénieur senior.",
            },
          ]}
          cta={{ label: "Voir les formats", href: "#formats" }}
        >
          <p>
            Nous brisons le modèle scolaire. Ici, on ne mémorise pas des réponses,
            on apprend à raisonner devant un problème que personne ne t&apos;a
            mâché à l&apos;avance, exactement comme en entreprise.
          </p>
        </FeatureRow>

        <Formats />
        <Process />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
