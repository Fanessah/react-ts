export interface Person {
    name: string,
    age: number,
    awesome: boolean
}
interface AboutMeProps{
    person:Person
}

export default function AboutMe ({person}: AboutMeProps) {
    return (
        <>
        <h2> Name:{person.name}
            </h2>
            </>
    )
}