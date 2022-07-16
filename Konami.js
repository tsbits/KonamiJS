class Konami extends EventTarget{
	constructor(){
    	super();

    	this.konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
		this.lastPressedKeys = [];
		this.triggeredCount = 0;

		this.bindEvents();
	}

	bindEvents(){
		document.addEventListener('keyup', (e) => {
			this.lastPressedKeys.push(e.keyCode)

			if( this.lastPressedKeys.length > this.konamiSequence.length ){
				this.lastPressedKeys.shift();
			}

			if( this.lastPressedKeys.length == this.konamiSequence.length ){
				if( this.checkSequence() ){
					this.triggeredCount++;

					this.dispatchEvent( new CustomEvent('konami-detected', { detail: { times: this.triggeredCount } }) );
				}
			}
		});
	}

	checkSequence(){
		let konamiDetected = true;

		for( let i in this.lastPressedKeys ){
			if( this.lastPressedKeys[i] != this.konamiSequence[i] ){
				konamiDetected = false;
				break;
			}
		}	

		return konamiDetected;
	}

	reset(){
		this.triggeredCount = 0;
	}
}