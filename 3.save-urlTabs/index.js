// our application vars
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

// getting localStorage leads and rendering
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("localLeads"));
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

// storing lead on pressing enter
inputEl.addEventListener("focus", function () {
    document.addEventListener("keydown", function (e) {
        if (e.key === `Enter`) {
            myLeads.push(inputEl.value);
            updateDomAndLocalStorage();
        }
    });
});

// adding the typed lead(url)
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    updateDomAndLocalStorage();
});

// adding the current active tab
tabBtn.addEventListener("click", function () {
    getTabUrl().then((tab) => {
        myLeads.push(tab);
        updateDomAndLocalStorage();
    });
});

// deleting all the saved leads
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    // console.log(typeof myLeads);
    render(myLeads);
});

// getTabUrl().then(tab => console.log(tab))
async function getTabUrl() {
    const tab = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
    });
    // console.log(tab);
    return tab[0].url;
}

function updateDomAndLocalStorage() {
    localStorage.setItem("localLeads", JSON.stringify(myLeads));
    inputEl.value = "";
    render(myLeads);
}

// function for rendering the leads
function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}
