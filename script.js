// Start Home Scipting **------------

    // creating variable **------------
    var loader = document.querySelector('.loader');
    const btn = document.querySelector('.menu_icon');
    const drawer = document.querySelector('.side-menu');
    const closeIcon = document.querySelector('.close_icon');
    const cfo = document.querySelector('.cfo'); // Replace with your actual selector
    const business = document.querySelector('.side-menu .business'); // Replace with your actual selector
    const cfoSubmenu = document.querySelector('.cfosubmenu');
    const businessSubmenu = document.querySelector('.busiesssubmenu');

    // nav items
    var cfodropdownbox = document.querySelector(".fst_dropdown_box");
    var businessdropdownbox = document.querySelector(".scnd_dropdown_box");
    var downicon1 = document.querySelector(".down_icon1");
    var downicon2 = document.querySelector(".down_icon2");

    // our service items left side
    var cfo_service = document.querySelector(".cfo_service");
    var business_strategy = document.querySelector(".business_strategy");
    var business_process_t = document.querySelector(".business_process_t");
    var business_process_0 = document.querySelector(".business_process_0");
    var business_intellegence = document.querySelector(".business_intellegence");
    var cash_management = document.querySelector(".cash_management");

    // our service items right side
    var changeText = document.querySelector(".offer");
    var image_url = document.querySelector(".service_img_con_url");
    var service_name = document.querySelector(".service_name_con_h4");
    var service_para = document.querySelector(".service_para_p");
    var more = document.querySelector('.more');

    // faq section items right side
    var faq_box1 = document.querySelector(".faq_box1");
    var faq_box2 = document.querySelector(".faq_box2");
    var faq_box3 = document.querySelector(".faq_box3");
    var faq_box4 = document.querySelector(".faq_box4");
    var q_box1 = document.querySelector(".q_box1");
    var q_box2 = document.querySelector(".q_box2");
    var q_box3 = document.querySelector(".q_box3");
    var q_box4 = document.querySelector(".q_box4");

    // Get all necessary elements
    const dropdown1 = document.querySelector(".dropdown1");
    const dropdown2 = document.querySelector(".dropdown2");

    (function smoothScrolling(){
        const scroll = new LocomotiveScroll({
            el: document.querySelector('.scroll-container'), // Replace '.scroll-container' with your actual selector
            smooth: true
        });
    })();

    (function loaderAnimation(){
        setTimeout(function(){
            loader.style.top = '-100%';
        }, 6000)
    })();

    function isOpenYaNot() {

        // CFO click
        cfo.addEventListener('click', function (e) {
            e.preventDefault();
            toggleSubmenu(cfoSubmenu, cfo , downicon1);
        });

        // Business click
        business.addEventListener('click', function (e) {
            e.preventDefault();
            toggleSubmenu(businessSubmenu, business , downicon2);
        });

        // Generic toggle function
        function toggleSubmenu(submenu, button , icon) {
            const isOpened = button.getAttribute('isOpend') === 'true';
            if (!isOpened) {
                submenu.style.display = 'block';
                button.setAttribute('isOpend', 'true');
                icon.textContent = 'keyboard_arrow_up';
            } else {
                submenu.style.display = 'none';
                button.setAttribute('isOpend', 'false');
                icon.textContent = 'keyboard_arrow_down';
            }
        }
    }

    // Call the function to activate submenu toggling
    isOpenYaNot();

    (function(){

      function openMenu(){
        btn.classList.add('open');
        btn.setAttribute('aria-expanded','true');
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden','false');
        overlay.classList.add('show');
        overlay.setAttribute('aria-hidden','false');
      }

      function closeMenu(){
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded','false');
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden','true');
        overlay.classList.remove('show');
        overlay.setAttribute('aria-hidden','true');
        btn.focus();
      }

      btn.addEventListener('click', function(){
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        if(expanded) closeMenu(); else openMenu();
      });

      overlay.addEventListener('click', closeMenu);
      closeIcon.addEventListener('click', closeMenu);

    })();

    (function toggleDropdown1(){

        // Function to open dropdown
        function openDropdown(dropbox, icon) {
            dropbox.classList.add('dropdown_box_hidden');
            icon.textContent = "keyboard_arrow_up";
        }

        // Function to close dropdown
        function closeDropdown(dropbox, icon) {
            dropbox.classList.remove('dropdown_box_hidden');
            icon.textContent = "keyboard_arrow_down";
        }

        // Function to close all dropdowns
        function closeAllDropdowns() {
            closeDropdown(cfodropdownbox, downicon1);
            closeDropdown(businessdropdownbox, downicon2);
        }

        // Function to toggle dropdown on click
        function clickOnDropdown(dropbox, icon) {
            const isHidden = dropbox.classList.contains('dropdown_box_hidden');
            if (!isHidden) {
                openDropdown(dropbox, icon);
            } else {
                closeDropdown(dropbox, icon);
            }
        }

        // Event listeners for dropdown1
        dropdown1.addEventListener('mouseenter', () => {
            closeAllDropdowns(); // pehle sab close
            openDropdown(cfodropdownbox, downicon1); // fir current open
        });
        dropdown1.addEventListener('click', (e) => {
            e.preventDefault();
            clickOnDropdown(cfodropdownbox, downicon1);
        });

        // Event listeners for dropdown2
        dropdown2.addEventListener('mouseenter', () => {
            closeAllDropdowns(); // pehle sab close
            openDropdown(businessdropdownbox, downicon2); // fir current open
        });
        dropdown2.addEventListener('click', (e) => {
            e.preventDefault();
            clickOnDropdown(businessdropdownbox, downicon2);
        });

        document.querySelectorAll('.dropdown_box').forEach(element => {
            element.addEventListener('mouseleave', () => {
                closeAllDropdowns();
            });
        });
    })();

    // entry page animation
    (function(){
        
        // keep all text in array
        const texts = [
            "CFO Services",
            "Business Strategy and Planning",
            "Business Process Transformation",
            "Business Process Optimising",
            "Business Intelligence Analysis",
            "Treasury and Fund Raising"
        ];

        let index = 0;
        
        function showTextGSAP(){
            // fade out current text
            gsap.to(changeText, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    // change the text after fade out
                    changeText.textContent = texts[index];
                    index = (index + 1) % texts.length;
                
                    // fade in new text
                    gsap.to(changeText, {
                        opacity: 1,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            });
        }
    
        // initial text
        changeText.textContent = texts[index];
        index++;

        // run function every 4 seconds
        setInterval(showTextGSAP, 4000);
        
    })()

    cfo_service.addEventListener('click', function(){

        // array keeps data dynamic
        const services = [
            "/assets/images/CFO-service.webp",
            "CFO Service",
            "Financial stress in a startup comes from many directions. Managing cash, fundraising, meeting projections, finding the right pricing framework all contribute."
        ];

        // box border
        cfo_service.setAttribute("class","cfo_service");
        business_process_t.removeAttribute("class");
        business_process_0.removeAttribute("class");
        business_intellegence.removeAttribute("class");
        cash_management.removeAttribute("class");
        business_strategy.removeAttribute("class");

        // array of elements
        const elements = [image_url, service_name, service_para, more];
              
        // old content animate out
        gsap.to(elements, { 
            duration: 0.5, 
            x: -300, 
            opacity: 0, 
            ease: "power2.in",
            onComplete: () => {
                // set new content
                image_url.setAttribute("src", services[0]);
                service_name.textContent = services[1];
                service_para.textContent = services[2];
            
                // animate in from right
                gsap.fromTo(
                    elements,
                    { x: 300, opacity: 0 }, // start position
                    { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" } // end position
                );
            }
        });

    });

    business_strategy.addEventListener('click', function(){

        // array keeps data dynamic
        const services = [
            "/assets/images/business-stretegy-planning.jpg",
            "Business Strategy & Planning",
            "A business plan tells the story of what your business strives to be and maps out the route you’ll take to get there."
        ];
        
        // box border
        cfo_service.removeAttribute("class");
        business_process_t.removeAttribute("class");
        business_process_0.removeAttribute("class");
        business_intellegence.removeAttribute("class");
        cash_management.removeAttribute("class");
        business_strategy.setAttribute("class","cfo_service");

        // array of elements
        const elements = [image_url, service_name, service_para, more];
              
        // old content animate out
        gsap.to(elements, { 
            duration: 0.5, 
            x: -300, 
            opacity: 0, 
            ease: "power2.in",
            onComplete: () => {
                // set new content
                image_url.setAttribute("src", services[0]);
                service_name.textContent = services[1];
                service_para.textContent = services[2];
            
                // animate in from right
                gsap.fromTo(
                    elements,
                    { x: 300, opacity: 0 }, // start position
                    { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" } // end position
                );
            }
        });

        document.querySelector('.more1').setAttribute("hidden","true");
        document.querySelector('.more2').removeAttribute("hidden");
        document.querySelector('.more3').setAttribute("hidden","true");
        document.querySelector('.more4').setAttribute("hidden","true");
        document.querySelector('.more5').setAttribute("hidden","true");
        document.querySelector('.more6').setAttribute("hidden","true");

    });

    business_process_t.addEventListener('click', function(){

        // array keeps data dynamic
        const services = [
            "/assets/images/business-process-trasnformation.jpg",
            "Business Process Transformation",
            "Are you using dated processes and business practices simply because you’ve always done things that way? If so, you’re not alone."
        ];
        
        // box border
        cfo_service.removeAttribute("class");
        business_process_t.setAttribute("class","cfo_service");
        business_process_0.removeAttribute("class");
        business_intellegence.removeAttribute("class");
        cash_management.removeAttribute("class");
        business_strategy.removeAttribute("class");

        // array of elements
        const elements = [image_url, service_name, service_para, more];
              
        // old content animate out
        gsap.to(elements, { 
            duration: 0.5, 
            x: -300, 
            opacity: 0, 
            ease: "power2.in",
            onComplete: () => {
                // set new content
                image_url.setAttribute("src", services[0]);
                service_name.textContent = services[1];
                service_para.textContent = services[2];
            
                // animate in from right
                gsap.fromTo(
                    elements,
                    { x: 300, opacity: 0 }, // start position
                    { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" } // end position
                );
            }
        });

        document.querySelector('.more1').setAttribute("hidden","true");
        document.querySelector('.more2').setAttribute("hidden","true");
        document.querySelector('.more3').removeAttribute("hidden");
        document.querySelector('.more4').setAttribute("hidden","true");
        document.querySelector('.more5').setAttribute("hidden","true");
        document.querySelector('.more6').setAttribute("hidden","true");

    });

    business_process_0.addEventListener('click', function(){

        // array keeps data dynamic
        const services = [
            "/assets/images/business-process-optimising.jpg",
            "Business Process optimising",
            "Controls Optimisation is our response to the needs of businesses and its operations to have the right controls at the right cost."
        ];
        
        // box border
        cfo_service.removeAttribute("class");
        business_process_t.removeAttribute("class");
        business_process_0.setAttribute("class","cfo_service");
        business_intellegence.removeAttribute("class");
        cash_management.removeAttribute("class");
        business_strategy.removeAttribute("class");

        // array of elements
        const elements = [image_url, service_name, service_para, more];
              
        // old content animate out
        gsap.to(elements, { 
            duration: 0.5, 
            x: -300, 
            opacity: 0, 
            ease: "power2.in",
            onComplete: () => {
                // set new content
                image_url.setAttribute("src", services[0]);
                service_name.textContent = services[1];
                service_para.textContent = services[2];
            
                // animate in from right
                gsap.fromTo(
                    elements,
                    { x: 300, opacity: 0 }, // start position
                    { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" } // end position
                );
            }
        });

        document.querySelector('.more1').setAttribute("hidden","true");
        document.querySelector('.more2').setAttribute("hidden","true");
        document.querySelector('.more3').setAttribute("hidden","true");
        document.querySelector('.more4').removeAttribute("hidden");
        document.querySelector('.more5').setAttribute("hidden","true");
        document.querySelector('.more6').setAttribute("hidden","true");

    });

    business_intellegence.addEventListener('click', function(){

        // array keeps data dynamic
        const services = [
            "/assets/images/business-intelligence-analysis.jpg",
            "Business Intelligence & Analysis",
            "In Todays’ world, Google Maps has become indispensable. It plots the fastest course and helps you steer clear of problem areas in the path ahead."
        ];
        
        // box border
        cfo_service.removeAttribute("class");
        business_process_t.removeAttribute("class");
        business_process_0.removeAttribute("class");
        business_intellegence.setAttribute("class","cfo_service");
        cash_management.removeAttribute("class");
        business_strategy.removeAttribute("class");

        // array of elements
        const elements = [image_url, service_name, service_para, more];
              
        // old content animate out
        gsap.to(elements, { 
            duration: 0.5, 
            x: -300, 
            opacity: 0, 
            ease: "power2.in",
            onComplete: () => {
                // set new content
                image_url.setAttribute("src", services[0]);
                service_name.textContent = services[1];
                service_para.textContent = services[2];
            
                // animate in from right
                gsap.fromTo(
                    elements,
                    { x: 300, opacity: 0 }, // start position
                    { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" } // end position
                );
            }
        });

        document.querySelector('.more1').setAttribute("hidden","true");
        document.querySelector('.more2').setAttribute("hidden","true");
        document.querySelector('.more3').setAttribute("hidden","true");
        document.querySelector('.more4').setAttribute("hidden","true");
        document.querySelector('.more5').removeAttribute("hidden");
        document.querySelector('.more6').setAttribute("hidden","true");

    });

    cash_management.addEventListener('click', function(){

        // array keeps data dynamic
        const services = [
            "/assets/images/cash-management-funding.png",
            "Cash Management and Funding",
            "Financial stress in a startup comes from many directions. Managing cash, fundraising, meeting projections, finding the right pricing framework all contribute."
        ];
        
        // box border
        cfo_service.removeAttribute("class");
        business_process_t.removeAttribute("class");
        business_process_0.removeAttribute("class");
        business_intellegence.removeAttribute("class");
        cash_management.setAttribute("class","cfo_service");
        business_strategy.removeAttribute("class");

        // array of elements
        const elements = [image_url, service_name, service_para, more];
              
        // old content animate out
        gsap.to(elements, { 
            duration: 0.5, 
            x: -300, 
            opacity: 0, 
            ease: "power2.in",
            onComplete: () => {
                // set new content
                image_url.setAttribute("src", services[0]);
                service_name.textContent = services[1];
                service_para.textContent = services[2];
            
                // animate in from right
                gsap.fromTo(
                    elements,
                    { x: 300, opacity: 0 }, // start position
                    { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" } // end position
                );
            }
        });

        document.querySelector('.more1').setAttribute("hidden","true");
        document.querySelector('.more2').setAttribute("hidden","true");
        document.querySelector('.more3').setAttribute("hidden","true");
        document.querySelector('.more4').setAttribute("hidden","true");
        document.querySelector('.more5').setAttribute("hidden","true");
        document.querySelector('.more6').removeAttribute("hidden");

    });

// End Home Scipting **------------