// itemsAccordionTypeA.js
// JavaScript functionality for the accordion component

document.addEventListener('DOMContentLoaded', function() {
    // Get all accordion containers
    const accordionContainers = document.querySelectorAll('.itemsAccordionTypeA_Container');
    
    // Store all accordion instances for easy access
    const accordionInstances = [];
    
    accordionContainers.forEach(container => {
        // Get elements within each accordion
        const headerContainer = container.querySelector('.itemsAccordionTypeA_HeaderContainer');
        const contentContainer = container.querySelector('.itemsAccordionTypeA_ContentContainer');
        const toggleButton = container.querySelector('.itemsAccordionTypeA_OpenAccordion_Button');
        const buttonIcon = container.querySelector('.itemsAccordionTypeA_OpenAccordion_ButtonIcon_Default');
        
        // Set initial state (closed)
        let isOpen = false;
        contentContainer.classList.add('accordion-closed');
        
        // Create accordion instance object
        const accordionInstance = {
            container: container,
            headerContainer: headerContainer,
            contentContainer: contentContainer,
            toggleButton: toggleButton,
            buttonIcon: buttonIcon,
            isOpen: false,
            open: function() {
                this.isOpen = true;
                isOpen = true;
                
                // Remove closed class and add opening class
                this.contentContainer.classList.remove('accordion-closed');
                this.contentContainer.classList.add('accordion-opening');
                
                // Show content container
                this.contentContainer.style.display = 'block';
                
                // Animate opening
                setTimeout(() => {
                    this.contentContainer.classList.remove('accordion-opening');
                    this.contentContainer.classList.add('accordion-open');
                }, 10);
                
                // Rotate button icon
                if (this.buttonIcon) {
                    this.buttonIcon.classList.remove('accordion-icon-closed');
                    this.buttonIcon.classList.add('accordion-icon-open');
                }
                
                // Add active class for styling
                this.container.classList.add('accordion-active');
            },
            close: function() {
                this.isOpen = false;
                isOpen = false;
                
                // Add closing class
                this.contentContainer.classList.remove('accordion-open');
                this.contentContainer.classList.add('accordion-closing');
                
                // Hide content after animation
                setTimeout(() => {
                    this.contentContainer.classList.remove('accordion-closing');
                    this.contentContainer.classList.add('accordion-closed');
                    this.contentContainer.style.display = 'none';
                }, 300);
                
                // Rotate button icon back
                if (this.buttonIcon) {
                    this.buttonIcon.classList.remove('accordion-icon-open');
                    this.buttonIcon.classList.add('accordion-icon-closed');
                }
                
                // Remove active class
                this.container.classList.remove('accordion-active');
            }
        };
        
        // Add to instances array
        accordionInstances.push(accordionInstance);
        
        // Add click event listener to header
        headerContainer.addEventListener('click', function(e) {
            // Don't toggle if clicking on the button itself (to avoid double trigger)
            if (e.target.closest('.itemsAccordionTypeA_OpenAccordion_Button')) {
                return;
            }
            toggleAccordion();
        });
        
        // Add click event listener to toggle button
        toggleButton.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent header click event
            toggleAccordion();
        });
        
        function toggleAccordion() {
            if (accordionInstance.isOpen) {
                // Close accordion
                accordionInstance.close();
            } else {
                // Close all other accordions first, then open this one
                closeAllOtherAccordions();
                accordionInstance.open();
            }
        }
        
        function closeAllOtherAccordions() {
            accordionInstances.forEach(instance => {
                if (instance !== accordionInstance && instance.isOpen) {
                    instance.close();
                }
            });
        }
        
        // Add hover effects
        headerContainer.addEventListener('mouseenter', function() {
            if (!accordionInstance.isOpen) {
                headerContainer.style.cursor = 'pointer';
                headerContainer.style.transform = 'translateY(-1px)';
            }
        });
        
        headerContainer.addEventListener('mouseleave', function() {
            if (!accordionInstance.isOpen) {
                headerContainer.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Optional: Add keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const focusedElement = document.activeElement;
            const accordionContainer = focusedElement.closest('.itemsAccordionTypeA_Container');
            
            if (accordionContainer) {
                e.preventDefault();
                const headerContainer = accordionContainer.querySelector('.itemsAccordionTypeA_HeaderContainer');
                headerContainer.click();
            }
        }
    });
});

// Utility function to programmatically open/close accordion
function toggleAccordionById(accordionId) {
    const accordion = document.getElementById(accordionId);
    if (accordion) {
        const headerContainer = accordion.querySelector('.itemsAccordionTypeA_HeaderContainer');
        headerContainer.click();
    }
}

// Utility function to open all accordions
function openAllAccordions() {
    const accordionContainers = document.querySelectorAll('.itemsAccordionTypeA_Container');
    accordionContainers.forEach(container => {
        const contentContainer = container.querySelector('.itemsAccordionTypeA_ContentContainer');
        if (contentContainer.classList.contains('accordion-closed')) {
            container.querySelector('.itemsAccordionTypeA_HeaderContainer').click();
        }
    });
}

// Utility function to close all accordions
function closeAllAccordions() {
    const accordionContainers = document.querySelectorAll('.itemsAccordionTypeA_Container');
    accordionContainers.forEach(container => {
        const contentContainer = container.querySelector('.itemsAccordionTypeA_ContentContainer');
        if (!contentContainer.classList.contains('accordion-closed')) {
            container.querySelector('.itemsAccordionTypeA_HeaderContainer').click();
        }
    });
}