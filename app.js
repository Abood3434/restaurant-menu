const menu = [

    {
        category: {
            en: "Main Meals",
            ar: "وجبات رئيسية"
        },

        items: [

            {
                name: {
                    en: "Korean Chicken Wrap 🇰🇷",
                    ar: "بوريتو الدجاج الكوري 🇰🇷"
                },

                description: {
                    en: "Crispy Korean-style chicken with fresh toppings and sauce.",
                    ar: "دجاج متبل بالطريقة الكورية مع النكهات الاسيوية. <br> ملفوف كوري <br> صوص سبشيل"
                },

                image: "images/korean-chicken.jpg",
				badge: {ar:"جديد🔥", en:"New 🔥"},

                variants: [
                    {
                        name: {
                            en: "Burrito",
                            ar: "بوريتو"
                        },
                        price: 24
                    },
                    {
                        name: {
                            en: "Meal",
                            ar: "وجبة"
                        },
                        price: 30
                    }
                ]
            },


            {
                name: {
                    en: "Shawarma Wrap 🇵🇸",
                    ar: "بوريتو الشاورما 🇵🇸"
                },

                description: {
                    en: "Seasoned chicken shawarma with fresh vegetables and sauce.",
                    ar: "شاورما دجاج بتتبيلة خاصة. <br> مع جبنة <br> طحينية وثومة"
                },

                image: "images/shawarma-wrap.jpg",

                variants: [
                    {
                        name: {
                            en: "Wrap",
                            ar: "بوريتو"
                        },
                        price: 20
                    },
                    {
                        name: {
                            en: "Meal",
                            ar: "وجبة"
                        },
                        price: 27
                    }
                ]
            },
			{
                name: {
                    en: "Chicken Quesadilla 🇲🇽",
                    ar: "كيساديا الدجاج المكسيكي 🇲🇽"
                },

                description: {
                    en: "Grilled marinated chicken with melted cheese.",
                    ar: "دجاج متبل بالبهارات المكسيكة مع الجبن الذائب."
                },

                image: "images/quesadilla-chicken.jpg",

                variants: [
                    {
                        name: {
                            en: "Quesadilla",
                            ar: "كيساديا"
                        },
                        price: 22
                    },
                    {
                        name: {
                            en: "Meal",
                            ar: "وجبة"
                        },
                        price: 29
                    }
                ]
            },


            {
                name: {
                    en: "Queso Birria 🇲🇽",
                    ar: "كيساديا بيريا 🇲🇽"
                },

                description: {
                    en: "Slow-cooked beef with melted cheese and birria-style sauce.",
                    ar: "لحم بقري مطهو ببطء مع البهارات العطرية و الجبن الذائب."
                },

                image: "images/quesadilla-birria.jpg",

                variants: [
					{
						name:{
							en: "Quesadilla",
							ar: "كيساديا"
						}, price: 26
					},
					{
                        name: {
                            en: "Meal",
                            ar: "وجبة"
                        },
                        price: 33
                    }
                ]
            }

        ]
    },


    {
        category: {
            en: "Appetizers & Sides",
            ar: "مقبلات"
        },

        items: [


            {
                name: {
                    en: "Fancy Fries 🥔",
                    ar: "بطاطا فاخرة 🍟"
                },

                description: {
                    en: "",
                    ar: "بطاطا تاكوشي المقرمشة مع بهارات تاكوشي المميز."
                },

                image: "images/fries.jpg",

                variants: [{
                        name: {
                            en: "Small",
                            ar: "صغير"
                        },
                        price: 7
                    },
                    {
                        name: {
                            en: "Large",
                            ar: "كبير"
                        },
                        price: 12
                    }
                ]
            },


            {
                name: {
                    en: "Nachos 🫕",
                    ar: "ناتشوز 🫕"
                },

                description: {
                    en: "",
                    ar: ""
                },

                image: "images/nachos.jpg",

                variants: [{
                        name: {
                            en: "Regular",
                            ar: "عادي"
                        },
                        price: 9
                    },
                    {
                        name: {
                            en: "With cheese",
                            ar: "جبنة"
                        },
                        price: 13
                    }
                ]
            }

        ]
    },
	{
		category: {
            en: "Extras",
            ar: "الإضافات"
        },
		items: [

            {
                name: {
                    en: "Jalapeno Salsa",
                    ar: "صوص هالابينو"
                },

                description: {
                    en: "Spicy Mexican salsa. 🌶️🌶️🌶️",
                    ar: "صلصة مكسيكية حارة جداً. 🌶️🌶️🌶"
                },

                image: "images/salsa.jpg",

                variants: [
                    {
                        name: {
                            en: "",
                            ar: ""
                        },
                        price: 1
                    }
                ]
            },
			{
                name: {
                    en: "Salsa Roja",
                    ar: "صوص روها"
                },

                description: {
                    en: "Tomato Mexican salsa.",
                    ar: "صلصة البندورة المكسيكية."
                },

                image: "images/salsa.jpg",

                variants: [
                    {
                        name: {
                            en: "",
                            ar: ""
                        },
                        price: 1
                    }
                ]
            },
			{
                name: {
                    en: "Jalapeno Salsa",
                    ar: "صوص طحينية"
                },

                description: {
                    en: "Spicy Mexican salsa.",
                    ar: "صلصة مكسيكية حارة جداً."
                },

                image: "images/salsa.jpg",

                variants: [
                    {
                        name: {
                            en: "",
                            ar: ""
                        },
                        price: 1
                    }
                ]
            },
			{
                name: {
                    en: "Jalapeno Salsa",
                    ar: "صوص ثومة"
                },

                description: {
                    en: "Spicy Mexican salsa.",
                    ar: "صلصة مكسيكية حارة جداً."
                },

                image: "images/salsa.jpg",

                variants: [
                    {
                        name: {
                            en: "",
                            ar: ""
                        },
                        price: 1
                    }
                ]
            },
			{
                name: {
                    en: "Jalapeno Salsa",
                    ar: "سبيشل صوص"
                },

                description: {
                    en: "Spicy Mexican salsa.",
                    ar: "صلصة مكسيكية حارة جداً."
                },

                image: "images/salsa.jpg",

                variants: [
                    {
                        name: {
                            en: "",
                            ar: ""
                        },
                        price: 1
                    }
                ]
            },
			{
			
                name: {
                    en: "Jalapeno Salsa",
                    ar: "سبايسي مايونيز"
                },

                description: {
                    en: "Spicy Mexican salsa.",
                    ar: "صلصة مكسيكية حارة جداً."
                },

                image: "images/salsa.jpg",

                variants: [
                    {
                        name: {
                            en: "",
                            ar: ""
                        },
                        price: 1
                    }
                ]
            },
			{
                name: {
                    en: "Jalapeno Salsa",
                    ar: "صوص جبنة سائلة"
                },

                description: {
                    en: "Spicy Mexican salsa.",
                    ar: "صلصة مكسيكية حارة جداً."
                },

                image: "images/salsa.jpg",

                variants: [
                    {
                        name: {
                            en: "",
                            ar: ""
                        },
                        price: 3
                    }
                ]
            },
			{
                name: {
                    en: "Jalapeno Salsa",
                    ar: "مخلل خيار"
                },

                description: {
                    en: "Spicy Mexican salsa.",
                    ar: "صلصة مكسيكية حارة جداً."
                },

                image: "images/soda.png",

                variants: [
                    {
                        name: {
                            en: "",
                            ar: ""
                        },
                        price: 1
                    }
                ]
            },
			{
                name: {
                    en: "Jalapeno Salsa",
                    ar: "مخلل هالابينو"
                },

                description: {
                    en: "Spicy Mexican salsa.",
                    ar: "صلصة مكسيكية حارة جداً."
                },

                image: "images/soda.png",

                variants: [
                    {
                        name: {
                            en: "",
                            ar: ""
                        },
                        price: 1
                    }
                ]
            }

        ]
	},
    {
        category: {
            en: "Drinks",
            ar: "المشروبات"
        },

        items: [

            {
                name: {
                    en: "Soft Drink",
                    ar: "مشروبات غازية"
                },

                description: {
                    en: "Coca-Cola, 7UP and other available drinks.",
                    ar: "كوكاكولا، سفن أب ومشروبات غازية أخرى."
                },

                image: "images/soda.png",

                variants: [
                    {
                        name: {
                            en: "",
                            ar: ""
                        },
                        price: 3
                    }
                ]
            },
			{
                name: {
                    en: "Water",
                    ar: "ماء"
                },

                description: {
                    en: "Bottled mineral water. 500ml.",
                    ar: "مياه معدنية"
                },

                image: "images/water.png",

                variants: [
                    {
                        name: {
                            en: "Regular",
                            ar: "500 مل"
                        },
                        price: 2
                    }
                ]
            }

        ]
    }

];


