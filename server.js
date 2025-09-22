async function getDeck(){
    const url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error()
        }
    const result = await response.json();
    console.log(result);
    } catch(error) {
        console.log(error.message)
    }
}

async function drawDeck(id){
    const url = 'https://www.deckofcardsapi.com/api/deck/{$id}/draw/?count=1';
    try{
        const response = await fetch(url)
    }
}
function deck(){

}