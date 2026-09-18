/* =========================================================
   CAREBRIDGE AI - FRONTEND APPLICATION
   Competition Ready Frontend Controller
   ========================================================= */

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const S = {
    language: localStorage.getItem("cb_lang") || "English",
    region: localStorage.getItem("cb_region") || "All India",
    category: "All nutrients"
};

/* =========================================================
   LANGUAGE
   ========================================================= */

const I18N = {
    English: {
        tagline: "Healthcare Without Barriers",
        home: "Home",
        about: "About Us",
        assistant: "AI Assistant",
        nutrition: "Nutrition",
        profile: "My Profile",
        emergency: "Emergency",
        how: "How It Works",
        choose: "Choose language",
        choose_help: "Choose one language. The entire CareBridge AI interface follows it.",
        start: "Start with CareBridge AI",
        food: "Explore Food Knowledge",
        ask: "Ask",
        recommend: "Recommend for me",
        save: "Save Profile",
        search: "Search food",
        region: "State / Region",
        nutrients: "Nutrients",
        preparation: "Preparation",
        eat: "How to eat",
        ingredients: "Ingredients",
        benefits: "Benefits",
        condition: "Health need / condition",
        allergy: "Allergy or food to avoid",
        safe: "Safety first: AI guidance is educational and does not replace a doctor.",
        nonveg: "Non-Vegetarian",
        veg: "Vegetarian",
        traditional: "Traditional & Cultural",
        question: "Tell me your health or food question...",
        flow1: "Select language",
        flow2: "Tell us your need",
        flow3: "Ask by text or voice",
        flow4: "Get food + health guidance",
        flow5: "Personalize recommendations",
        flow6: "Use safely",
        flow7: "Keep learning"
    },

    Tamil: {
        tagline: "தடையற்ற சுகாதாரம்",
        home: "முகப்பு",
        about: "எங்களைப் பற்றி",
        assistant: "AI உதவியாளர்",
        nutrition: "ஊட்டச்சத்து",
        profile: "என் சுயவிவரம்",
        emergency: "அவசரம்",
        how: "எப்படி செயல்படுகிறது",
        choose: "மொழியைத் தேர்ந்தெடுக்கவும்",
        choose_help: "CareBridge AI முழு இடைமுகமும் தேர்ந்தெடுத்த மொழிக்கு மாறும்.",
        start: "CareBridge AI தொடங்குங்கள்",
        food: "உணவு அறிவை ஆராயுங்கள்",
        ask: "கேள்",
        recommend: "எனக்கு பரிந்துரைக்கவும்",
        save: "சுயவிவரத்தைச் சேமி",
        search: "உணவைத் தேடுங்கள்",
        region: "மாநிலம் / பகுதி",
        nutrients: "ஊட்டச்சத்துகள்",
        preparation: "தயாரிப்பு",
        eat: "எப்படி சாப்பிடுவது",
        ingredients: "தேவையான பொருட்கள்",
        benefits: "நன்மைகள்",
        condition: "சுகாதாரத் தேவை / நிலை",
        allergy: "ஒவ்வாமை அல்லது தவிர்க்க வேண்டிய உணவு",
        safe: "பாதுகாப்பு முதலில்: AI வழிகாட்டுதல் கல்விக்காக மட்டுமே; மருத்துவரை மாற்றாது.",
        nonveg: "அசைவம்",
        veg: "சைவம்",
        traditional: "பாரம்பரிய & கலாச்சார உணவுகள்",
        question: "உங்கள் சுகாதார அல்லது உணவு கேள்வியை எழுதுங்கள்...",
        flow1: "மொழியைத் தேர்வு செய்க",
        flow2: "உங்கள் தேவையைச் சொல்லுங்கள்",
        flow3: "உரை அல்லது குரலில் கேளுங்கள்",
        flow4: "உணவு + சுகாதார வழிகாட்டுதல் பெறுங்கள்",
        flow5: "பரிந்துரைகளை தனிப்பயனாக்குங்கள்",
        flow6: "பாதுகாப்பாகப் பயன்படுத்துங்கள்",
        flow7: "தொடர்ந்து கற்றுக்கொள்ளுங்கள்"
    },

    Malayalam: {
        tagline: "തടസ്സങ്ങളില്ലാത്ത ആരോഗ്യപരിചരണം",
        home: "ഹോം",
        about: "ഞങ്ങളെക്കുറിച്ച്",
        assistant: "AI സഹായി",
        nutrition: "പോഷണം",
        profile: "എന്റെ പ്രൊഫൈൽ",
        emergency: "അടിയന്തരം",
        how: "എങ്ങനെ പ്രവർത്തിക്കുന്നു",
        choose: "ഭാഷ തിരഞ്ഞെടുക്കുക",
        choose_help: "CareBridge AI-യുടെ മുഴുവൻ ഇന്റർഫേസും തിരഞ്ഞെടുക്കുന്ന ഭാഷയിലേക്ക് മാറും.",
        start: "CareBridge AI ആരംഭിക്കുക",
        food: "ഭക്ഷണ അറിവ്",
        ask: "ചോദിക്കുക",
        recommend: "എനിക്ക് ശുപാർശ ചെയ്യുക",
        save: "പ്രൊഫൈൽ സംരക്ഷിക്കുക",
        search: "ഭക്ഷണം തിരയുക",
        region: "സംസ്ഥാനം / പ്രദേശം",
        nutrients: "പോഷകങ്ങൾ",
        preparation: "തയ്യാറാക്കൽ",
        eat: "എങ്ങനെ കഴിക്കാം",
        ingredients: "ചേരുവകൾ",
        benefits: "ഗുണങ്ങൾ",
        condition: "ആരോഗ്യ ആവശ്യം / അവസ്ഥ",
        allergy: "അലർജി / ഒഴിവാക്കേണ്ട ഭക്ഷണം",
        safe: "സുരക്ഷ ആദ്യം: AI മാർഗ്ഗനിർദേശം വിദ്യാഭ്യാസ ആവശ്യങ്ങൾക്ക് മാത്രം; ഡോക്ടറെ പകരംവയ്ക്കില്ല.",
        nonveg: "മാംസാഹാരം",
        veg: "സസ്യാഹാരം",
        traditional: "പരമ്പരാഗത & സാംസ്കാരിക ഭക്ഷണം",
        question: "നിങ്ങളുടെ ആരോഗ്യ അല്ലെങ്കിൽ ഭക്ഷണ ചോദ്യം എഴുതുക...",
        flow1: "ഭാഷ തിരഞ്ഞെടുക്കുക",
        flow2: "ആവശ്യം പറയുക",
        flow3: "ടെക്സ്റ്റ് അല്ലെങ്കിൽ വോയ്സ് ഉപയോഗിക്കുക",
        flow4: "ഭക്ഷണം + ആരോഗ്യ മാർഗ്ഗനിർദേശം നേടുക",
        flow5: "ശുപാർശകൾ വ്യക്തിഗതമാക്കുക",
        flow6: "സുരക്ഷിതമായി ഉപയോഗിക്കുക",
        flow7: "തുടർന്ന് പഠിക്കുക"
    }
};

