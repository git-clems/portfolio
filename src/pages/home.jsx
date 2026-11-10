import "./css/home.scss";
import { Project } from "../components/project.jsx";
import { Paper } from "../components/paper.jsx";
import MyButton from "../components/buttton.jsx";
import { useEffect, useState } from "react";
import { SendHorizontal } from "lucide-react";
import Loading from "../components/loadingPage.jsx";

const Home = () => {

  const [user, setUser] = useState()
  const [projects, setProjects] = useState()
  const [papers, setPapers] = useState()
  const [specialities, setSpecialities] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true)
      try {
        const [userFetch, projectFetch, paperFetch, specialityFetch] = await Promise.all([
          fetch('/data/user.json'),
          fetch('/data/project.json'),
          fetch('/data/paper.json'),
          fetch('/data/speciality.json')
        ])

        const userData = await userFetch.json()
        setUser(userData)
        const specialitiesData = await specialityFetch.json()
        setSpecialities(specialitiesData)
        const projectsData = await projectFetch.json()
        setProjects(projectsData)
        const papersData = await paperFetch.json()
        setPapers(papersData)
      } catch (error) {
        console.log(error);

        return
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <Loading />


  return (
    <div className="page home-page">
      <header>
        <div className="description shadow-[0_0_5px_var(--primary-color-reverse)] bg-[var(--app-bar-bg)] ">
          <span className="user-name text-[var(--text-color)] font-bold" >{user?.lname} {user?.fname}</span>
          <p className="text-[var(--text-2)] rounded">{user?.description}</p>
          <div className="speciality-content mt-3 flex flex-wrap">
            {specialities?.map(speciality => (<span className="bg-[var(--primary-color-reverse)] border-blue-100 border-3 m-1 text-nowrap p-1 font-bold rounded text-[var(--box-color)]"> {speciality}</span>))}
          </div>
        </div>
        <div className="w-[300px] m-3">
          <img src={user?.image} alt="" className="object-cover rounded-xl" />
        </div>
      </header>

      <section className="flex flex-wrap">

        {projects?.length > 0 &&
          <div className="flex items-center flex-col mt-5">
            <span className="border-l-3 border-red-500 text-4xl mb-2 font-bold">Last projects</span>
            <Project projectID={projects[projects?.length - 1]?.id}></Project>
            <MyButton goTo={"/projects"} name={"See more projects"} />
          </div>
        }

        {
          papers?.length > 0 &&
          < div className="flex items-center flex-col ml-4 mt-5">
            <span className="border-l-3 border-red-500 text-4xl mb-2 font-bold">Last papers</span>
            <Paper paperID={papers[papers?.length - 1]?.id}></Paper>
            <MyButton name={"See more papers"} goTo={"/papiers"} />
          </div>
        }
      </section >

      <section className="mt-5 flex flex-wrap justify-center items-center bg-[var(--app-bar-bg)] pt-5 pb-5">
        <div className="mr-5 text-3xl text-center font-bold text-[var(--text-color)]">Would you like to take on some challenges together ? </div>
        <MyButton goTo={'/contact'} name={"Contact me"}> <SendHorizontal /></MyButton>
      </section>
    </div >
  );
};

export default Home;
