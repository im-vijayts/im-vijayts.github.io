// INFO FOR PROJECTS PAGE 
function init() {
    let projects = [{
            project_name: "Excel to Database converter",
            tools: "Python, Excel, SQLite3, Tkinter",
            desc: "A python program that converts excel files into database files. This program reads the data to be inserted from the excel file. After reading the data, it creates the table in the database and inserts the elements into the database.",
            link: "https://github.com/im-vijayts/excel-to-database",
        },
        {
            project_name: "Auto App Runner",
            tools: "Python, Tkinter, GUI",
            desc: "This is a GUI using Tkinter module of Python language. It stores the applications which the user wants to open and enables the user to launch those applications.",
            link: "https://github.com/im-vijayts/run-apps"
        },
        {
            project_name: "SEO Tool",
            tools: "Python, Web Scraping, Excel",
            desc: "This is a program that counts the frequency of words in a particular web page. It utilizes webcrawling and working with excel sheets.",
            link: "https://github.com/im-vijayts/SEO-tool"
        },
        {
            project_name: "Insta Downloader",
            tools: "Python, Web Scraping, File I/O",
            desc: "A non-API python script that will download images and videos from public instagram profiles. This is completely based on webcrawling.",
            link: "https://github.com/im-vijayts/instaDownloader"
        },
        {
            project_name: "Portfolio",
            tools: "HTML, CSS, JS",
            desc: "A portfolio website for myself designed in Adobe XD and developed using HTML, CSS and JS.",
            link: "https://github.com/im-vijayts/im-vijayts.github.io"
        },
        {
            project_name: "Portfolio Template",
            tools: "HTML, CSS, JS",
            desc: "A template portfolio website designed in Adobe XD and developed using HTML, CSS and JS.",
            link: "https://github.com/im-vijayts/minimalistic-portfolio"
        },
    ];

    const main = document.querySelector(".main");

    for (var index = 0; index < projects.length; index++) {
        let temp = projects[index];
        var new_div = document.createElement("div");
        new_div.innerHTML = `<div class="project-card" data-aos="fade-right" data-aos-duration="1000">
        <h1 id="name">${temp.project_name}</h1>
        <p id="tools-used">${temp.tools}</p>
        <div class="desc">
            <p>${temp.desc}</p>    
        </div>
        <div class="link">
            <p><a href="${temp.link}">Go to project</a></p>
        </div>
        </div>`
        main.appendChild(new_div);
    }
}

init();