const jsonData = {
	'sections': [
		{
			'order': 1,
			"target":"TACO",
			'title': 'T.U.C TACO',
			'titleColor': '#f15c3e',
			'logo': {
				'image': 'assets/rest/01.png',
				'alt': 'T.U.C TACO',
			},
			'backgroundColor': '#ffffff',
			'gallery': [
				{
					'large': 'assets/menu/tuc-taco/01.webp',
					'small': 'assets/menu/tuc-taco/01.webp',
					'title': 'Tuc Taco Menu (Page 1)',
				},
				{
					'large': 'assets/menu/tuc-taco/02.webp',
					'small': 'assets/menu/tuc-taco/02.webp',
					'title': 'Tuc Taco Menu (Page 2)',
				},
				{
					'large': 'assets/menu/tuc-taco/03.webp',
					'small': 'assets/menu/tuc-taco/03.webp',
					'title': 'Tuc Taco Menu (Page 3)',
				},
				{
					'large': 'assets/menu/tuc-taco/04.webp',
					'small': 'assets/menu/tuc-taco/04.webp',
					'title': 'Tuc Taco Menu (Page 4)',
				},
				{
					'large': 'assets/menu/tuc-taco/05.webp',
					'small': 'assets/menu/tuc-taco/05.webp',
					'title': 'Tuc Taco Menu (Page 5)',
				},
			],
		},
		{
			'order': 2,
			"target":"Brochette",
			'title': 'Pain Brochette',
			'titleColor': '#f37e29',
			'logo': {
				'image': 'assets/logos/pain-brochette.png',
				'alt': 'Pain Brochette',
			},
			'backgroundColor': 'whitesmoke',
			'gallery': [
				{
					'large': 'assets/menu/pain-brochette/01.png',
					'small': 'assets/menu/pain-brochette/01.png',
					'title': 'Pain Brochette (Page 1)',
				},
			],
		},
		{
			'order': 3,
			"target":"kanaf",
			'title': 'كنف',
			'titleColor': '#2baadc',
			'logo': {
				'image': 'assets/logos/kanaf.png',
				'alt': 'كنف',
			},
			'backgroundColor': '#fff',
			'gallery': [
				{
					'large': 'assets/menu/kanaf/01.png',
					'small': 'assets/menu/kanaf/01.png',
					'title': 'كنف Menu (Page 1)',
				},
				{
					'large': 'assets/menu/kanaf/02.png',
					'small': 'assets/menu/kanaf/02.png',
					'title': 'كنف Menu (Page 2)',
				},
			],
		},
		{
			'order': 4,
			"target":"Roll",
			'title': 'Roll',
			'titleColor': '#ee302d',
			'logo': {
				'image': 'assets/logos/roll.png',
				'alt': 'Roll',
			},
			'backgroundColor': 'whitesmoke',
			'gallery': [
				{
					'large': 'assets/menu/roll/01.png',
					'small': 'assets/menu/roll/01.png',
					'title': 'Roll Menu (Page 1)',
				},
				{
					'large': 'assets/menu/roll/02.png',
					'small': 'assets/menu/roll/02.png',
					'title': 'Roll Menu (Page 2)',
				},
			],
		},
		{
			'order': 5,
			"target":"Laban",
			'title': 'B Al Laban',
			'titleColor': '#394a7b',
			'logo': {
				'image': 'assets/logos/bel-laban.png',
				'alt': 'B Al Laban',
			},
			'backgroundColor': '#fff',
			'gallery': [
				{
					'large': 'assets/menu/bel-laban/01.webp',
					'small': 'assets/menu/bel-laban/01.webp',
					'title': 'B Al Laban (Page 1)',
				},
				{
					'large': 'assets/menu/bel-laban/02.webp',
					'small': 'assets/menu/bel-laban/02.webp',
					'title': 'B Al Laban (Page 2)',
				},
			],
		},
		{
			'order': 6,
			"target":"DoughX",
			'title': 'Magic DoughX',
			'titleColor': '#0b3c52',
			'logo': {
				'image': 'assets/logos/magic-doughx.webp',
				'alt': 'Magic DoughX',
			},
			'backgroundColor': 'whitesmoke',
			'gallery': [
				{
					'large': 'assets/menu/magic-dough/01.webp',
					'small': 'assets/menu/magic-dough/01.webp',
					'title': 'Magic DoughX (Page 1)',
				},
			],
		},
		{
			'order': 7,
			"target":"Crunchy",
			'title': 'Crunchy Flakes',
			'titleColor': '#00afef',
			'logo': {
				'image': 'assets/logos/crunchy-flakes.png',
				'alt': 'Crunchy Flakes',
			},
			'backgroundColor': '#fff',
			'gallery': [
				{
					'large': 'assets/menu/crunchy-flakes/01.png',
					'small': 'assets/menu/crunchy-flakes/01.png',
					'title': 'Crunchy Flakes (Page 1)',
				},
				{
					'large': 'assets/menu/crunchy-flakes/02.png',
					'small': 'assets/menu/crunchy-flakes/02.png',
					'title': 'Crunchy Flakes (Page 2)',
				},
				{
					'large': 'assets/menu/crunchy-flakes/03.png',
					'small': 'assets/menu/crunchy-flakes/03.png',
					'title': 'Crunchy Flakes (Page 3)',
				},
			],
		},
		{
			'order': 8,
			"target":"abdallah",
			'title': 'Ahmad Al Abdallah',
			'titleColor': '#eb062d',
			'logo': {
				'image': 'assets/logos/al-adballah.jpg',
				'alt': 'Ahmad Al Abdallah',
			},
			'backgroundColor': 'whitesmoke',
			'gallery': [
				{
					'large': 'assets/menu/al-abdallah/01.png',
					'small': 'assets/menu/al-abdallah/01.png',
					'title': 'Ahmad Al Abdallah (Page 1)',
				},
			],
		},
	],
}

