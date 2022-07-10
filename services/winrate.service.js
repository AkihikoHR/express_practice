export const getWinrate = async (query) => {
    try {
        const loseRate = Math.pow((1 - query.probability / 100), query.trial);
        return {
            probability: query.probability,
            trial: query.trial,
            result: Math.round((1 - loseRate) * 100),
        };

    } catch (e) {
        throw Error("Error while getting Winrate");
    }
};