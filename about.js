// Start Home Scipting **------------

    // creating variable **------------
    const btn = document.querySelector('.menu_icon');
    const drawer = document.querySelector('.side-menu');
    const closeIcon = document.querySelector('.close_icon')
    const cfo = document.querySelector('.cfo'); // Replace with your actual selector
    const business = document.querySelector('.side-menu .business'); // Replace with your actual selector
    const cfoSubmenu = document.querySelector('.cfosubmenu');
    const businessSubmenu = document.querySelector('.busiesssubmenu');

    // nav items
    let cfodropdownbox = document.querySelector(".fst_dropdown_box");
    let businessdropdownbox = document.querySelector(".scnd_dropdown_box");
    let downicon1 = document.querySelector(".down_icon1");
    let downicon2 = document.querySelector(".down_icon2");

    // our service items right side
    let changeText = document.querySelector(".offer");

    // Get all necessary elements
    const dropdown1 = document.querySelector(".dropdown1");
    const dropdown2 = document.querySelector(".dropdown2");

    // about last section
    let small_circles = document.querySelectorAll('.small_circle');
    let big_circle_para = document.querySelector('.big_circle .center_p_box p')

    function smoothScrolling(){
        const scroll = new LocomotiveScroll({
            el: document.querySelector('.scroll-container'), // Replace '.scroll-container' with your actual selector
            smooth: true
        });
    }

    smoothScrolling();

    function openCloseMenu(){

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

    }

    openCloseMenu();

    // for mobile responsive sun menu
    function isOpenYaNot() {

        // CFO click
        cfo.addEventListener('click', function (e) {
            e.preventDefault();
            toggleSubmenu(cfoSubmenu, cfo , downicon1);
        });

        // Business click
        business.addEventListener('click', function (e) {
            e.preventDefault();
            toggleSubmenu(businessSubmenu, business, downicon2);
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

    function toggleDropdown1(){

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
    }

    toggleDropdown1();

    // hover on last section small circle
    small_circles.forEach(circle => {

        // change paragraph text according to hover effect
        circle.addEventListener('mouseenter', () => {

            let works = [
                "We start by scheduling an initial consultation to understand your organization, its challenges, and your specific needs. This is an opportunity for us to gather relevant information and clarify your goals.",
                "Following the initial consultation, we conduct a thorough needs assessment. This may involve reviewing your existing processes, analyzing data, conducting interviews, and gathering relevant information to gain a comprehensive understanding of your situation.",
                "Based on the needs assessment, we prepare a detailed proposal that outlines our recommended approach, scope of work, deliverables, timeline, and cost. We discuss the proposal with you, address any questions or concerns, and once agreed upon, we formalize the agreement.",
                "We work closely with you and your team to develop a collaborative plan. This includes setting clear objectives, defining key milestones, and identifying the resources and responsibilities required from both parties.",
                "With the plan in place, we initiate the execution phase by implementing the agreed-upon strategies, methodologies, and solutions. We provide regular updates on progress, address any challenges that arise, and make necessary adjustments to ensure success."
            ];

            let copy = circle.getAttribute("data");
            
            // Reset all circles to default style
            small_circles.forEach(c => {
              c.style.backgroundColor = "#fff"; // default background
              c.querySelector("h5").style.color = "#313131"; // default text color
              let svg = c.querySelector("svg");
              svg.setAttribute("stroke", "#313131"); // default stroke color
            });
        
            // Apply active style to current hovered circle
            circle.style.backgroundColor = "#313131";
            circle.querySelector("h5").style.color = "#fff";
            let svg = circle.querySelector("svg");
            svg.setAttribute("stroke", "white");
            
            if(copy == 0){
                big_circle_para.textContent = works[copy];
            }
            else if(copy == 1){
                big_circle_para.textContent = works[copy];
            }
            else if(copy == 2){
                big_circle_para.textContent = works[copy];
            }
            else if(copy == 3){
                big_circle_para.textContent = works[copy];
            }
            else{
                big_circle_para.textContent = works[copy];   
            }
        });

    });

// End Home Scipting **------------