function txt(k) {
    return I18N[S.language]?.[k] || I18N.English[k] || k;
}

function esc(x) {
    return String(x ?? "").replace(/[&<>"']/g, c => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[c]));
}

/* =========================================================
   LANGUAGE APPLICATION
   ========================================================= */

function applyLanguage() {
    const langCodes = {
        English: "en",
        Tamil: "ta",
        Malayalam: "ml",
        Hindi: "hi",
        Telugu: "te",
        Kannada: "kn",
        Bengali: "bn",
        Marathi: "mr",
        Gujarati: "gu",
        Punjabi: "pa",
        Odia: "or",
        Assamese: "as"
    };

    document.documentElement.lang = langCodes[S.language] || "en";

    $$("[data-i18n]").forEach(el => {
        el.textContent = txt(el.dataset.i18n);
    });

    $$("[data-i18n-placeholder]").forEach(el => {
        el.placeholder = txt(el.dataset.i18nPlaceholder);
    });

    document.title = `CareBridge AI | ${S.language}`;

    localStorage.setItem("cb_lang", S.language);
}

/* =========================================================
   SCREEN NAVIGATION
   ========================================================= */

function screen(id) {
    $$(".screen").forEach(x => x.classList.remove("active"));

    const target = $("#" + id);

    if (target) {
        target.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    if (id === "profile") {
        loadProfileIntoForm();
    }
}

/* =========================================================
   API
   ========================================================= */

async function api(url, options = {}) {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
}

/* =========================================================
   SETUP
   ========================================================= */

async function setup() {

    try {
        const languages = await api("/api/languages");

        if ($("#language")) {
            $("#language").innerHTML =
                languages.languages.map(x =>
                    `<option value="${esc(x.name)}">${esc(x.name)}</option>`
                ).join("");

            $("#language").value = S.language;
        }
    } catch (e) {
        console.error("Language API error:", e);
    }

    try {
        const stats = await api("/api/food-stats");

        const options =
            '<option>All India</option>' +
            (stats.states || []).map(x =>
                `<option>${esc(x.region)}</option>`
            ).join("");

        if ($("#food-region")) {
            $("#food-region").innerHTML = options;
            $("#food-region").value = S.region;
        }

        if ($("#assistant-region")) {
            $("#assistant-region").innerHTML = options;
            $("#assistant-region").value = S.region;
        }

        if ($("#db")) {
            $("#db").textContent =
                `${Number(stats.total || 0).toLocaleString()} food records • Regional nutrition database`;
        }

    } catch (e) {
        console.error("Food stats error:", e);
    }

    applyLanguage();

    try {
        await foods();
    } catch (e) {
        console.error("Food loading error:", e);
    }

    try {
        if ($("#emergencyText")) {
            const emergency = await api("/api/emergency");
            $("#emergencyText").textContent = emergency.message || "";
        }
    } catch (e) {
        console.error("Emergency API error:", e);
    }

    injectProfileExperience();
    loadProfileIntoForm();
}

/* =========================================================
   FOOD SYSTEM
   ========================================================= */

async function foods() {

    if (!$("#search") || !$("#food-region") || !$("#foods")) {
        return;
    }

    const category =
        S.category === "All nutrients"
            ? ($("#category")?.value || "All nutrients")
            : S.category;

    const params = new URLSearchParams({
        search: $("#search").value || "",
        region: $("#food-region").value || "All India",
        category,
        language: S.language,
        limit: 12
    });

    try {

        const data = await api("/api/foods?" + params);

        if (!data.foods || !data.foods.length) {
            $("#foods").innerHTML =
                `<div class="card">No matching foods found.</div>`;
            return;
        }

        $("#foods").innerHTML = data.foods.map(foodCard).join("");

    } catch (error) {

        console.error(error);

        $("#foods").innerHTML =
            `<div class="card">
                Unable to load food information.
                Please check the backend.
            </div>`;
    }
}

function foodCard(f) {

    return `
        <article class="food-card">

            <span class="pill">${esc(f.category)}</span>
            <span class="pill">${esc(f.region)}</span>

            <h3>${esc(f.name)}</h3>

            <p>
                <b>${txt("nutrients")}:</b>
                ${esc(f.nutrients)}
            </p>

            <details>
                <summary>${txt("benefits")}</summary>
                <p>${esc(f.benefits)}</p>
            </details>

            <details>
                <summary>${txt("preparation")}</summary>
                <p>${esc(f.preparation)}</p>
            </details>

            <details>
                <summary>${txt("eat")}</summary>
                <p>${esc(f.how_to_eat)}</p>
            </details>

            <details>
                <summary>${txt("ingredients")}</summary>
                <p>${esc(f.ingredients)}</p>
            </details>

            <p>${esc(f.localized_note)}</p>

        </article>
    `;
}

/* =========================================================
   AI ASSISTANT
   ========================================================= */

async function askAI() {

    const question =
        $("#question")?.value.trim() ||
        $("#need")?.value.trim();

    if (!question) {
        alert("Please enter your question first.");
        return;
    }

    if ($("#answer")) {
        $("#answer").textContent = "CareBridge AI is thinking...";
    }

    try {

        const data = await api("/api/assistant", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: question,
                language: S.language,
                region: $("#assistant-region")?.value || S.region,
                condition: $("#need")?.value || "",
                avoid: $("#avoid")?.value || "",
                history: S.assistantHistory || []
            })
        });

        if ($("#answer")) {

            $("#answer").textContent =
                data.answer ||
                "CareBridge AI could not generate a response.";

        }

        // Create conversation history if it does not exist
        if (!S.assistantHistory) {
            S.assistantHistory = [];
        }

        // Save user's message
        S.assistantHistory.push({
            role: "user",
            content: question
        });

        // Save AI response
        if (data.answer) {
            S.assistantHistory.push({
                role: "assistant",
                content: data.answer
            });
        }

        // Clear question box after successful request
        if ($("#question")) {
            $("#question").value = "";
        }

    } catch (error) {

        console.error("AI Assistant Error:", error);

        if ($("#answer")) {
            $("#answer").textContent =
                "Unable to connect to the CareBridge AI backend. Please check that the Flask server is running.";
        }
    }
}
/* =========================================================
   AI RECOMMENDATION
   ========================================================= */

