import "./SectionContent.css";

const SectionContent = ({children}) => {
    return(
        <section className="section__content">
            {children}
        </section>
    );
}

export default SectionContent;