import Header from '../Header';
import Footer from '../Footer';
import ProjectList from '../ProjectList';
import data from '../projects.json';

function Homepage() {
    return (
        <div>
            <Header />
            <Footer />
            <ProjectList data={data}/>
        </div>
    );
}

export default Homepage;