async function recommend() {

    try {

        const data = await api("/api/recommend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                condition:
                    $("#need")?.value || "general nutrition",

                region:
                    $("#assistant-region")?.value || S.region,

                language:
                    S.language
            })
        });

        screen("nutrition");

        if ($("#food-region") && $("#assistant-region")) {
            $("#food-region").value =
                $("#assistant-region").value;
        }

        S.category = "All nutrients";

        if ($("#category")) {
            $("#category").value = "All nutrients";
        }

        if (!$("#foods")) return;

        $("#foods").innerHTML =
            (data.foods || []).map(f => `
                <article class="food-card">

                    <span class="pill">AI PICK</span>

                    <h3>${esc(f.name)}</h3>

                    <p>
                        <b>${txt("nutrients")}:</b>
                        ${esc(f.nutrients)}
                    </p>

                    <details open>
                        <summary>${txt("benefits")}</summary>
                        <p>${esc(f.benefits)}</p>
                    </details>

                    <details>
                        <summary>${txt("preparation")}</summary>
                        <p>${esc(f.preparation)}</p>
                    </details>

                    <details>
                        <summary>${txt("eat")}</summary>
                        <p>${esc(f.how_to_eat)}</p>
                    </details>

                    <p>${esc(f.localized_note)}</p>

                </article>
            `).join("");

    } catch (error) {

        console.error(error);

        alert("Unable to generate recommendations.");
    }
}

/* =========================================================
   PROFILE DATA MODEL
   ========================================================= */

function getProfile() {

    try {

        return JSON.parse(
            localStorage.getItem("cb_complete_profile") || "{}"
        );

    } catch {

        return {};
    }
}

function saveProfileLocal(profile) {

    localStorage.setItem(
        "cb_complete_profile",
        JSON.stringify(profile)
    );

    localStorage.setItem(
        "cb_profile",
        JSON.stringify(profile)
    );
}

/* =========================================================
   PROFILE EXPERIENCE
   ========================================================= */

function injectProfileExperience() {

    if (document.getElementById("cbProfileWizard")) {
        return;
    }

    const profileScreen = $("#profile");

    if (!profileScreen) {
        return;
    }

    const oldForm = profileScreen.querySelector(".form");

    /*
       Keep the original profile form hidden.
       The new wizard handles the complete profile.
    */

    if (oldForm) {
        oldForm.style.display = "none";
    }

    const wizard = document.createElement("div");

    wizard.id = "cbProfileWizard";

    wizard.innerHTML = `

        <div class="cb-profile-shell">

            <div class="cb-profile-header">

                <div>
                    <span class="eyebrow">PERSONAL CARE PROFILE</span>

                    <h3>
                        Build your CareBridge health profile
                    </h3>

                    <p>
                        Complete the information step by step.
                        Your profile helps personalize nutrition,
                        health education and care-support suggestions.
                    </p>
                </div>

                <div class="cb-profile-security">
                    🔐 Secure<br>
                    <small>Profile data</small>
                </div>

            </div>


            <div class="cb-progress">

                <div class="cb-progress-line">
                    <span id="cbProgressBar"></span>
                </div>

                <div class="cb-progress-label">
                    <span id="cbStepText">
                        Step 1 of 5
                    </span>

                    <span id="cbProgressPercent">
                        20%
                    </span>
                </div>

            </div>


            <!-- STEP 1 -->

            <section class="cb-step active" data-step="1">

                <div class="cb-step-title">
                    <span>01</span>

                    <div>
                        <h3>Basic Information</h3>
                        <p>
                            Start with your basic personal details.
                        </p>
                    </div>
                </div>


                <div class="cb-grid">

                    <label>
                        Age *
                        <input
                            id="cbAge"
                            type="number"
                            min="1"
                            max="120"
                            placeholder="Enter your age">
                    </label>

                    <label>
                        Height (cm)
                        <input
                            id="cbHeight"
                            type="number"
                            placeholder="Example: 175">
                    </label>

                    <label>
                        Weight (kg)
                        <input
                            id="cbWeight"
                            type="number"
                            step="0.1"
                            placeholder="Example: 65">
                    </label>

                    <label>
                        Blood Group
                        <select id="cbBloodGroup">
                            <option value="">Select blood group</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                            <option>Unknown</option>
                        </select>
                    </label>

                    <label>
                        Sex
                        <select id="cbSex">
                            <option>Prefer not to say</option>
                            <option>Female</option>
                            <option>Male</option>
                        </select>
                    </label>

                    <label>
                        State / Region
                        <select id="cbRegion">
                            <option>All India</option>
                        </select>
                    </label>

                </div>

            </section>


            <!-- STEP 2 -->

            <section class="cb-step" data-step="2">

                <div class="cb-step-title">
                    <span>02</span>

                    <div>
                        <h3>Climate & Environment</h3>
                        <p>
                            Tell CareBridge about the environment
                            where you normally live.
                        </p>
                    </div>
                </div>


                <div class="cb-choice-grid">

                    <button
                        type="button"
                        class="cb-choice"
                        data-climate="warm">
                        ☀️
                        <strong>Warm Area</strong>
                        <small>
                            Hot / warm climate
                        </small>
                    </button>

                    <button
                        type="button"
                        class="cb-choice"
                        data-climate="hot">
                        🌡️
                        <strong>Hot Area</strong>
                        <small>
                            High temperature environment
                        </small>
                    </button>

                    <button
                        type="button"
                        class="cb-choice"
                        data-climate="cold">
                        ❄️
                        <strong>Cold Area</strong>
                        <small>
                            Cool / cold climate
                        </small>
                    </button>

                    <button
                        type="button"
                        class="cb-choice"
                        data-climate="mixed">
                        🌦️
                        <strong>Mixed Climate</strong>
                        <small>
                            Climate changes by season
                        </small>
                    </button>

                </div>


                <label>
                    Current environment
                    <textarea
                        id="cbEnvironment"
                        placeholder="Example: Urban area, rural area, coastal area, dry area..."></textarea>
                </label>

            </section>


            <!-- STEP 3 -->

            <section class="cb-step" data-step="3">

                <div class="cb-step-title">
                    <span>03</span>

                    <div>
                        <h3>Health & Medical Care</h3>
                        <p>
                            Add health information that may help
                            personalize your CareBridge experience.
                        </p>
                    </div>
                </div>


                <div class="cb-grid">

                    <label>
                        Current health problem
                        <textarea
                            id="cbHealthProblem"
                            placeholder="Describe any current health problem..."></textarea>
                    </label>

                    <label>
                        Medical care / personal advice
                        <textarea
                            id="cbMedicalCare"
                            placeholder="Any medical care, advice or support you currently follow..."></textarea>
                    </label>

                    <label>
                        Allergy / food to avoid
                        <textarea
                            id="cbAllergy"
                            placeholder="List allergies or foods to avoid..."></textarea>
                    </label>

                    <label>
                        Long-term medication
                        <textarea
                            id="cbMedication"
                            placeholder="Mention long-term medicines if applicable..."></textarea>
                    </label>

                </div>

            </section>


            <!-- STEP 4 -->

            <section class="cb-step" data-step="4">

                <div class="cb-step-title">
                    <span>04</span>

                    <div>
                        <h3>Long-Term Health Conditions</h3>
                        <p>
                            Select conditions that you want CareBridge
                            to consider when personalizing support.
                        </p>
                    </div>
                </div>


                <div class="cb-condition-grid">

                    <label class="cb-check">
                        <input
                            type="checkbox"
                            value="Diabetes"
                            name="cbCondition">
                        <span>Diabetes</span>
                    </label>

                    <label class="cb-check">
                        <input
                            type="checkbox"
                            value="Thyroid"
                            name="cbCondition">
                        <span>Thyroid</span>
                    </label>

                    <label class="cb-check">
                        <input
                            type="checkbox"
                            value="Cancer"
                            name="cbCondition">
                        <span>Cancer</span>
                    </label>

                    <label class="cb-check">
                        <input
                            type="checkbox"
                            value="Heart condition"
                            name="cbCondition">
                        <span>Heart condition</span>
                    </label>

                    <label class="cb-check">
                        <input
                            type="checkbox"
                            value="Blood pressure"
                            name="cbCondition">
                        <span>Blood pressure</span>
                    </label>

                    <label class="cb-check">
                        <input
                            type="checkbox"
                            value="Kidney condition"
                            name="cbCondition">
                        <span>Kidney condition</span>
                    </label>

                    <label class="cb-check">
                        <input
                            type="checkbox"
                            value="Liver condition"
                            name="cbCondition">
                        <span>Liver condition</span>
                    </label>

                    <label class="cb-check">
                        <input
                            type="checkbox"
                            value="Other chronic condition"
                            name="cbCondition">
                        <span>Other chronic condition</span>
                    </label>

                </div>


                <label>
                    Other condition / additional information
                    <textarea
                        id="cbOtherCondition"
                        placeholder="Add any other relevant health information..."></textarea>
                </label>

            </section>


            <!-- STEP 5 -->

            <section class="cb-step" data-step="5">

                <div class="cb-step-title">
                    <span>05</span>

                    <div>
                        <h3>Personalized Care & Sync</h3>
                        <p>
                            Choose how CareBridge should handle
                            your profile information.
                        </p>
                    </div>
                </div>


                <div class="cb-sync-card">

                    <div class="cb-sync-icon">
                        🔐
                    </div>

                    <div>
                        <h3>
                            Secure profile processing
                        </h3>

                        <p>
                            Your completed profile is prepared for
                            personalized CareBridge support.
                        </p>
                    </div>

                </div>


                <div class="cb-sync-options">

                    <button
                        type="button"
                        class="cb-sync-option active"
                        data-sync="yes">

                        <strong>
                            ☁️ Yes — Sync to server
                        </strong>

                        <small>
                            Send profile information to the
                            CareBridge server when internet is available.
                        </small>

                    </button>


                    <button
                        type="button"
                        class="cb-sync-option"
                        data-sync="no">

                        <strong>
                            📱 No — Keep offline
                        </strong>

                        <small>
                            Keep information locally and prepare it
                            for later synchronization.
                        </small>

                    </button>

                </div>


                <div class="cb-summary">

                    <h3>Profile completion</h3>

                    <div id="cbSummary">
                        Complete all required information
                        before saving.
                    </div>

                </div>

            </section>


            <!-- SUCCESS -->

            <section
                class="cb-success"
                id="cbProfileSuccess">

                <div class="cb-success-icon">
                    ✓
                </div>

                <h2>
                    Information collected successfully
                </h2>

                <p>
                    Your CareBridge profile has been processed.
                </p>

                <div class="cb-success-status">

                    <div>
                        <span>🔐</span>
                        Secure data collection
                    </div>

                    <div>
                        <span>🔄</span>
                        Synchronization status
                    </div>

                    <div id="cbServerStatus">
                        Server synchronization pending
                    </div>

                </div>

                <button
                    type="button"
                    class="primary"
                    id="cbOpenCare">

                    Open Personalized Care Dashboard

                </button>

            </section>


            <!-- NAVIGATION -->

            <div class="cb-wizard-actions">

                <button
                    type="button"
                    class="secondary"
                    id="cbBack">

                    ← Back

                </button>

                <button
                    type="button"
                    class="primary"
                    id="cbContinue">

                    Continue →

                </button>

            </div>

        </div>
    `;

    profileScreen.appendChild(wizard);

    injectProfileStyles();

    setupProfileWizard();
}

