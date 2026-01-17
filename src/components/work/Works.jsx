import React, { useState, useEffect } from 'react'
import { projectsData } from './Data'
import WorkItems from './WorkItems';
// import ScrollDown from '../home/ScrollDown';
const Works = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    useEffect(() => {
        setProjects(projectsData);
    }, []);
    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    }
    return (
        <div>
            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorkItems item={item} key={item.id} />
                })}
            </div>
            {/* <ScrollDown scrollToSection="#contact" /> */}
        </div>
    )
}

export default Works