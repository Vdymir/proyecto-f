import './index.css'
import Header from '../../components/Layout/Header'
import Section from '../../components/Layout/Section'
import { DATA } from '../../data/data'

const Home = () => {
    return (
        <>
            <Header />
            <main className='home'>
                {
                    DATA.map((item) => (
                        <section className="home__sections" id={item.id} key={item.id}>
                            <Section datos={item.info} />
                        </section>
                    ))
                }
            </main>
        </>
    )
}

export default Home
