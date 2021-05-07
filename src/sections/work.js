import Section from '../components/section'

// var workData = {
// 	WorkHistory: "<span>About Dev Quest<br/><br/>Do you want to go on an epic quest to uncover the magic of coding? Seize the chance to learn about web development and get a scholarship or an internship.</span><br/><br/><br/><span>Are you a developer?<br/> Y / N</span><br/>"
// }

function Work() {

	// var allElements = document.getElementsByClassName("typeing");

	// Loop through all the typeing class elements
	// for (var j = 0; j < allElements.length; j++) {
	// 	var currentElementId = allElements[j].id;
	// 	var element = document.getElementById(currentElementId);

	// 	// type code
	// 	var i = 0, isTag, text;
	// 	(function type() {
	// 		text = workData.WorkHistory.slice(0, ++i);
	// 		if (text === workData.WorkHistory) return;
	// 		element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
	// 		var char = text.slice(-1);
	// 		if (char === "<") isTag = true;
	// 		if (char === ">") isTag = false;
	// 		if (isTag) return type();
	// 		setTimeout(type, 60);
	// 	})();
	// }
	return (
		<Section title='WORK'>
			<div className='body-text'>
				I did do some work
			</div>
		</Section>
	)
}

export default Work;

