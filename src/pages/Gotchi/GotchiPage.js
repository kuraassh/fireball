import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import GotchiPreview from 'components/GotchiPreview/GotchiPreview';
import thegraphApi from 'api/thegraph.api';

export default function GotchiPage() {
    const routeParams = useParams();

    const [gotchi, setGotchi] = useState(null);

    useEffect(() => {
        thegraphApi.getGotchiById(routeParams.gotchiId).then(response => setGotchi(response.data.aavegotchi));
    }, [routeParams]);

    if (!gotchi) {
        return <div>There is no Gotchi with such ID :(</div>;
    }

    return (
        gotchi && <GotchiPreview gotchi={gotchi} />
    );
}
