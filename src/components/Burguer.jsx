import { useState } from 'react';

export function ToggleExample() {
    const [isActive, setIsRed] = useState(false);

    const toggleColor = () => {
        setIsRed(!isActive);
    };

    return (
    
            <i className={isActive ? 'active' : 'nada' } onClick={toggleColor}> </i>
    );
}
