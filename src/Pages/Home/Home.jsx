export default function Home() {
    const tarefas = [
        'Prestar atenção na aula',
        'Interagir na aula',
        'Praticar bastante',
        'Beber bastante, água'
    ];
    
    const comidas = [
        {
            nome: 'Lasanha',
            imagem: 'https://renata.com.br/images/receitas/141/renata-imagem-receitas-lasanha-a-bolonhesa-share.jpg',
            alt: 'Lazanha com bastante queijo em cima de um prato', 
            preco: 10.00
        },
        {
            nome: 'Tacacá',
            imagem: 'https://acozinhabrasileira.com.br/wp-content/uploads/2021/09/receita-de-tacaca.jpg',
            alt: 'Tacacá em uma tigela com camarão em cima',
            preco: 50.00
        },
        {
            nome: 'Açaí',
            imagem: 'https://snowfruit.com.br/wp-content/uploads/2021/08/Quais_s%C3%A3o_os_melhores_acompanhamentos_para_a%C3%A7ai.png',
            alt: 'Açaí com bastante variedas de acompanhamentos',
            preco: 14.00
        }
    ];
    
    return (
        <>
            <h1>Minhas tarefas</h1>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
    
            <section>
                {comidas.map((item, index) => (
                    <article key={index}>
                        <h2>{item.nome}</h2>
                        {item.imagem && <img src={item.imagem} alt={item.alt} />}
                        {item.preco && <p>{item.preco.toFixed(2)}</p>}
                    </article>
                ))}
            </section>
        </>
    );    
}

