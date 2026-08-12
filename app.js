const menu = [

    {
        category: {
            en: "Wraps",
            ar: "الراب"
        },

        items: [

            {
                name: {
                    en: "Korean Chicken Wrap",
                    ar: "راب الدجاج الكوري"
                },

                description: {
                    en: "Crispy Korean-style chicken with fresh toppings and sauce.",
                    ar: "دجاج كوري مقرمش مع إضافات طازجة وصلصة."
                },

                image: "images/korean-chicken.jpg",
				badge: {ar:"جديد", en:"best"},

                variants: [
                    {
                        name: {
                            en: "Wrap",
                            ar: "راب"
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
                    en: "Shawarma Wrap",
                    ar: "راب الشاورما"
                },

                description: {
                    en: "Seasoned chicken shawarma with fresh vegetables and sauce.",
                    ar: "شاورما دجاج متبلة مع خضار طازجة وصلصة."
                },

                image: "images/shawarma.jpg",

                variants: [
                    {
                        name: {
                            en: "Wrap",
                            ar: "راب"
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
            }

        ]
    },


    {
        category: {
            en: "Quesadillas",
            ar: "الكيساديلا"
        },

        items: [

            {
                name: {
                    en: "Pollo Asado Quesadilla",
                    ar: "كيساديلا دجاج بولو أسادو"
                },

                description: {
                    en: "Grilled marinated chicken with melted cheese.",
                    ar: "دجاج متبل مشوي مع الجبن الذائب."
                },

                image: "images/pollo-asado.jpg",

                variants: [
                    {
                        name: {
                            en: "Quesadilla",
                            ar: "كيساديلا"
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
                    en: "Queso Birria",
                    ar: "كيسو بيريا"
                },

                description: {
                    en: "Slow-cooked beef with melted cheese and birria-style sauce.",
                    ar: "لحم بقري مطهو ببطء مع الجبن الذائب وصلصة بيريا."
                },

                image: "images/birria.jpg",

                variants: [
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
            en: "Sides",
            ar: "الإضافات"
        },

        items: [

            {
                name: {
                    en: "Small Fries",
                    ar: "بطاطا صغيرة"
                },

                description: {
                    en: "",
                    ar: ""
                },

                image: "images/fries.jpg",

                variants: [
                    {
                        name: {
                            en: "Small",
                            ar: "صغيرة"
                        },
                        price: 7
                    }
                ]
            },


            {
                name: {
                    en: "Big Fries",
                    ar: "بطاطا كبيرة"
                },

                description: {
                    en: "",
                    ar: ""
                },

                image: "images/fries.jpg",

                variants: [
                    {
                        name: {
                            en: "Large",
                            ar: "كبيرة"
                        },
                        price: 12
                    }
                ]
            },


            {
                name: {
                    en: "Nachos",
                    ar: "ناتشوز"
                },

                description: {
                    en: "",
                    ar: ""
                },

                image: "images/nachos.jpg",

                variants: [
                    {
                        name: {
                            en: "Regular",
                            ar: "عادي"
                        },
                        price: 12
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
                    ar: "مشروب غازي"
                },

                description: {
                    en: "Coca-Cola, 7UP and other available drinks.",
                    ar: "كوكاكولا، سفن أب ومشروبات غازية أخرى."
                },

                image: "images/drink.jpg",

                variants: [
                    {
                        name: {
                            en: "Regular",
                            ar: "عادي"
                        },
                        price: 3
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

const restaurantName =
    document.getElementById("restaurantName");

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

        restaurantName.textContent =
            "Your Restaurant";

        restaurantTagline.textContent =
            "Premium Street Food";

        footerText.textContent =
            "© 2026 Your Restaurant";

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

        restaurantName.textContent =
            "مطعمك";

        restaurantTagline.textContent =
            "أشهى مأكولات الشارع";

        footerText.textContent =
            "© 2026 مطعمك";

        renderMenu();

    }
);


/*
 * Initial render
 */

renderMenu();