/**
 * Factory function used to create a player
 * @param {*} name The player name
 * @param {*} mark The player mark (usually X or O)
 * @returns The player created
 */
function createPlayer(id, name, mark) {
    let score = 0;
    let titlesDiv = document.querySelector('#scores');
    let scoreDOM;

    init();

    /**
     * Renders the player score and title
     */
    function init() {
        const playerTitle = document.createElement('p');
        playerTitle.id = `player${id}-title`;
        playerTitle.innerHTML = `${name}: <span id="player${id}-score">0</span> pts.`;
        titlesDiv.appendChild(playerTitle);
        scoreDOM = document.querySelector(`#player${id}-score`);
    }

    /**
     * Adds 1 to the score and returns it
     * @returns The updated score
     */
    function addScore() {
        score++;
        scoreDOM.textContent = score;
        return score;
    }

    /**
     * Resets the score to 0
     */
    function resetScore() {
        score = 0;
        scoreDOM.textContent = score;
    }

    return {
        get name() {
            return name;
        }, 
        get mark() {
            return mark;
        },     
        addScore,
        resetScore 
    };
}