/* =========================================================
   PROFILE STYLES
   ========================================================= */

function injectProfileStyles() {

    if (document.getElementById("cbProfileStyles")) {
        return;
    }

    const style = document.createElement("style");

    style.id = "cbProfileStyles";

    style.textContent = `

        #cbProfileWizard {
            width: 100%;
            margin-top: 10px;
        }

        .cb-profile-shell {
            background: #ffffff;
            border: 1px solid #d9e7f0;
            border-radius: 24px;
            padding: 28px;
            box-shadow: 0 18px 50px rgba(11,111,168,.10);
        }

        .cb-profile-header {
            display: flex;
            justify-content: space-between;
            gap: 25px;
            align-items: flex-start;
            margin-bottom: 25px;
        }

        .cb-profile-header h3 {
            margin: 7px 0;
            font-size: 27px;
        }

        .cb-profile-header p {
            color: #607085;
            max-width: 700px;
            line-height: 1.6;
        }

        .cb-profile-security {
            background: #eef8ff;
            border: 1px solid #cde8f8;
            color: #0875ad;
            border-radius: 16px;
            padding: 14px 18px;
            text-align: center;
            font-weight: 800;
            min-width: 125px;
        }

        .cb-profile-security small {
            font-weight: 500;
            color: #607085;
        }

        .cb-progress {
            margin-bottom: 30px;
        }

        .cb-progress-line {
            width: 100%;
            height: 7px;
            border-radius: 20px;
            background: #e9f0f5;
            overflow: hidden;
        }

        #cbProgressBar {
            display: block;
            width: 20%;
            height: 100%;
            background: linear-gradient(90deg,#08794f,#0b6fa8);
            transition: width .35s ease;
        }

        .cb-progress-label {
            display: flex;
            justify-content: space-between;
            margin-top: 8px;
            color: #607085;
            font-size: 13px;
            font-weight: 700;
        }

        .cb-step {
            display: none;
            animation: cbSlide .3s ease;
        }

        .cb-step.active {
            display: block;
        }

        @keyframes cbSlide {
            from {
                opacity: 0;
                transform: translateX(12px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .cb-step-title {
            display: flex;
            gap: 16px;
            align-items: center;
            margin-bottom: 22px;
        }

        .cb-step-title > span {
            display: grid;
            place-items: center;
            width: 48px;
            height: 48px;
            border-radius: 14px;
            background: #eaf6ff;
            color: #0b6fa8;
            font-weight: 900;
        }

        .cb-step-title h3 {
            margin: 0;
            font-size: 23px;
        }

        .cb-step-title p {
            margin: 4px 0 0;
            color: #607085;
        }

        .cb-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        .cb-grid label {
            margin: 0;
        }

        .cb-grid textarea {
            min-height: 105px;
        }

        .cb-choice-grid {
            display: grid;
            grid-template-columns: repeat(4,1fr);
            gap: 12px;
            margin-bottom: 18px;
        }

        .cb-choice {
            background: #fff;
            border: 1px solid #d8e5ec;
            border-radius: 16px;
            padding: 18px 12px;
            display: flex;
            flex-direction: column;
            gap: 7px;
            align-items: center;
            color: #102238;
            transition: .2s;
        }

        .cb-choice:hover,
        .cb-choice.selected {
            border-color: #0b6fa8;
            background: #eef8ff;
            transform: translateY(-2px);
        }

        .cb-choice strong {
            font-size: 15px;
        }

        .cb-choice small {
            color: #607085;
            font-size: 12px;
            text-align: center;
        }

        .cb-condition-grid {
            display: grid;
            grid-template-columns: repeat(4,1fr);
            gap: 10px;
            margin-bottom: 20px;
        }

        .cb-check {
            display: flex;
            align-items: center;
            gap: 9px;
            border: 1px solid #d8e5ec;
            border-radius: 13px;
            padding: 13px;
            background: #fff;
            cursor: pointer;
            margin: 0;
        }

        .cb-check:hover {
            background: #f4faff;
        }

        .cb-check input {
            width: auto;
        }

        .cb-sync-card {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 18px;
            border-radius: 17px;
            background: linear-gradient(135deg,#eff9ff,#f3fcf8);
            border: 1px solid #d6eaf4;
            margin-bottom: 16px;
        }

        .cb-sync-card h3 {
            margin: 0 0 5px;
        }

        .cb-sync-card p {
            margin: 0;
            color: #607085;
        }

        .cb-sync-icon {
            font-size: 30px;
            width: 55px;
            height: 55px;
            display: grid;
            place-items: center;
            background: #fff;
            border-radius: 15px;
        }

        .cb-sync-options {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .cb-sync-option {
            text-align: left;
            background: #fff;
            border: 1px solid #d8e5ec;
            border-radius: 15px;
            padding: 17px;
        }

        .cb-sync-option.active {
            border-color: #0b6fa8;
            background: #eef8ff;
        }

        .cb-sync-option strong {
            display: block;
            margin-bottom: 7px;
        }

        .cb-sync-option small {
            color: #607085;
            line-height: 1.5;
        }

        .cb-summary {
            margin-top: 17px;
            padding: 17px;
            background: #f7fafc;
            border-radius: 15px;
        }

        .cb-summary h3 {
            margin-top: 0;
        }

        .cb-success {
            display: none;
            text-align: center;
            padding: 40px 15px;
        }

        .cb-success.active {
            display: block;
            animation: cbSlide .35s ease;
        }

        .cb-success-icon {
            width: 72px;
            height: 72px;
            display: grid;
            place-items: center;
            margin: auto;
            border-radius: 50%;
            background: #e6f8ef;
            color: #08794f;
            font-size: 40px;
            font-weight: 900;
        }

        .cb-success h2 {
            margin: 17px 0 8px;
        }

        .cb-success p {
            color: #607085;
        }

        .cb-success-status {
            max-width: 650px;
            margin: 20px auto;
            display: grid;
            gap: 8px;
        }

        .cb-success-status div {
            padding: 12px;
            background: #f5faf8;
            border-radius: 10px;
            color: #355f50;
        }

        .cb-wizard-actions {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            margin-top: 28px;
            padding-top: 20px;
            border-top: 1px solid #e4edf2;
        }

        @media(max-width:850px) {

            .cb-choice-grid {
                grid-template-columns: 1fr 1fr;
            }

            .cb-condition-grid {
                grid-template-columns: 1fr 1fr;
            }

        }

        @media(max-width:600px) {

            .cb-profile-shell {
                padding: 18px;
            }

            .cb-profile-header {
                flex-direction: column;
            }

            .cb-grid,
            .cb-choice-grid,
            .cb-condition-grid,
            .cb-sync-options {
                grid-template-columns: 1fr;
            }

        }
    `;

    document.head.appendChild(style);
}