let currentLanguage = "ar";
document.documentElement.dir = "rtl";



const menuContainer =
    document.getElementById("menu");

const categoryNav =
    document.getElementById("categoryNav");

const englishButton =
    document.getElementById("englishButton");

const arabicButton =
    document.getElementById("arabicButton");



const restaurantTagline =
    document.getElementById("restaurantTagline");

const footerText =
    document.getElementById("footerText");


function renderMenu() {

    menuContainer.innerHTML = "";
    categoryNav.innerHTML = "";


    menu.forEach((category, index) => {

        const categoryId =
            `category-${index}`;


        /*
         * Category navigation
         */

        const button =
            document.createElement("button");

        button.className =
            "category-button";

        button.textContent =
            category.category[currentLanguage];


        button.addEventListener("click", () => {

            document
                .getElementById(categoryId)
                .scrollIntoView({
                    behavior: "smooth"
                });

        });


        categoryNav.appendChild(button);


        /*
         * Category section
         */

        const section =
            document.createElement("section");

        section.className =
            "menu-section";

        section.id =
            categoryId;


        const heading =
            document.createElement("h2");

        heading.textContent =
            category.category[currentLanguage];


        section.appendChild(heading);


        /*
         * Items
         */

        category.items.forEach(item => {

            const itemElement =
                document.createElement("article");

            itemElement.className =
                "menu-item";


 itemElement.innerHTML = `

    <div class="image-container">

        <img
		class="menu-item-image"
		src="${item.image}"
		alt="${item.name[currentLanguage]}"
		loading="lazy"
		onclick="openImage(
			'${item.image}',
			'${item.name[currentLanguage]}'
		)"
	>

        ${
            item.badge
                ? `
                    <span class="item-badge">
                        ${item.badge[currentLanguage]}
                    </span>
                  `
                : ""
        }

    </div>


    <div class="menu-item-content">

        <h3>
            ${item.name[currentLanguage]}
        </h3>

        <p>
            ${item.description[currentLanguage]}
        </p>


        <div class="menu-item-variants">

            ${item.variants.map(variant => `

                <div class="variant">

                    <span>
                        ${variant.name[currentLanguage]}
                    </span>

                    <strong>
                        ${variant.price} ₪
                    </strong>

                </div>

            `).join("")}

        </div>

    </div>

`;


            section.appendChild(itemElement);

        });


        menuContainer.appendChild(section);

    });

}


/*
 * English
 */

englishButton.addEventListener(
    "click",
    () => {

        currentLanguage = "en";

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";


        restaurantTagline.textContent =
            "Premium Mexican Food 🌮🌯🇲🇽";

        footerText.textContent =
            "© 2026 Tacoshi";

        renderMenu();

    }
);


/*
 * Arabic
 */

arabicButton.addEventListener(
    "click",
    () => {

        currentLanguage = "ar";

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";


        restaurantTagline.textContent =
            " المطعم المكسيكي الأول في البلاد 🌮 🌯 🇲🇽";

        footerText.textContent =
            "© 2026 تاكوشي";

        renderMenu();

    }
);

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const closeModal =
    document.getElementById("closeModal");


function openImage(image, alt) {

    modalImage.src = image;
    modalImage.alt = alt;

    imageModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeImage() {

    imageModal.classList.remove("active");

    document.body.style.overflow = "";

    modalImage.src = "";
}

closeModal.addEventListener(
    "click",
    closeImage
);


imageModal.addEventListener(
    "click",
    (event) => {

        if (event.target === imageModal) {
            closeImage();
        }

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {
            closeImage();
        }

    }
);


/*
 * Initial render
 */

renderMenu();