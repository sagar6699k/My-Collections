import { useQuery } from '@tanstack/react-query'

//function for getting the data
const getData = () => (
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
        res.json()
    )
)

export const GithubUsers = () => {

    const { isLoading, isError, error, data } = useQuery(['repoData'], getData)

    console.log("Users_data-->", data);
    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
        </div>
    )

}
