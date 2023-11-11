const url = "quiz.json";
const app = document.getElementById("quiz");

(async () => {
    try {
        let promise = await fetch(url);
        if (!promise.ok) {
            throw Error("Error while reading file");
        }
        let quiz = await promise.json();
        let {
            q1,
            q2,
            q3,
            q4
        } = quiz.quiz;

        app.innerHTML += `<div class="box"><h2>Question 1: ${q1.question}</h2>
		<ul>${q1.options
			.map((item) => {
				return `<li><label><input id="input" type="radio" value="${item}" name="q1"> ${item}</label></li>`;
			})
			.join("")}</ul></div>

			<div class="box"><h2>Question 2: ${q2.question}</h2>
			<ul>${q2.options
				.map((item) => {
					return `<li><label><input id="input" type="radio" value="${item}" name="q2"> ${item}</label></li>`;
				})
				.join("")}</ul></div>

				<div class="box"><h2>Question 3: ${q3.question}</h2>
				<ul>${q3.options
					.map((item) => {
						return `<li><label><input id="input" type="radio" value="${item}" name="q3"> ${item}</label></li>`;
					})
					.join("")}</ul></div>

					<div class="box"><h2>Question 4: ${q4.question}</h2>
					<ul>${q4.options
						.map((item) => {
							return `<li><label><input id="input" type="radio" value="${item}" name="q4"> ${item}</label></li>`;
						})
						.join("")}</ul></div>
						`;


        (() => {
            let opt = document.getElementsByName("q1");
            let val = localStorage.getItem('q1');
            for (let i = 0; i < opt.length; i++) {
                if (opt[i].value == val) {
                    opt[i].checked = true;
                }
            }
            document.getElementsByName('q1').forEach(e => {
                e.onchange = () => {
                    localStorage.setItem('q1', e.value);
                }
            })
        })();
        (() => {
            let opt = document.getElementsByName("q2");
            let val = localStorage.getItem('q2');
            for (let i = 0; i < opt.length; i++) {
                if (opt[i].value == val) {
                    opt[i].checked = true;
                }
            }
            document.getElementsByName('q2').forEach(e => {
                e.onchange = () => {
                    localStorage.setItem('q2', e.value);
                }
            })
        })();
        (() => {
            let opt = document.getElementsByName("q3");
            let val = localStorage.getItem('q3');
            for (let i = 0; i < opt.length; i++) {
                if (opt[i].value == val) {
                    opt[i].checked = true;
                }
            }
            document.getElementsByName('q3').forEach(e => {
                e.onchange = () => {
                    localStorage.setItem('q3', e.value);
                }
            })
        })();
        (() => {
            let opt = document.getElementsByName("q4");
            let val = localStorage.getItem('q4');
            for (let i = 0; i < opt.length; i++) {
                if (opt[i].value == val) {
                    opt[i].checked = true;
                }
            }
            document.getElementsByName('q4').forEach(e => {
                e.onchange = () => {
                    localStorage.setItem('q4', e.value);
                }
            })
        })();

    } catch (error) {
        console.log(error);
    }
})();