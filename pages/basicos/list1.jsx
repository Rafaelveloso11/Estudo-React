export default function lista1(){
    function gerarLista(final = 10){
        const lista = []
       for(let i = 1 ; i <= final ; i ++){
           lista.push(<span>{i},</span>)
       }
        return  lista
    }
    return (
        <div>{gerarLista(30)}</div>
    )
}
