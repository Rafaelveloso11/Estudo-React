export default function Filho(props){
    console.log(props.funcao)
    return(
        <div>
            <h1>Filho #Alt</h1>
            <button onClick={()=> props.funcao("Passei no enem")}>Falar com o Pai</button>
        </div>
    )
}