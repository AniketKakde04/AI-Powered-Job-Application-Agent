document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const filePreview = document.getElementById('filePreview');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const skillsSection = document.getElementById('skillsSection');

    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });

    // Highlight drop zone when item is dragged over
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, unhighlight, false);
    });

    // Handle dropped files
    dropZone.addEventListener('drop', handleDrop, false);

    // Handle file input selection
    fileInput.addEventListener('change', handleFiles, false);

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight() {
        dropZone.classList.add('highlight');
    }

    function unhighlight() {
        dropZone.classList.remove('highlight');
    }

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    }

    function handleFiles(files) {
        files = files.target ? files.target.files : files;
        
        if (files.length > 0) {
            const file = files[0];
            
            if (file.type === 'application/pdf' || 
                file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                
                filePreview.textContent = `Selected: ${file.name}`;
                analyzeBtn.disabled = false;
                
                analyzeBtn.addEventListener('click', () => {
                    // More comprehensive mock skills
                    const mockSkills = [
                        'JavaScript', 
                        'React', 
                        'Node.js', 
                        'Python', 
                        'Data Analysis', 
                        'Machine Learning',
                        'Project Management',
                        'Cloud Computing',
                        'Agile Methodologies',
                        'DevOps'
                    ];

                    displaySkills(mockSkills);
                });
            } else {
                filePreview.textContent = 'Invalid file type. Please upload PDF or DOCX.';
                analyzeBtn.disabled = true;
            }
        }
    }

    function displaySkills(skills) {
        skillsSection.innerHTML = `
            <h2>Your Core Competencies</h2>
            <div class="skills-grid">
                ${skills.map(skill => `
                    <div class="skill-card">
                        <span>${skill}</span>
                    </div>
                `).join('')}
            </div>
            <button class="launch-btn">Launch Smart Search</button>
        `;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideNavMenu = navMenu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideNavMenu && !isClickOnToggle) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Handle resume upload functionality (kept from previous script)
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const filePreview = document.getElementById('filePreview');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const skillsSection = document.getElementById('skillsSection');

    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });

    // Highlight drop zone when item is dragged over
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, unhighlight, false);
    });

    // Handle dropped files
    dropZone.addEventListener('drop', handleDrop, false);

    // Handle file input selection
    fileInput.addEventListener('change', handleFiles, false);

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight() {
        dropZone.classList.add('highlight');
    }

    function unhighlight() {
        dropZone.classList.remove('highlight');
    }

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    }

    function handleFiles(files) {
        files = files.target ? files.target.files : files;
        
        if (files.length > 0) {
            const file = files[0];
            
            if (file.type === 'application/pdf' || 
                file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                
                filePreview.textContent = `Selected: ${file.name}`;
                analyzeBtn.disabled = false;
                
                analyzeBtn.addEventListener('click', () => {
                    // More comprehensive mock skills
                    const mockSkills = [
                        'JavaScript', 
                        'React', 
                        'Node.js', 
                        'Python', 
                        'Data Analysis', 
                        'Machine Learning',
                        'Project Management',
                        'Cloud Computing',
                        'Agile Methodologies',
                        'DevOps'
                    ];

                    displaySkills(mockSkills);
                });
            } else {
                filePreview.textContent = 'Invalid file type. Please upload PDF or DOCX.';
                analyzeBtn.disabled = true;
            }
        }
    }

    function displaySkills(skills) {
        skillsSection.innerHTML = `
            <h2>Your Core Competencies</h2>
            <div class="skills-grid">
                ${skills.map(skill => `
                    <div class="skill-card">
                        <span>${skill}</span>
                    </div>
                `).join('')}
            </div>
            <button class="launch-btn">Launch Smart Search</button>
        `;
    }
});
