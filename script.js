
    const progress = document.querySelector('.progress-bar-front');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const steps = document.querySelectorAll('.step');

    let currentStep = 1;

    nextBtn.addEventListener('click', () => {
        if (currentStep < steps.length) {
            currentStep++;
            updateProgress();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateProgress();
        }
    });

    function updateProgress() {
        steps.forEach((step, i) => {
            if (i < currentStep) {
                step.classList.add('checked');
                step.innerHTML = `<i class="fas fa-check"></i><small>${step.innerText}</small>`;
            } else {
                step.classList.remove('checked');
                step.innerHTML = `<small>${step.innerText}</small>`;
            }
        });

        const progressPercent = ((currentStep - 1) / (steps.length - 1)) * 100;
        progress.style.width = `${progressPercent}%`;
    }

# 🔄 Step Progress Bar

A clean, animated, and fully responsive **Step Progress Bar** built with HTML, CSS, and JavaScript. This component visually represents progress through a multi-step process, such as forms or onboarding sequences.

---

## 🚀 Features

- ✅ Stylish design with gradients and animations
- ✅ Responsive layout for all screen sizes
- ✅ Interactive navigation with **Next** and **Previous** buttons
- ✅ Font Awesome icons for completed steps
- ✅ Smooth progress bar animation
- ✅ Easy to customize and integrate into any project

---

## 📂 Project Structure


---

## 📸 Preview

![Progress Bar Preview](https://via.placeholder.com/800x200.png?text=Step+Progress+Bar+Preview)

> _(Replace the link above with a screenshot of your project if you'd like)_

---

## 🛠️ Setup Instructions

1. **Clone or Download** this repository.
2. Open `index.html` in any modern web browser.
3. Modify or extend the steps and content as needed.

---

## 🧰 Technologies Used

- **HTML5** – Markup structure
- **CSS3** – Styling and layout
- **JavaScript (ES6)** – Interactivity
- **Font Awesome** – Icons

---

## 📦 How to Customize

- To **add or remove steps**, simply edit the `.step` elements in `index.html`.
- To change **progress behavior**, update logic in `script.js`.
- To switch up colors or animations, modify `style.css`.

---

## 🎨 Color Scheme

- Gradient: `#00c9ff → #92fe9d`
- Background: Dark theme (`#1c1c1c`)
- Accent: Glowing step indicators and hover effects

---

## 🧑‍💻 Author

**Your Name Here**  
[GitHub Profile](https://github.com/yourusername)

---

## 📄 License

This project is open-source and free to use under the [MIT License](https://choosealicense.com/licenses/mit/).
