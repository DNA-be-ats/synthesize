const container = document.getElementById("container");
const canvas = document.getElementById("canvas1");
const audio1 = document.getElementById("audio1");



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
let audioSource;
let analyser;

container.addEventListener("click", function(){
    const audio1 = document.getElementById("audio1");
    const audioCtx = new AudioContext(); 
    audio1.play();
    //creating audio node for sourced audio and ESTABLISHING it as audio source
    audioSource = audioCtx.createMediaElementSource(audio1)
    //analyser exposes audio, time, frequency data needed for visualizer
    analyser = audioCtx.createAnalyser();
    //connecting the analyser to our audio source so that it analyzes it 
    audioSource.connect(analyser)
    //connect the audio analyzed to the audio destination(SPEAKERS)
    analyser.connect(audioCtx.destination)
    //property that allows us to set how mnay bars ther'll be in the visualizer
    //fftSize alters how many audiovisual bars exist
    analyser.fftSize = 128;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const barWidth = canvas.width/bufferLength;
    let barHeight;
    let x;

    function animate(){
        x = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray)
        requestAnimationFrame(animate);
    }   
    animate();
});

function drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray){
    for(let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i] * 2;
        //by playing with these values you alter color of bars
        const red = i * barHeight/2;
        const green = i * 6;
        const blue = barHeight/2;
        ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";        
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight)
        x += barWidth;
    }
}