function createSection(sectionData) {
	const section = document.createElement('section')
	section.classList.add('position-relative', 'overflow-hidden', 'z-index-0')
	section.style.backgroundColor = sectionData.backgroundColor
	section.id = `section-${sectionData.order}` // Use the order attribute for the ID

	section.innerHTML = `
        <div class="position-absolute left-0px w-100 text-center top-minus-30px lg-top-minus-50px xs-top-minus-10px opacity-2 ls-minus-10px lg-ls-minus-1px fs-250 lg-fs-250 xs-fs-200 text-nowrap alt-font text-uppercase"
            style="color: ${sectionData.titleColor};">
            ${sectionData.title}
        </div>
        <div class="position-absolute left-minus-50px mt-15 d-none d-xl-inline-block"
            data-parallax-liquid="true" data-parallax-transition="2" data-parallax-position="top">
            <img src="assets/layers/section-layer2.png" alt data-bottom-top="transform: rotate(-30deg)"
                data-top-bottom="transform:rotate(10deg)">
        </div>
        <div class="position-absolute z-index-minus-1 right-minus-50px xxl-right-minus-100px xl-right-minus-50px xl-w-220px d-none d-xl-inline-block"
            data-parallax-liquid="true" data-parallax-transition="2" data-parallax-position="bottom">
            <img src="assets/layers/section-layer1.png" alt data-bottom-top="transform: rotate(-30deg)"
                data-top-bottom="transform:rotate(10deg)">
        </div>
        <div class="container" id="${sectionData.target}">
            <div class="row align-items-center lg-mb-6 lg-mt-5 justify-content-center">
                <div class="col-xl-4 col-lg-4 text-center position-relative md-mb-50px xs-mb-30px"
                    data-anime='{ "rotateZ": [-15, 0], "opacity": [0,1], "duration": 1500, "delay": 300, "staggervalue": 150, "easing": "easeOutQuad" }'>
                    <img src="${sectionData.logo.image}" alt="${
		sectionData.logo.alt
	}" class="rounded">
                </div>
                <div class="col-xl-5 col-lg-5"
                    data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <div class="swiper"
                        data-slider-options='{ "slidesPerView": 1, "spaceBetween": 30, "loop": true, "autoplay": { "delay": 5000, "disableOnInteraction": false }, "pagination": { "el": ".swiper-pagination-bullets-03", "clickable": true, "dynamicBullets": false }, "navigation": { "nextEl": ".slider-one-slide-next-02", "prevEl": ".slider-one-slide-prev-02" }, "keyboard": { "enabled": true, "onlyInViewport": false }, "breakpoints": { "992": { "slidesPerView": 1 }, "768": { "slidesPerView": 1 }, "480": { "slidesPerView": 1 }, "320": { "slidesPerView": 1 } }, "effect": "slide" }'>
                        <div class="swiper-wrapper image-gallery-style-01">
                            ${sectionData.gallery
															.map(
																(image) => `
                            <div class="swiper-slide transition-inner-all">
                                <div class="swiper-slide" style="border:2px solid ${sectionData.titleColor}">
                                    <div class="gallery-box">
                                        <a href="${image.large}" data-group="lightboxgallery-${sectionData.title}" title="${image.title}">
                                            <img class="w-100" src="${image.small}" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            `
															)
															.join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

	return section
}

function renderSections() {
	const container = document.getElementById('sections-container')

	// Sort sections by order before rendering
	const sortedSections = jsonData.sections.sort((a, b) => a.order - b.order)

	sortedSections.forEach((sectionData) => {
		const sectionElement = createSection(sectionData)
		container.appendChild(sectionElement)
	})
}

// Call the function to render sections
renderSections()
