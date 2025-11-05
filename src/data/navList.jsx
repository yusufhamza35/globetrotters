import { FaBus, FaHome, FaPhoneAlt, FaQuestion } from 'react-icons/fa';
import translations from '../languages/translations';
import { FaBookAtlas } from 'react-icons/fa6';

export default function getNavList(state) {
    const t = translations[state];  
    
    return [
        {
            id: 1,
            name: t.navHome,
            href: '',
            icon: <FaHome />,
            active: 1
        },
        {
            id: 2,
            name: t.navTours,
            href: 'turlar',
            icon: <FaBus />,
            active: 1
        },
        {
            id: 3,
            name: t.navAboutUs,
            href: 'hakkimizda',
            icon: <FaQuestion />,
            active: 1
        },        
        {
            id: 4,
            name: t.navBlog,
            href: 'bloglar',
            icon: <FaBookAtlas />,
            active: 1
        },
        {
            id: 5,
            name: t.navContact,
            href: 'iletisim',
            icon: <FaPhoneAlt />,
            active: 1
        }
    ];
}
