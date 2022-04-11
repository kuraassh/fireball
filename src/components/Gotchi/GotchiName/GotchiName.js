import React, { useState } from 'react';

import styles from './styles';
import { NavLink } from 'react-router-dom';
import GotchiPreviewModal from 'components/GotchiPreviewModal/GotchiPreviewModal';

export default function GotchiName({ gotchi, shouldOpenPreviewModal = false }) {
    const classes = styles();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onOpenPreviewModal = () => {
        setIsModalOpen(true);
    }

    const renderNameSection = () => {
        return <>
            <p>{gotchi.name ? gotchi.name : 'Unnamed'}</p>
            <span className={classes.gotchiId}>({gotchi.id})</span>
        </>;
    }

    return (
        <>
            {
                shouldOpenPreviewModal ? (
                    <div className={classes.gotchiName} onClick={onOpenPreviewModal}>
                        { renderNameSection() }
                    </div>
                ) : (
                    <NavLink to={`/gotchi/${gotchi.id}`} className={classes.gotchiName}>
                        { renderNameSection() }
                    </NavLink>
                )
            }

            { isModalOpen && <GotchiPreviewModal gotchi={gotchi} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> }
        </>
    );
}
