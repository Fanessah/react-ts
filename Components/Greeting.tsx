interface GreetingProps{
firstName:string,
lastname: string,
}
export default function Greeting ({firstName,lastName}) {
    return (
        <p> Welcome :{firstName} {lastName}.</p>
    )
}
