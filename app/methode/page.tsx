export const metadata = {
  title: "La méthode",
};

export default function MethodePage() {
  return (
    <article>
      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
          <p className="meta text-gris-meta">La méthode</p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-encre md:text-6xl">
            Comprendre la Neuromorphose<span className="text-gris-meta">®</span>
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-gris-texte md:text-2xl">
            Une méthode d&apos;accompagnement qui encode les états
            intérieurs en formes géométriques, mesure les ressentis sur
            des jauges objectives et structure le futur par la
            futurisation. Trois ruptures par rapport aux approches
            classiques de l&apos;accompagnement.
          </p>
        </div>
      </section>

      <section className="border-b border-gris-trait">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <div className="prose-livre">
            <h2>Origines</h2>
            <p>
              La Neuromorphose® naît du constat qu&apos;une part importante
              des outils d&apos;accompagnement repose sur le langage — or
              le langage est lent, ambigu, codé. Les états intérieurs sont
              traités par le cerveau bien avant d&apos;être verbalisés, et
              cette traduction en mots fait perdre une grande part de
              l&apos;information originelle. Le sujet ressent quelque chose
              de complexe, doit le mettre en mots, et son interlocuteur
              doit ensuite décoder ces mots — chaîne de pertes successives.
            </p>
            <p>
              François Le Moing propose une autre voie : court-circuiter
              le langage par <strong>l&apos;encodage géométrique</strong>.
              Un état intérieur peut être traduit directement en forme —
              un nœud d&apos;angoisse devient une pyramide instable, une
              intuition claire devient une sphère lumineuse, une décision
              difficile devient un croisement de chemins. La forme est
              traitée par les aires visuelles du cerveau, plus rapides et
              plus exhaustives que les aires du langage. La forme dit ce
              que les mots peinent à dire.
            </p>

            <h2>Les trois fondements</h2>
            <p>
              <strong>Premier fondement : la visualisation géométrique.</strong>{" "}
              Toute séance de Neuromorphose® commence par la traduction
              d&apos;un état intérieur en forme. Le sujet ferme les yeux,
              accueille ce qu&apos;il ressent, et laisse émerger la forme.
              Pas d&apos;interprétation. Pas de symbolisme. La forme est
              ce qu&apos;elle est — un encodage direct.
            </p>
            <p>
              <strong>Deuxième fondement : les ressentis comme boussole.</strong>{" "}
              Avant la séance, le sujet positionne ses ressentis sur des
              jauges multi-critères : calme, énergie, confiance, élan,
              ancrage, présence, légèreté, clarté. Après la séance, il
              positionne à nouveau ces jauges. L&apos;écart entre les deux
              positions mesure objectivement le mouvement intérieur
              produit par la séance. C&apos;est l&apos;une des premières
              tentatives de mesure objective dans le champ de
              l&apos;accompagnement.
            </p>
            <p>
              <strong>Troisième fondement : la futurisation.</strong>{" "}
              La visualisation classique projette dans un futur vague et
              optimiste. La futurisation est plus précise : le sujet
              encode l&apos;état souhaité en forme géométrique
              <em> spécifique</em>, et travaille à <em>ancrer cette
              forme dans son présent</em>. Pas un rêve — une structure.
              La forme cible devient le repère vers lequel se réorienter
              quand le quotidien tire ailleurs.
            </p>

            <h2>Ce qui distingue la Neuromorphose® d&apos;autres approches</h2>
            <p>
              <strong>Vs. la sophrologie.</strong> La sophrologie utilise
              la respiration et la relaxation comme outils d&apos;accès aux
              états. La Neuromorphose® utilise la géométrie. Les deux
              approches sont compatibles et de nombreux sophrologues
              intègrent la Neuromorphose® comme couche supplémentaire.
            </p>
            <p>
              <strong>Vs. l&apos;hypnose.</strong> L&apos;hypnose induit un
              état modifié de conscience pour accéder à des ressources
              inconscientes. La Neuromorphose® travaille en pleine
              conscience, sans induction. Le sujet reste éveillé,
              participant actif et conscient de ses formes. Aucune perte
              de souveraineté, aucune dépendance au praticien.
            </p>
            <p>
              <strong>Vs. les thérapies cognitivo-comportementales (TCC).</strong>{" "}
              Les TCC travaillent sur les pensées et les comportements
              observables. La Neuromorphose® travaille sur les états
              intérieurs encodés en formes. Complémentaire : un patient
              en TCC peut bénéficier de séances de Neuromorphose® en
              parallèle, sans interférence.
            </p>

            <h2>Cadre éthique strict</h2>
            <p>
              La Neuromorphose® n&apos;est ni un soin médical, ni une
              thérapie réglementée. <strong>Elle ne soigne pas, ne
              diagnostique pas, ne prescrit pas.</strong> Cette triple
              négation est inscrite dans la charte déontologique de la
              FFPN. Tout praticien certifié s&apos;y engage. Le sujet
              garde la pleine souveraineté sur ses décisions médicales,
              et la Neuromorphose® s&apos;exerce toujours en complément —
              jamais en substitution — d&apos;un suivi médical le cas
              échéant.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
