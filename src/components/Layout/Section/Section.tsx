import { Info } from '../../../interface/data.inteface'

interface Props {
    datos: Info;
}

const Section = ({ datos }: Props) => {

    const { frameworks, data } = datos

    return (
        <article className="section">
            <div className="section-text">
                <h3>{frameworks}</h3>
            </div>
            {
                data.map(item => (
                    <div className="section-carousel" onClick={() => window.open(item.link)}>
                        <img src={item.img} alt={item.title} />
                        <footer className="section-carousel-footer">
                            <p>{item.description}</p>
                        </footer>
                    </div>
                ))
            }
        </article>
    )
}

export default Section
