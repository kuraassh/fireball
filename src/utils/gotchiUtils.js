import { traitsEmoji } from 'data/traits';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getKinChanneling(kinship) {
        const KINformula = Math.sqrt(kinship / 50);

        return kinship < 50 ? 0 : parseFloat(KINformula.toFixed(2));
    },

    getTraitEmoji(trait) {
        return traitsEmoji[trait];
    },
}
