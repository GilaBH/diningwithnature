const button = document.querySelector('button');

button.addEventListener('click', event => {
	const printContents = document.getElementById('printScreen').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
});