/* =========================================================
   PROFILE WIZARD LOGIC
   ========================================================= */

let profileStep = 1;

const PROFILE_TOTAL_STEPS = 5;

function setupProfileWizard() {

    const wizard = $("#cbProfileWizard");

    if (!wizard) return;

    $$(".cb-choice").forEach(button => {

        button.addEventListener("click", () => {

            $$(".cb-choice").forEach(x =>
                x.classList.remove("selected")
            );

            button.classList.add("selected");

        });

    });


    $$(".cb-sync-option").forEach(button => {

        button.addEventListener("click", () => {

            $$(".cb-sync-option").forEach(x =>
                x.classList.remove("active")
            );

            button.classList.add("active");
        });

    });


    $("#cbBack")?.addEventListener("click", () => {

        if (profileStep > 1) {

            profileStep--;

            showProfileStep(profileStep);
        }

    });


    $("#cbContinue")?.addEventListener("click", async () => {

        if (!validateProfileStep(profileStep)) {
            return;
        }

        if (profileStep < PROFILE_TOTAL_STEPS) {

            collectCurrentProfile();

            profileStep++;

            showProfileStep(profileStep);

        } else {

            await finalizeProfile();
        }

    });


    $("#cbOpenCare")?.addEventListener("click", () => {

        openPersonalizedDashboard();

    });


    showProfileStep(1);
}

