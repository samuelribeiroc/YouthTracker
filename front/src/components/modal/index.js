import React, { useState } from 'react';

export default function Modal (props) {
    const [isModalOpen, setIsModalOpen] = useState(props.isModalOpen);

    return (
        <>
            { isModalOpen &&
                <div onClick={() => setIsModalOpen(false)}>
                    <div>
                        <p>conteúdo do modal</p>
                    </div>
                </div>
            }
        </>
    )
}