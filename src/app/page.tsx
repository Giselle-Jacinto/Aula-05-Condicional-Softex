import { Postagem } from "./components/postagem";

export default function Home() {
  return (
    <main>
      {/* <Postagem
        nome="Maria"
        lugar="Recife/PE"
        lugarURL="https://visit.recife.br/wp-content/themes/visitrecife2021/img/rua-do-bom-jesus.jpg"
      /> */}
      <Postagem
        nome="Jose"
        lugar="Maceio/AL"
        lugarURL="https://maceioalgovbr.dhost.cloud/uploads/imagens/06-12-2021-Praia-Ponta-Verde-Turismo-SEMTEL-Foto-Emile-Valoes-3.jpg"
        curtido={true}
      />
      <Postagem
        nome="Gustavo"
        lugar="Rio de Janeiro/RJ"
        lugarURL="https://a.cdn-hotels.com/gdcs/production143/d357/42fb6908-dcd5-4edb-9f8c-76208494af80.jpg"
        curtido={true}
      />
    </main>
  );
}
