/**
 * Factory function used to create a player
 * @param {*} name The player name
 * @param {*} mark The player mark (usually X or O)
 * @returns The player created
 */
function createPlayer(id, name, mark) {
    let score = 0;
    const scoreDOM = document.querySelector(`#player${id}-score`);
    /**
     * Adds 1 to the score and returns it
     * @returns The updated score
     */
    function addScore() {
        score++;
        scoreDOM.textContent = score;
        return score;
    }

    return {
        get name() {
            return name;
        }, 
        get mark() {
            return mark;
        },     
        addScore 
    };
}