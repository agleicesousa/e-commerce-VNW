export default function Home() {
    
    const tarefas = [
        'Aprender map()',
        'Prestar atenção na aula',
        'Interagir na aula',
        'Praticar bastante',
        'Beber bastante, água'
    ]

    return (
        <>
            <main>
                <h1>Minhas terefas</h1>
                <ul>
                    {tarefas.map( (item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </main>
        </>
    )
}
