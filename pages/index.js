import { CSSReset } from "../src/components/CSS.resert";
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Section from '../src/components/Section';


export default function HomePage() {

    return (
        <>
            <CSSReset />
            <Header />
            <Section />
            <Footer />
        </>
    )
}