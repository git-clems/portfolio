import { Link, useParams } from "react-router-dom"
import "./css/details-page.scss"
import { useEffect, useState } from "react";
import Loading from "../components/loadingPage";
import Page404 from '../pages/404'

const DetailsPaper = () => {

    const params = useParams()
    const [paper, setPaper] = useState({})
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const paperFetch = await fetch("/data/paper.json")
                const paperQuerry = await paperFetch.json()
                const querry = paperQuerry.find(paper => paper.id == params.id)
                
                if (querry) {
                    setPaper(querry)
                } else {
                    
                    setPaper(null)
                    return
                }
            } catch (error) {
                console.log(error);
                return
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])


    if (loading) return <Loading></Loading>
    if (!paper) return <Page404 prev={'Go back to papers'} prevLink={"/papiers"} message={"Paper not found !"}></Page404>

    return (
        <div className="page details-page">
            <div className="flex justify- flex-wrap">
                <div className="description flex-1 min-[900px]:max-w-[70vw] min-w-[300px] duration-200">
                    <div className="name font-bold">{paper?.title}</div>
                    {paper?.authors?.map(author =>
                        <span className={`${author.firstAuth && "font-bold"}`}>{author.name}<sup>{author.affiliation}</sup>; </span>
                    )}
                    <br />
                    <br />
                    <div>
                        {paper?.organization?.map((org, index) =>
                            <p className="text-center font-bold"><sup>{index + 1}</sup>{org}</p>
                        )}
                    </div>

                    <br />
                    <p className="text-justify">
                        <span className="font-bold">Abstract. </span>
                        {paper?.abstract}
                    </p>

                </div>
                <div className="m-3 flex-1">

                    <div className="text-xl text-[var(--text-2)]">
                        {paper?.journal} - {paper?.publisher}
                    </div>

                    <div className="text-sm m-1">
                        {<span className="bg-green-100 mr-2 border-3 font-bold border-green-400 rounded p-1 text-green-600"> {paper?.type} </span>}
                        <span> Published: {paper?.year}</span>
                    </div>
                    <div className="mt-3">
                        <span className="font-bold mr-2">Keywords:</span>
                        <div className="flex flex-wrap">
                            {paper?.keywords?.map(key =>
                                <span className="bg-blue-100 border-3 border-blue-400 m-1 p-1 text-sm text-nowrap rounded text-black">{key}</span>
                            )}
                        </div>
                        {
                            paper?.link &&
                        <div className="mt-3 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link preview-icon"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                            <Link target="_" to={paper?.link} className="text-blue-400">See the paper here</Link></div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DetailsPaper