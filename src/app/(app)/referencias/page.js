import Card from "@/app/components/card/card"
import Link from "next/link"

export default function Referencias() {
  return (
    <div style={{width: "95%"}}>
      <Card>
        <p style={{margin: "10px", width: "100%"}}>
          APARECIDA, S.; ORTIGOZA, G. Revista Cadernos de Debate, uma publicação do Núcleo de Estudos e Pesquisas em Alimentação da UNICAMP, páginas 21-45. O fast food e a mundialização do gosto. Disponível em: <Link style={{textDecoration: "underline", color: "blue", cursor: "pointer", wordBreak: "break-word"}} target="_blank" href="https://uerjsa.wordpress.com/wp-content/uploads/2013/04/o_fast_food_e_a_mundializacao_do_gosto.pdf">https://uerjsa.wordpress.com/wp-content/uploads/2013/04/o_fast_food_e_a_mundializacao_do_gosto.pdf.</Link> Acesso em: 15 mar. 2025.      
        </p>
        <p style={{margin: "10px", width: "100%"}}>
          HELFST, J. Restaurantes de comida rápida, os fast-foods, em praças de alimentação de shopping centers: transformações no comer. Disponível em: <Link style={{textDecoration: "underline", color: "blue", cursor: "pointer", wordBreak: "break-word"}} target="_blank" href="https://periodicos.fgv.br/reh/article/view/2216">https://periodicos.fgv.br/reh/article/view/2216.</Link> Acesso em: 28 mar. 2025.
        </p>
        <p style={{margin: "10px", width: "100%"}}>
          QUEIROZ, A. F.; FINOCCHIO, C. S. Mensurando o Valor Percebido em Serviços de Alimentação: Uma Pesquisa com Consumidores de Fast Food. Revista Brasileira de Marketing, v. 17, n. 4, p. 532-544, 10 set. 2018. Disponível em: <Link style={{textDecoration: "underline", color: "blue", cursor: "pointer", wordBreak: "break-word"}} target="_blank" href="https://periodicos.uninove.br/remark/article/view/12454">https://periodicos.uninove.br/remark/article/view/12454.</Link> Acesso em: 28 mar. 2025.
        </p>
        <p style={{margin: "10px", width: "100%"}}>
          SILVA, P. et al. Administração da Produção nas Organizações: Uma Breve Revisão Teórica. Disponível em: <Link style={{textDecoration: "underline", color: "blue", cursor: "pointer", wordBreak: "break-word"}} target="_blank" href="https://files.cercomp.ufg.br/weby/up/803/o/Parte3.pdf">https://files.cercomp.ufg.br/weby/up/803/o/Parte3.pdf.</Link> Acesso em: 29 mar. 2025.
        </p>
      </Card>
    </div>
  )
}