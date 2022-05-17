const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const greetings = [
    "I'm ok thanks, what about you?", 
    "I'm not so good today actually", 
    "All good, you?"
]

recognition.onstart = function(){
    console.log("Voice is activated");
    console.log(synth.getVoices());
}

recognition.onresult = function(event){
    const current =  event.resultIndex;
    const transcript = event.results[current][0].transcript;
    openWebsite(transcript, "open YouTube please", "Opening Youtube as Requested", "https://www.youtube.com/");
    openWebsite(transcript, "open Google please", "Opening Google as Requested", "https://www.google.com/");
    openWebsite(transcript, "open Netflix please", "Opening Netflix as Requested", "https://www.netflix.com/browse");
    talk(transcript, "hi", "Hey Louis");
    talk(transcript, "how's it going", greetings[Math.floor(Math.random() * greetings.length)]);
    talk(transcript, "well", "what can i assist you with today");
    talk(transcript, "thanks", "you're welcome! shout if you need anything");
}

function openWebsite(message, prompt, response, url){
    const speech = new SpeechSynthesisUtterance();

    if(message.includes(prompt)){
        window.open(url);
        speech.text = response;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1.5;

    window.speechSynthesis.speak(speech);
}

function talk(message, gesture, response){
    const speech = new SpeechSynthesisUtterance();

    if(message.includes(gesture)){
        speech.text = response;
    }

    speech.volume = 2;
    speech.rate = 1;
    speech.pitch = 2;

    window.speechSynthesis.speak(speech);
}

setInterval(() => {
    recognition.start();
}, 1000)