import { IProject } from 'interface/data.inteface'
import './index.css'



const Section = ({ url_img, title, title_color, section }: IProject) => {
    return (
        <section className="section" id={section}>
            <article className="section__article">
                <div className={`section__article-title title-color-${title_color}`}>
                    <h3>{title}</h3>
                </div>
                <div className="section__article-img">
                    <div className="section__img-container">
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Section
