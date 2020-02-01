class Error {
    render() {
        const html = `
        	<div class="error-container">
                <div class="error-message">
                    <h3>Не удается получить доступ</h3>
                    <p>Попробуйти зайти позже</p>
                </div>
        	</div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();
