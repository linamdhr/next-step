function Hello(props){
    console.log(props);
    return(
        <div>
            <h1>hellooooooo{props.name}</h1>
            <h1>how are you{props.name}</h1>

        </div>
    );
}
export default Hello;