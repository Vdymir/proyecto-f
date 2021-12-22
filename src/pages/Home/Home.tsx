import './index.css'
import Header from '../../components/Layout/Header'
import { DATA } from '../../data/data'
import { Section } from './components'


const Home = () => {
    return (
        <>
            <Header />
            <main className='home'>
                {
                    DATA.map((item, index) => (
                        <Section
                            key={index}
                            section={item.section}
                            title={item.title}
                            title_color={item.title_color}
                            url_img={item.url_img}
                        />
                    ))
                }
            </main>
        </>
    )
}

export default Home
