// Your code here
function lyricsGenerator(lyric) {
    let totalBass = 0;
    let text = '';
    lyric.forEach(item => {
        if(item === 0) {
            totalBass = 0;
            text += 'Boom ';
        }
        else {
            totalBass++
            text += totalBass >= 3 ? 'Drop the bass !!!Break the bass!!! ': 'Drop the bass ';
        }
    })
    return text;
}

// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
