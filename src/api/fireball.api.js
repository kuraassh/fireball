import axios from 'axios';

const api = 'https://dev.fireball.gg/api';

export default {
    async getFireGotchiById(id) {
        return await axios.get(`${api}/ghosts/?id=${id}`)
            .then(r => r.data.results[0]);
    }
}