function showProfileStep(step) {

    profileStep = step;

    $$(".cb-step").forEach(section => {

        section.classList.toggle(
            "active",
            Number(section.dataset.step) === step
        );

    });

    const percent =
        Math.round((step / PROFILE_TOTAL_STEPS) * 100);

    if ($("#cbProgressBar")) {
        $("#cbProgressBar").style.width =
            percent + "%";
    }

    if ($("#cbProgressPercent")) {
        $("#cbProgressPercent").textContent =
            percent + "%";
    }

    if ($("#cbStepText")) {
        $("#cbStepText").textContent =
            `Step ${step} of ${PROFILE_TOTAL_STEPS}`;
    }

    if ($("#cbBack")) {
        $("#cbBack").style.visibility =
            step === 1 ? "hidden" : "visible";
    }

    if ($("#cbContinue")) {

        $("#cbContinue").textContent =
            step === PROFILE_TOTAL_STEPS
                ? "Save Secure Profile ✓"
                : "Continue →";
    }

    if (step === 5) {
        updateProfileSummary();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* =========================================================
   PROFILE VALIDATION
   ========================================================= */

function validateProfileStep(step) {

    if (step === 1) {

        const age =
            Number($("#cbAge")?.value || 0);

        if (!age) {

            alert("Please enter your age.");

            $("#cbAge")?.focus();

            return false;
        }

        if (age < 18) {

            alert(
                "CareBridge profile saving requires the user to be 18 years or older."
            );

            $("#cbAge")?.focus();

            return false;
        }
    }

    return true;
}

/* =========================================================
   COLLECT PROFILE
   ========================================================= */

function collectCurrentProfile() {

    const climate =
        document.querySelector(".cb-choice.selected")
            ?.dataset.climate || "";

    const sync =
        document.querySelector(".cb-sync-option.active")
            ?.dataset.sync || "yes";

    const conditions =
        $$('input[name="cbCondition"]:checked')
            .map(x => x.value);

    const oldProfile = getProfile();

    const profile = {

        ...oldProfile,

        age: $("#cbAge")?.value || "",
        height: $("#cbHeight")?.value || "",
        weight: $("#cbWeight")?.value || "",
        bloodGroup: $("#cbBloodGroup")?.value || "",
        sex: $("#cbSex")?.value || "",

        region:
            $("#cbRegion")?.value ||
            S.region,

        climate,

        environment:
            $("#cbEnvironment")?.value || "",

        healthProblem:
            $("#cbHealthProblem")?.value || "",

        medicalCare:
            $("#cbMedicalCare")?.value || "",

        allergy:
            $("#cbAllergy")?.value || "",

        longTermMedication:
            $("#cbMedication")?.value || "",

        chronicConditions: conditions,

        otherCondition:
            $("#cbOtherCondition")?.value || "",

        syncPreference: sync,

        language: S.language,

        updatedAt:
            new Date().toISOString()

    };

    saveProfileLocal(profile);

    return profile;
}

/* =========================================================
   PROFILE SUMMARY
   ========================================================= */

function updateProfileSummary() {

    const profile = collectCurrentProfile();

    const conditions =
        profile.chronicConditions?.length
            ? profile.chronicConditions.join(", ")
            : "None selected";

    if ($("#cbSummary")) {

        $("#cbSummary").innerHTML = `

            <p>
                <b>Age:</b>
                ${esc(profile.age || "Not entered")}
            </p>

            <p>
                <b>Blood Group:</b>
                ${esc(profile.bloodGroup || "Not entered")}
            </p>

            <p>
                <b>Climate:</b>
                ${esc(profile.climate || "Not selected")}
            </p>

            <p>
                <b>Health Problem:</b>
                ${esc(profile.healthProblem || "Not entered")}
            </p>

            <p>
                <b>Long-term Conditions:</b>
                ${esc(conditions)}
            </p>

            <p>
                <b>Data Mode:</b>
                ${profile.syncPreference === "yes"
                    ? "Server synchronization"
                    : "Offline storage"}
            </p>

        `;
    }
}

/* =========================================================
   LOAD SAVED PROFILE
   ========================================================= */

function loadProfileIntoForm() {

    const profile = getProfile();

    if (!profile || !Object.keys(profile).length) {
        return;
    }

    if ($("#cbAge")) $("#cbAge").value = profile.age || "";
    if ($("#cbHeight")) $("#cbHeight").value = profile.height || "";
    if ($("#cbWeight")) $("#cbWeight").value = profile.weight || "";
    if ($("#cbBloodGroup")) $("#cbBloodGroup").value = profile.bloodGroup || "";
    if ($("#cbSex")) $("#cbSex").value = profile.sex || "";
    if ($("#cbEnvironment")) $("#cbEnvironment").value = profile.environment || "";
    if ($("#cbHealthProblem")) $("#cbHealthProblem").value = profile.healthProblem || "";
    if ($("#cbMedicalCare")) $("#cbMedicalCare").value = profile.medicalCare || "";
    if ($("#cbAllergy")) $("#cbAllergy").value = profile.allergy || "";
    if ($("#cbMedication")) $("#cbMedication").value = profile.longTermMedication || "";
    if ($("#cbOtherCondition")) $("#cbOtherCondition").value = profile.otherCondition || "";

    if ($("#cbRegion") && profile.region) {
        $("#cbRegion").value = profile.region;
    }

    $$(".cb-choice").forEach(button => {

        button.classList.toggle(
            "selected",
            button.dataset.climate === profile.climate
        );

    });

    $$('input[name="cbCondition"]').forEach(box => {

        box.checked =
            (profile.chronicConditions || [])
                .includes(box.value);

    });

    $$(".cb-sync-option").forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.sync ===
                (profile.syncPreference || "yes")
        );

    });
}

/* =========================================================
   FINAL PROFILE SAVE
   ========================================================= */

async function finalizeProfile() {

    const profile = collectCurrentProfile();

    const age = Number(profile.age || 0);

    if (age < 18) {

        alert(
            "The profile can only be saved when age is 18 or above."
        );

        profileStep = 1;

        showProfileStep(1);

        return;
    }

    /*
       Local secure-processing simulation.
       The browser stores the complete profile so that
       the user can continue even when temporarily offline.
    */

    saveProfileLocal(profile);

    let serverSynced = false;

    /*
       Only send to server when the user selected
       online synchronization.
    */

    if (
        profile.syncPreference === "yes" &&
        navigator.onLine
    ) {

        try {

            /*
               Send the fields expected by the existing
               backend, plus additional fields.
               Existing Flask backend can continue working
               even if it only uses the original fields.
            */

            const payload = {

                age: profile.age,
                height: profile.height,
                weight: profile.weight,
                sex: profile.sex,

                condition:
                    [
                        profile.healthProblem,
                        ...(profile.chronicConditions || []),
                        profile.otherCondition
                    ]
                    .filter(Boolean)
                    .join(", "),

                allergy:
                    profile.allergy,

                language:
                    profile.language,

                blood_group:
                    profile.bloodGroup,

                region:
                    profile.region,

                climate:
                    profile.climate,

                environment:
                    profile.environment,

                medical_care:
                    profile.medicalCare,

                long_term_medication:
                    profile.longTermMedication,

                chronic_conditions:
                    profile.chronicConditions,

                other_condition:
                    profile.otherCondition

            };

            await api("/api/profile", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(payload)

            });

            serverSynced = true;

        } catch (error) {

            console.warn(
                "Server sync failed. Keeping profile offline.",
                error
            );

        }
    }

    /*
       Store synchronization state.
    */

    profile.serverSynced = serverSynced;

    profile.syncStatus =
        serverSynced
            ? "Server synchronization complete"
            : profile.syncPreference === "no"
                ? "Offline data saved — synchronization later"
                : "Offline data saved — server synchronization pending";

    profile.savedAt =
        new Date().toISOString();

    saveProfileLocal(profile);

    /*
       Hide wizard steps and display success screen.
    */

    $$(".cb-step").forEach(x =>
        x.classList.remove("active")
    );

    $("#cbProfileSuccess")?.classList.add("active");

    $(".cb-wizard-actions")?.style.setProperty(
        "display",
        "none"
    );

    if ($("#cbServerStatus")) {

        $("#cbServerStatus").textContent =
            profile.syncStatus;

    }
}

