import ImageComponent from "./ImageComponent";
import styles from "./ProjectItem.module.css";

function ProjectItem({ project }) {
    const { imgSrc, hash, title, description, github, live } = project;

    return (
        <div className={styles.projectItem}>
            <figure>
                <ImageComponent src={imgSrc} alt={`${title} app`} hash={hash} />
                <figcaption>
                    <h3>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <div>
                        <a href="#">Github</a>
                        <a href={live} target="_blank">
                            Live Demo
                        </a>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}

export default ProjectItem;
