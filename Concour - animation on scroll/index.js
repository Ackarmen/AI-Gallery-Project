document.addEventListener("DOMContentLoaded", pageLoading);

function pageLoading() {
	// Déclenche l'animation du titre et du texte
	setTimeout(() => {
		const titleHeader = document.getElementById("title-header");
		titleHeader.style.opacity = "1";
		titleHeader.style.transform = "translateX(0)";
	}, 150);

	setTimeout(() => {
		const textHeader = document.getElementById("text-header");
		textHeader.style.opacity = "1";
		textHeader.style.transform = "translateX(0)";
	}, 550);

	// Déclenchez l'animation des deux images 
	setTimeout(() => {
		const imageRight = document.getElementById("image-right");
		imageRight.style.opacity = "1";
		imageRight.style.transform = "translateX(0)";
		const imageLeft = document.getElementById("image-left");
		imageLeft.style.opacity = "1";
		imageLeft.style.transform = "translateX(0)";
	}, 800);
}

window.addEventListener("scroll", titleIntroAppear);

function titleIntroAppear() {
    // calcul du scroll en pourcentage
	let scrollPosition =
		(window.scrollY /
			(document.documentElement.scrollHeight - window.innerHeight)) *
		100;
	console.log(scrollPosition);

	const titleIntroRevel = document.getElementById("title-intro");

	if (scrollPosition >= 3) {
		// Révéle le titre
		titleIntroRevel.style.opacity = "1";
		titleIntroRevel.style.transform = "scale(1)";
	} else {
		// Masque le titre si défilement en sens inverse
		titleIntroRevel.style.opacity = "0";
		titleIntroRevel.style.transform = "scale(0.2)";
	}
}

window.addEventListener("scroll", textIntroAppear);

function textIntroAppear() {
	let scrollPosition =
		(window.scrollY /
			(document.documentElement.scrollHeight - window.innerHeight)) *
		100;

	const textIntroRevel = document.getElementById("text-intro");

	if (scrollPosition >= 4) {
		// Révéle le text
		textIntroRevel.style.opacity = "1";
		textIntroRevel.style.transform = "translateY(0)";
	} else {
		// Masque le text si défilement en sens inverse
		textIntroRevel.style.opacity = "0";
		textIntroRevel.style.transform = "translateY(100%)";
	}
}

// ------------------------ Révéle les élements de la section 1 ---------------------

window.addEventListener("scroll", sectionOneAppear);


function sectionOneAppear() {
	let scrollPosition =
		(window.scrollY /
			(document.documentElement.scrollHeight - window.innerHeight)) *
		100;

	const textSectionOne = document.getElementById("article-neon");
	const imageSectionOne = document.getElementById("image-neon");

	if (scrollPosition >= 15) {
		imageSectionOne.style.opacity = "1";
		imageSectionOne.style.transform = "translateY(0)";
	} else {
		imageSectionOne.style.opacity = "0";
		imageSectionOne.style.transform = "translateY(100%)";
	}

	if (scrollPosition >= 15) {
		setTimeout(() => {
			textSectionOne.style.opacity = "1";
			textSectionOne.style.transform = "translateX(0)";
		}, 200);
	} else {
		textSectionOne.style.opacity = "0";
		textSectionOne.style.transform = "translateX(100%)";
	}
}

// ------------------------ Révéle les élements de la section 2 ---------------------

window.addEventListener("scroll", sectionTwoAppear);

function sectionTwoAppear() {
	let scrollPosition =
		(window.scrollY /
			(document.documentElement.scrollHeight - window.innerHeight)) *
		100;

	const textSectionTwo = document.getElementById("article-fantastic");
	const imageSectionTwo = document.getElementById("image-fantastic");

	if (scrollPosition >= 35) {
		
		imageSectionTwo.style.opacity = "1";
		imageSectionTwo.style.transform = "translateY(0)";
	} else {
		
		imageSectionTwo.style.opacity = "0";
		imageSectionTwo.style.transform = "translateY(100%)";
	}

	if (scrollPosition >= 35) {
		
		setTimeout(() => {
			textSectionTwo.style.opacity = "1";
			textSectionTwo.style.transform = "translateY(0)";
		}, 200);
	} else {
		
		textSectionTwo.style.opacity = "0";
		textSectionTwo.style.transform = "translateY(100%)";
	}
}

// ------------------------ Révéle les élements de la section 3 ---------------------

window.addEventListener("scroll", sectionThreeAppear);

function sectionThreeAppear() {
	let scrollPosition =
		(window.scrollY /
			(document.documentElement.scrollHeight - window.innerHeight)) *
		100;

	const textSectionThree = document.getElementById("article-pika");
	const imageSectionThree = document.getElementById("image-pika");

	if (scrollPosition >= 55) {
		
		imageSectionThree.style.opacity = "1";
		imageSectionThree.style.transform = "translateX(0)";

		textSectionThree.style.opacity = "1";
		textSectionThree.style.transform = "translateX(0)";
	} else {
		
		imageSectionThree.style.opacity = "0";
		imageSectionThree.style.transform = "translateX(-100%)";

		textSectionThree.style.opacity = "0";
		textSectionThree.style.transform = "translateX(100%)";
	}
}

// ------------------------ Révéle les élements de la section 4 ---------------------

window.addEventListener("scroll", sectionFourAppear);

function sectionFourAppear() {
	let scrollPosition =
		(window.scrollY /
			(document.documentElement.scrollHeight - window.innerHeight)) *
		100;

	const textSectionFour = document.getElementById("article-logo");
	const imageOne = document.getElementById("img-one");
	const imageTwo = document.getElementById("img-two");
	const imageThree = document.getElementById("img-three");
	const imageFour = document.getElementById("img-four");

	if (scrollPosition >= 75) {
		
		textSectionFour.style.opacity = "1";
		textSectionFour.style.transform = "translateX(0)";
	} else {
		
		textSectionFour.style.opacity = "0";
		textSectionFour.style.transform = "translateX(-100%)";
	}

	if (scrollPosition >= 75) {
		
		setTimeout(() => {
			imageOne.style.opacity = "1";
			imageOne.style.transform = "translateX(0)";
		}, 200);
		setTimeout(() => {
			imageTwo.style.opacity = "1";
			imageTwo.style.transform = "translateX(0)";
		}, 300);
		setTimeout(() => {
			imageThree.style.opacity = "1";
			imageThree.style.transform = "translateX(0)";
		}, 400);
		setTimeout(() => {
			imageFour.style.opacity = "1";
			imageFour.style.transform = "translateX(0)";
		}, 500);
	} else {
		
		imageOne.style.opacity = "0";
		imageOne.style.transform = "translateX(100%)";

		imageTwo.style.opacity = "0";
		imageTwo.style.transform = "translateX(100%)";

		imageThree.style.opacity = "0";
		imageThree.style.transform = "translateX(100%)";

		imageFour.style.opacity = "0";
		imageFour.style.transform = "translateX(100%)";
	}
}