/* =========================================================
   PERSONALIZED CARE DASHBOARD
   ========================================================= */

function openPersonalizedDashboard() {

    const profile = getProfile();

    const existing =
        document.getElementById("cbCareDashboard");

    if (existing) {
        existing.remove();
    }

    const dashboard =
        document.createElement("div");

    dashboard.id =
        "cbCareDashboard";

    dashboard.innerHTML = `

        <div class="cb-profile-shell">

            <div class="cb-profile-header">

                <div>

                    <span class="eyebrow">
                        PERSONALIZED CARE
                    </span>

                    <h3>
                        Your CareBridge Dashboard
                    </h3>

                    <p>
                        Your profile is ready for personalized
                        educational support.
                    </p>

                </div>

                <div class="cb-profile-security">
                    🛡️
                    <br>
                    <small>Care Support</small>
                </div>

            </div>


            <div class="cb-grid">

                <div class="card">

                    <h3>👤 Personal Profile</h3>

                    <p>
                        <b>Age:</b>
                        ${esc(profile.age || "Not available")}
                    </p>

                    <p>
                        <b>Blood Group:</b>
                        ${esc(profile.bloodGroup || "Not available")}
                    </p>

                    <p>
                        <b>Region:</b>
                        ${esc(profile.region || "Not available")}
                    </p>

                    <p>
                        <b>Climate:</b>
                        ${esc(profile.climate || "Not available")}
                    </p>

                </div>


                <div class="card">

                    <h3>❤️ Health Support</h3>

                    <p>
                        <b>Health problem:</b>
                        ${esc(profile.healthProblem || "None provided")}
                    </p>

                    <p>
                        <b>Long-term conditions:</b>
                        ${esc(
                            profile.chronicConditions?.length
                                ? profile.chronicConditions.join(", ")
                                : "None selected"
                        )}
                    </p>

                    <p>
                        <b>Medication:</b>
                        ${esc(profile.longTermMedication || "None provided")}
                    </p>

                </div>


                <div class="card">

                    <h3>🌿 Nutrition Personalization</h3>

                    <p>
                        CareBridge can use your region,
                        health goals, food preferences and
                        nutrition needs to provide educational
                        food guidance.
                    </p>

                    <button
                        class="primary"
                        data-action="nutrition">

                        Explore Personalized Nutrition

                    </button>

                </div>


                <div class="card">

                    <h3>🧠 AI Care Assistant</h3>

                    <p>
                        Ask questions using text or voice and
                        receive educational health and nutrition
                        guidance.
                    </p>

                    <button
                        class="primary"
                        data-action="assistant">

                        Open AI Assistant

                    </button>

                </div>

            </div>


            <div class="card" style="margin-top:15px">

                <h3>
                    🔄 Data Synchronization
                </h3>

                <p>
                    ${esc(
                        profile.syncStatus ||
                        "Profile saved locally."
                    )}
                </p>

            </div>

        </div>
    `;

    $("#profile")?.appendChild(dashboard);

    /*
       Re-enable navigation buttons for dashboard.
    */

    dashboard
        .querySelectorAll("[data-action]")
        .forEach(button => {

            button.addEventListener("click", () => {

                screen(
                    button.dataset.action
                );

            });

        });

    dashboard.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/* =========================================================
   NAVIGATION
   ========================================================= */

document.addEventListener("click", event => {

    const button =
        event.target.closest("[data-action]");

    if (!button) {
        return;
    }

    event.preventDefault();

    screen(button.dataset.action);

});

/* =========================================================
   LANGUAGE
   ========================================================= */

$("#language")?.addEventListener(
    "change",
    async event => {

        S.language =
            event.target.value;

        applyLanguage();

        await foods();
    }
);

/* =========================================================
   REGION
   ========================================================= */

$("#food-region")?.addEventListener(
    "change",
    event => {

        S.region =
            event.target.value;

        localStorage.setItem(
            "cb_region",
            S.region
        );

        foods();
    }
);

$("#assistant-region")?.addEventListener(
    "change",
    event => {

        S.region =
            event.target.value;

        localStorage.setItem(
            "cb_region",
            S.region
        );
    }
);

/* =========================================================
   FOOD SEARCH
   ========================================================= */

$("#search")?.addEventListener(
    "input",
    () => {

        clearTimeout(window.cbFoodTimer);

        window.cbFoodTimer =
            setTimeout(
                foods,
                250
            );
    }
);

$("#category")?.addEventListener(
    "change",
    foods
);

/* =========================================================
   DIET BUTTONS
   ========================================================= */

$$(".diet").forEach(button => {

    button.addEventListener(
        "click",
        () => {

            $$(".diet").forEach(x =>
                x.classList.remove("active")
            );

            button.classList.add("active");

            S.category =
                button.dataset.cat;

            foods();
        }
    );
});

/* =========================================================
   AI BUTTONS
   ========================================================= */

$("#ask")?.addEventListener(
    "click",
    askAI
);

$("#recommend")?.addEventListener(
    "click",
    recommend
);

/* =========================================================
   VOICE INPUT
   ========================================================= */

$("#voice")?.addEventListener(
    "click",
    () => {

        const Recognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!Recognition) {

            alert(
                "Voice recognition is not supported in this browser. Text input is still available."
            );

            return;
        }

        const recognition =
            new Recognition();

        recognition.lang =
            document.documentElement.lang +
            "-IN";

        recognition.interimResults =
            false;

        recognition.maxAlternatives =
            1;

        recognition.onstart = () => {

            if ($("#voice")) {
                $("#voice").textContent =
                    "🎙 Listening...";
            }

        };

        recognition.onend = () => {

            if ($("#voice")) {
                $("#voice").textContent =
                    "🎙 Voice / Text";
            }

        };

        recognition.onerror = () => {

            if ($("#voice")) {
                $("#voice").textContent =
                    "🎙 Voice / Text";
            }

        };

        recognition.onresult = event => {

            const transcript =
                event.results[0][0].transcript;

            if ($("#question")) {
                $("#question").value =
                    transcript;
            }

            askAI();
        };

        recognition.start();
    }
);

/* =========================================================
   OLD PROFILE SAVE BUTTON
   Keep compatibility with existing HTML.
   ========================================================= */

$("#save")?.addEventListener(
    "click",
    async () => {

        const profile = {

            age: $("#age")?.value || "",
            height: $("#height")?.value || "",
            weight: $("#weight")?.value || "",
            sex: $("#sex")?.value || "",
            condition: $("#pcondition")?.value || "",
            allergy: $("#pallergy")?.value || "",
            language: S.language

        };

        localStorage.setItem(
            "cb_profile",
            JSON.stringify(profile)
        );

        try {

            await api("/api/profile", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(profile)

            });

            if ($("#saved")) {
                $("#saved").textContent =
                    " ✓ Saved";
            }

        } catch (error) {

            console.error(error);

            if ($("#saved")) {
                $("#saved").textContent =
                    " ✓ Saved offline";
            }
        }
    }
);

