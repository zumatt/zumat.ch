import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ProjectList from '../components/ProjectList';
import data from '../projects.json';
import { CreateHead } from '../components/HeadHelper.js';
import '../index.css';


function Homepage() {
    return (
        <div>
            <CreateHead
                title="Homepage | Zumat Interaction Designer"
                description="Zumat also known as Matteo Subet is an Interaction Designer based in Switerland. His research interests are human-computer interaction with a focus on new technologies and physical computing, and AI-driven systems in the educational practices."
                image="/zumat_interaction-designer_matteo-subet.png"
                url="https://zumat.ch/"
                type="website"
            />
            <Header />
            <Footer />
            <ProjectList data={data}/>
        </div>
    );
}

export default Homepage;