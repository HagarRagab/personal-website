import { motion } from "framer-motion";
import styles from "./Filter.module.css";

function Filter({ sortBy, setSortBy, setPage, filterList }) {
    function handleFilter(list) {
        setSortBy(list);
        setPage(1);
    }

    return (
        <ul className={styles.filter}>
            {filterList.map((list) => (
                <li key={list}>
                    <button onClick={() => handleFilter(list)}>{list}</button>
                    {sortBy === list && (
                        <motion.span layoutId="active-indicator" />
                    )}
                </li>
            ))}
        </ul>
    );
}

export default Filter;