/* =========================================================
   ONLINE / OFFLINE DETECTION
   ========================================================= */

window.addEventListener(
    "online",
    () => {

        console.log(
            "CareBridge: Internet connection available."
        );

    }
);

window.addEventListener(
    "offline",
    () => {

        console.log(
            "CareBridge: Offline mode."
        );

    }
);

/* =========================================================
   START APPLICATION
   ========================================================= */

setup().catch(error => {

    console.error(
        "CareBridge startup error:",
        error
    );

    if ($("#status")) {
        $("#status").textContent =
            "Backend connection problem";
    }

});
/* =========================================================
   CAREBRIDGE MODERN CHAT
   ========================================================= */

(function initModernChat() {

    const chatInput = document.getElementById("chatInput");
    const sendButton = document.getElementById("sendMessage");
    const chatMessages = document.getElementById("chatMessages");
    const clearButton = document.getElementById("clearChat");
    const newTalkButton = document.getElementById("newTalk");

    if (!chatInput || !sendButton || !chatMessages) {
        return;
    }


    /* -----------------------------------------------------
       ADD MESSAGE
       ----------------------------------------------------- */

    function addMessage(role, text) {

        const wrapper = document.createElement("div");

        wrapper.className =
            role === "user"
                ? "message user-message"
                : "message ai-message";


        const avatar = document.createElement("div");

        avatar.className = "message-avatar";

        avatar.textContent =
            role === "user"
                ? "👤"
                : "🤖";


        const content = document.createElement("div");

        content.className = "message-content";


        const name = document.createElement("div");

        name.className = "message-name";

        name.textContent =
            role === "user"
                ? "You"
                : "CareBridge AI";


        const bubble = document.createElement("div");

        bubble.className = "message-bubble";

        bubble.textContent = text;


        const time = document.createElement("div");

        time.className = "message-time";

        time.textContent =
            new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            });


        content.appendChild(name);
        content.appendChild(bubble);
        content.appendChild(time);


        wrapper.appendChild(avatar);
        wrapper.appendChild(content);


        chatMessages.appendChild(wrapper);

        chatMessages.scrollTop =
            chatMessages.scrollHeight;

    }


    /* -----------------------------------------------------
       TYPING
       ----------------------------------------------------- */

    function showTyping() {

        const wrapper =
            document.createElement("div");

        wrapper.id = "aiTyping";

        wrapper.className = "message ai-message";


        wrapper.innerHTML = `
            <div class="message-avatar">🤖</div>

            <div class="message-content">

                <div class="message-name">
                    CareBridge AI
                </div>

                <div class="message-bubble typing-bubble">

                    <span></span>
                    <span></span>
                    <span></span>

                </div>

            </div>
        `;


        chatMessages.appendChild(wrapper);

        chatMessages.scrollTop =
            chatMessages.scrollHeight;
    }


    function removeTyping() {

        const typing =
            document.getElementById("aiTyping");

        if (typing) {
            typing.remove();
        }
    }


    /* -----------------------------------------------------
       SEND TO FLASK
       ----------------------------------------------------- */

    async function sendMessage() {

        const message =
            chatInput.value.trim();

        if (!message) {
            return;
        }


        /* Show user message */

        addMessage("user", message);

        chatInput.value = "";


        /* Show typing */

        showTyping();


        try {

            const response =
                await fetch("/api/assistant", {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        message: message,

                        language:
                            typeof S !== "undefined"
                                ? S.language
                                : "English",

                        region:
                            typeof S !== "undefined"
                                ? S.region
                                : "Tamil Nadu",

                        history:
                            typeof S !== "undefined" &&
                            Array.isArray(S.assistantHistory)
                                ? S.assistantHistory
                                : []

                    })
                });


            const data =
                await response.json();


            removeTyping();


            if (data.answer) {

                addMessage(
                    "assistant",
                    data.answer
                );


                /* Save conversation */

                if (typeof S !== "undefined") {

                    if (!Array.isArray(
                        S.assistantHistory
                    )) {

                        S.assistantHistory = [];

                    }


                    S.assistantHistory.push({

                        role: "user",
                        content: message

                    });


                    S.assistantHistory.push({

                        role: "assistant",
                        content: data.answer

                    });


                    /* Keep last 20 messages */

                    S.assistantHistory =
                        S.assistantHistory.slice(-20);

                }

            } else {

                addMessage(
                    "assistant",
                    "I couldn't generate a response right now. Please try again."
                );

            }

        } catch (error) {

            console.error(
                "CareBridge chat error:",
                error
            );

            removeTyping();

            addMessage(
                "assistant",
                "Unable to connect to the CareBridge AI backend. Please check that the Flask server is running."
            );
        }
    }


    /* -----------------------------------------------------
       SEND BUTTON
       ----------------------------------------------------- */

    sendButton.addEventListener(
        "click",
        sendMessage
    );


    /* -----------------------------------------------------
       ENTER KEY
       ----------------------------------------------------- */

    chatInput.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter" &&
                !event.shiftKey
            ) {

                event.preventDefault();

                sendMessage();
            }
        }
    );


    /* -----------------------------------------------------
       QUICK QUESTIONS
       ----------------------------------------------------- */

    document
        .querySelectorAll(
            ".quick-question, .example-question"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                function() {

                    chatInput.value =
                        this.textContent.trim();

                    chatInput.focus();

                }
            );

        });


    /* -----------------------------------------------------
       CLEAR CHAT
       ----------------------------------------------------- */

    function clearChat() {

        chatMessages.innerHTML = "";

        if (typeof S !== "undefined") {

            S.assistantHistory = [];

        }


        addMessage(
            "assistant",
            "Hello! I'm CareBridge AI. How can I help you today?"
        );
    }


    clearButton?.addEventListener(
        "click",
        clearChat
    );


    newTalkButton?.addEventListener(
        "click",
        clearChat
    );


    /* -----------------------------------------------------
       VOICE INPUT
       ----------------------------------------------------- */

    document
        .getElementById("voiceButton")
        ?.addEventListener(
            "click",
            function() {

                const SpeechRecognition =
                    window.SpeechRecognition ||
                    window.webkitSpeechRecognition;


                if (!SpeechRecognition) {

                    alert(
                        "Voice input is not supported by this browser."
                    );

                    return;
                }


                const recognition =
                    new SpeechRecognition();


                recognition.lang = "en-IN";

                recognition.interimResults = false;


                recognition.onresult =
                    function(event) {

                        chatInput.value =
                            event.results[0][0].transcript;

                        chatInput.focus();

                    };


                recognition.start();

            }
        );

})();