import Navbar from '@/components/project-2/layout/navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default layout;