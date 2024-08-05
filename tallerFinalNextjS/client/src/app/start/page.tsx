
interface Menssage {
    message: string;
}

async function getProjects() {
    const res = await fetch(`http://localhost:3000/api/info/1`)
    const projects: Menssage = await res.json()
    return projects
}

export default async function Index() {
    const projects: Menssage = await getProjects()
    return (
        <>
            <h1>{projects.message}</h1>
        </>
    )
}